port module Main exposing (..)

import Api
import Dict
import Err exposing (..)
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
        [ Ports.getTokens OnLoadTokens
        , Mouse.clicks MouseClicked
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
                            SaveDraft draft

                        _ ->
                            case RemoteData.map (\saved -> saved.content /= draft.content) model.remote.savedDraft |> RemoteData.withDefault False of
                                True ->
                                    SaveDraft draft

                                False ->
                                    NoOperation

                Nothing ->
                    NoOperation

        _ ->
            NoOperation


main : Program (Maybe Tokens) Model Msg
main =
    Navigation.programWithFlags OnLocationChange
        { init = init
        , view = Pages.view
        , update = update
        , subscriptions = subscriptions
        }


init : Maybe Tokens -> Location -> ( Model, Cmd Msg )
init tokens loc =
    location loc initialModel
        |> initTokens tokens
        |> (\model -> mapLoggedInUser (\token -> withCommands [ Api.fetchUser token ] model) model)


reroute : Model -> ( Model, Cmd Msg )
reroute model =
    case model.route of
        Ok route ->
            case ( route, isLoggedIn model ) of
                ( LoginRoute, True ) ->
                    ( model, Navigation.modifyUrl <| path DashboardRoute )

                ( SignUpRoute, True ) ->
                    ( model, Navigation.modifyUrl <| path DashboardRoute )

                ( DashboardRoute, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( DraftRoute _, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( DraftsRoute, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                _ ->
                    withNoCommand model

        Err oops ->
            withNoCommand model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOperation ->
            ( model, Cmd.none )

        OnLocationChange loc ->
            location loc model
                |> resetMenu
                |> reroute

        UpdateRoute route ->
            ( model, Navigation.newUrl <| path route )

        OnFormChange f ->
            ( form f model, Cmd.none )

        OnMenuChange m ->
            ( menu m model, Cmd.none )

        CreateAccount maybeValid ->
            Maybe.map (\user -> (remoteAccount Loading model |> withCommands [ Api.createAccount user ])) maybeValid
                |> Maybe.withDefault (withNoCommand model)

        Login maybeValid ->
            Maybe.map (\user -> (remoteUser Loading model |> withCommands [ Api.login user ])) maybeValid
                |> Maybe.withDefault (withNoCommand model)

        Logout ->
            resetRemote model
                |> withCommands
                    [ Ports.saveTokens Nothing
                    , Navigation.modifyUrl <| path HomeRoute
                    ]

        OnFetch web ->
            onFetch web model

        OnLoadTokens tokens ->
            ( initTokens tokens model, Cmd.none )

        OnDraftChange draft ->
            updateDraft draft model

        MouseClicked _ ->
            ( resetMenu model, Cmd.none )

        SaveDraft draft ->
            mapLoggedInUser (\token -> ( remoteUpdatedDraft Loading model, Api.saveDraft draft token )) model

        CreateDraft draft ->
            mapLoggedInUser (\token -> ( model, Api.createDraft draft token )) model

        DeleteDraft draft ->
            mapLoggedInUser (\token -> ( model, Api.deleteDraft draft token )) model


updateDraft : Draft -> Model -> ( Model, Cmd Msg )
updateDraft draft model =
    case model.remote.user of
        RemoteData.Success user ->
            remoteUser (succeed { user | drafts = Dict.insert draft.id draft user.drafts }) model
                |> withNoCommand

        _ ->
            withNoCommand model


onFetch : Web -> Model -> ( Model, Cmd Msg )
onFetch web model =
    case web of
        WebAccount account ->
            remoteAccount account model
                |> resetForm
                |> withNoCommand

        WebAuth0Token token ->
            remoteAuth0 token model
                |> fetchGraphCoolToken

        WebGraphCoolToken token ->
            remoteGraphCool token model
                |> (\model -> mapLoggedInUser (\token -> withCommands [ Api.fetchUser token ] model) model)

        WebUser user ->
            remoteUser user model
                |> resetForm
                |> reroute
                |> (\( m, c ) -> ( m, Cmd.batch [ c, saveToken m ] ))

        WebSaveDraft web ->
            case RemoteData.append model.remote.user web of
                Success ( user, draft ) ->
                    remoteUpdatedDraft web model |> remoteUser (succeed { user | drafts = Dict.insert draft.id draft user.drafts }) |> withNoCommand

                Failure err ->
                    failRemoteUser err model
                        |> withNoCommand

                _ ->
                    withNoCommand model

        WebCreateDraft web ->
            case RemoteData.append model.remote.user web of
                Success ( user, draft ) ->
                    remoteUser (succeed { user | drafts = Dict.insert draft.id draft user.drafts }) model
                        |> resetForm
                        |> resetMenu
                        |> withNoCommand

                Failure err ->
                    failRemoteUser err model
                        |> withNoCommand

                _ ->
                    withNoCommand model

        WebDeleteDraft web ->
            case RemoteData.append model.remote.user web of
                Success ( user, id ) ->
                    remoteUser (succeed { user | drafts = Dict.remove id user.drafts }) model |> resetMenu |> withNoCommand

                Failure err ->
                    failRemoteUser err model
                        |> withNoCommand

                _ ->
                    withNoCommand model


initTokens : Maybe Tokens -> Model -> Model
initTokens tokens model =
    case tokens of
        Just { auth0, graphCool } ->
            remoteAuth0 (succeed auth0) model
                |> remoteGraphCool (succeed graphCool)

        Nothing ->
            remoteAuth0 NotAsked model
                |> remoteGraphCool NotAsked


saveToken : Model -> Cmd Msg
saveToken model =
    case ( model.remote.auth0, model.remote.graphCool ) of
        ( RemoteData.Success auth0, RemoteData.Success graphCool ) ->
            Ports.saveTokens <| Just { auth0 = auth0, graphCool = graphCool }

        _ ->
            Cmd.none


fetchGraphCoolToken : Model -> ( Model, Cmd Msg )
fetchGraphCoolToken model =
    case model.remote.auth0 of
        RemoteData.Success token ->
            withCommands [ Api.authGraphCool token ] model

        RemoteData.Failure err ->
            failRemoteUser err model
                |> withNoCommand

        _ ->
            withNoCommand model


mapLoggedInUser : (AuthGraphCool -> ( Model, Cmd Msg )) -> Model -> ( Model, Cmd Msg )
mapLoggedInUser f model =
    case model.remote.graphCool of
        Success token ->
            f token

        Failure err ->
            failRemoteUser err model |> withNoCommand

        _ ->
            withNoCommand model
