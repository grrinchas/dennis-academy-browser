port module Main exposing (..)

import Api
import Commands exposing (removeTokens, reroute, saveTokens, updateTime)
import Dict
import Json.Decode
import Mouse
import Platform.Cmd exposing (batch)
import Ports
import Models exposing (..)
import Navigation exposing (Location)
import Pages
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData, succeed)
import Routes exposing (..)
import Time exposing (Time)



subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Ports.getTokens WhenTokensLoaded
        , Mouse.clicks ClickMouse
        , Time.every (5 * Time.minute) <| autoSaveDraft model
        ]


autoSaveDraft : Model -> Time -> Msg
autoSaveDraft model time =
    case model.route of
        Ok (DraftRoute id) ->
            case RemoteData.map (\user -> Dict.get id user.drafts) model.remote.user |> RemoteData.withDefault Nothing of
                Just draft ->
                    case model.remote.savedDraft of
                        NotAsked ->
                            ClickUpdateDraft draft

                        _ ->
                            case RemoteData.map (\saved -> saved.content /= draft.content || saved.title /= draft.title) model.remote.savedDraft |> RemoteData.withDefault False of
                                True ->
                                    ClickUpdateDraft draft

                                False ->
                                    WhenNoOperation

                Nothing ->
                    WhenNoOperation

        _ ->
            WhenNoOperation


main : Program (Maybe Tokens) Model Msg
main =
    Navigation.programWithFlags WhenLocationChanges
        { init = init
        , view = Pages.view
        , update = update
        , subscriptions = subscriptions
        }



init : Maybe Tokens -> Location -> ( Model, Cmd Msg )
init tokens loc =
    location loc initialModel
        |> updateTokens tokens
        |> withCommands
            [ updateTime ]
        |> andAlso Api.fetchAdmin
        |> andAlso Api.fetchPublicDrafts
        |> andAlso Api.fetchPublications


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        WhenNoOperation ->
            ( model, Cmd.none )

        WhenTimeChanges time ->
            ( { model | now = time }, Cmd.none )

        WhenLocationChanges loc ->
            location loc model
                |> resetMenu
                |> reroute

        WhenFormChanges f ->
            form f model
                |> withNoCommand

        WhenMenuChanges m ->
            menu m model
                |> withNoCommand

        WhenTokensLoaded tokens ->
            updateTokens tokens model
                |> withNoCommand

        WhenDraftChanges draft ->
            updateDraft (succeed draft) model
                |> withNoCommand

        WhenSnackBarChanges bar ->
            ({model | snackBar = bar}, Cmd.none)

        ClickUpdateRoute route ->
            ( model, Navigation.newUrl <| path route )

        ClickCreateAccount maybeValid ->
            remoteAccount Loading model
                |> Api.createAccount maybeValid

        ClickLogin maybeValid ->
            remoteUser Loading model
                |> Api.login maybeValid

        ClickLogout ->
            resetRemote model
                |> withCommands
                    [ removeTokens
                    , Navigation.modifyUrl <| path HomeRoute
                    ]

        ClickMouse _ ->
            resetMenu model
                |> resetSnackBar
                |> withNoCommand

        ClickCreateDraft draft ->
            Api.createDraft draft model

        ClickCreatePublication pub ->
            Api.createPublication pub model

        ClickUpdateDraft draft ->
            remoteUpdatedDraft Loading model
                |> Api.updateDraft draft

        ClickUpdatePublication pub ->
             Api.updatePublication pub model

        ClickDeleteDraft draft ->
            Api.deleteDraft draft model

        ClickDeletePublication pub ->
            Api.deletePublication pub model

        ClickLikeDraft draft ->
            updatePublicDrafts (RemoteData.succeed draft) model
                |> updateLikedDraft draft
                |> Api.likeDraft draft
                |> andAlso (Api.createNotification draft.id draft.owner LIKED_DRAFT)


        ClickUnLikeDraft draft ->
            updatePublicDrafts (RemoteData.succeed draft) model
                |> removeLikedDraft draft
                |> Api.unLikeDraft draft
                |> andAlso (Api.createNotification draft.id draft.owner UNLIKED_DRAFT)

        ClickLikePublication pub ->
            updatePublications (RemoteData.succeed pub) model
                |> updateLikedPublication pub
                |> Api.likePublication pub
                |> andAlso (Api.createNotification pub.id pub.owner LIKED_PUBLICATION)

        ClickUnLikePublication pub ->
            updatePublications (RemoteData.succeed pub) model
                |> removeLikedPublication pub
                |> Api.unLikePublication pub
                |> andAlso (Api.createNotification pub.id pub.owner UNLIKED_PUBLICATION)

        ClickRefreshPublicDrafts ->
            remoteRefreshedPublicDrafts Loading model
                |> Api.fetchPublicDrafts

        ClickUpdateProfile ->
            remoteUserProfile Loading model
                |> Api.updateUser

        ClickDeleteNotification note->
            removeNotification note model
                |> Api.deleteNotification note

        OnFetchCreatedAccount account ->
            checkForFailure account model
                |> remoteAccount account
                |> resetForm
                |> withNoCommand

        OnFetchAuth0Token token ->
            checkForFailure token model
                |> remoteAuth0 token
                |> Api.authGraphCool

        OnFetchGraphCoolToken token ->
            checkForFailure token model
                |> remoteGraphCool token
                |> Api.fetchAdmin
                |> andAlso Api.fetchPublicDrafts

        OnFetchUserInfo user ->
            checkForFailure user model
                |> remoteUser user
                |> resetForm
                |> withCommands
                    [ saveTokens model ]
                |> andAlso reroute

        OnFetchUpdatedDraft web ->
            checkForFailure web model
                |> remoteUpdatedDraft web
                |> updateDraft web
                |> resetMenu
                |> withCommands
                    [ updateTime ]
                |> andAlso
                    (\m ->
                        case m.route of
                            Ok PublicDraftsRoute ->
                                Api.fetchPublicDrafts m

                            Ok (ProfileRoute id) ->
                                Api.fetchUserProfile id m

                            _ ->
                                withNoCommand m
                    )

        OnFetchUpdatedPublication web ->
            checkForFailure web model
                |> updatePublication web
                |> resetMenu
                |> withNoCommand

        OnFetchCreatedDraft web ->
            checkForFailure web model
                |> updateDraft web
                |> resetForm
                |> resetMenu
                |> (\m -> RemoteData.map (\draft ->
                    snackBar
                        { message = "Draft has been successfully created."
                        , display = True
                        , action = Just {msg = ClickUpdateRoute <| DraftRoute draft.id, string = "EDIT"}
                        } m
                        ) web
                        |> RemoteData.withDefault m
                   )
                |> reroute


        OnFetchDeletedDraft web ->
            checkForFailure web model
                |> removeDraft web
                |> resetMenu
                |>
                (\m -> if RemoteData.isSuccess web then
                       snackBar { message = "Draft has been successfully deleted." , display = True, action = Nothing} m
                  else  m )
                |> (\m ->
                        case m.route of
                            Ok PublicDraftsRoute ->
                                Api.fetchPublicDrafts m

                            Ok (ProfileRoute id) ->
                                Api.fetchUserProfile id m

                            _ ->
                                withNoCommand m
                   )

        OnFetchDeletedPublication web ->
            checkForFailure web model
                |> removePublication web
                |> resetMenu
                |> (\m -> if RemoteData.isSuccess web then
                       snackBar { message = "Publication has been successfully deleted." , display = True, action = Nothing} m
                  else  m )
                |> (\m ->
                        case m.route of
                            Ok PublicationsRoute ->
                                Api.fetchPublications m

                            _ ->
                                withNoCommand m
                   )


        OnFetchPublicDrafts web ->
            checkForFailure web model
                |> remotePublicDrafts web
                |> remoteRefreshedPublicDrafts (succeed ())
                |> withNoCommand

        OnFetchPublications web ->
            checkForFailure web model
                |> remotePublications web
                |> withNoCommand

        OnFetchUserProfile web ->
            checkForFailure web model
                |> remoteUserProfile web
                |> (\m -> RemoteData.map (\p -> formUserBio p.bio m) web |> RemoteData.withDefault m)
                |> withNoCommand

        OnFetchCreatedPublication web ->
            checkForFailure web model
                |> resetMenu
                |> withNoCommand

        ClickLeftSlide ->
            case model.slideShow - 1 < 0 of
                True -> ({model| slideShow = 2}, Cmd.none)
                False -> ({model | slideShow = model.slideShow - 1}, Cmd.none)
        ClickRightSlide ->
            case model.slideShow + 1 > 2 of
                True -> ({model| slideShow = 0}, Cmd.none)
                False -> ({model | slideShow = model.slideShow + 1}, Cmd.none)




checkForFailure: WebData a -> Model -> Model
checkForFailure web model =
    case web of
        Failure err -> remoteUser (Failure err) model
        _-> model
