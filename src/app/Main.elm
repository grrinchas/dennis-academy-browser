port module Main exposing (..)

import Api
import Dict
import Err exposing (..)
import Mouse
import Platform.Cmd exposing (batch)
import Ports
import Html exposing (Html)
import Models exposing (..)
import Navigation exposing (Location)
import Pages
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData, succeed)
import Routes exposing (..)
import Task exposing (perform)
import Time exposing (Time)
import Window exposing (Size)


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
init tokens location =
    updateLocation location initialModel
        |> andThen (initTokens tokens)
        |> andThen fetchUser
        |> Tuple.mapSecond Cmd.batch


andThen : (a -> ( b, List c )) -> ( a, List c ) -> ( b, List c )
andThen apply ( a, c ) =
    let
        ( b, d ) =
            apply a
    in
        ( b, c ++ d )


reroute : Model -> ( Model, List (Cmd Msg) )
reroute model =
    case model.route of
        Ok route ->
            case ( route, isLoggedIn model ) of
                ( LoginRoute, True ) ->
                    ( model, [ Navigation.modifyUrl <| path DashboardRoute ] )

                ( SignUpRoute, True ) ->
                    ( model, [ Navigation.modifyUrl <| path DashboardRoute ] )

                ( DashboardRoute, False ) ->
                    ( { model | route = Err NotFound }, [] )

                ( DraftRoute _, False ) ->
                    ( { model | route = Err NotFound }, [] )

                ( DraftsRoute, False ) ->
                    ( { model | route = Err NotFound }, [] )

                _ ->
                    ( model, [] )

        Err oops ->
            ( model, [] )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOperation ->
            ( model, Cmd.none )

        OnLocationChange location ->
            updateLocation location model
                |> andThen reroute
                |> andThen resetMenu
                |> Tuple.mapSecond Cmd.batch

        UpdateRoute route ->
            ( model, Navigation.newUrl <| path route )

        OnFormChange form ->
            updateForm form model
                |> Tuple.mapSecond Cmd.batch

        OnMenuChange menu ->
            updateMenu menu model
                |> Tuple.mapSecond Cmd.batch

        CreateAccount user ->
            fetchAccount user model
                |> Tuple.mapSecond Cmd.batch

        Login mUser ->
            fetchAuth0Token mUser model
                |> Tuple.mapSecond Cmd.batch

        Logout ->
            resetRemote model
                |> withCommands
                    [ Ports.saveTokens Nothing
                    , Navigation.modifyUrl <| path HomeRoute
                    ]
                |> Tuple.mapSecond Cmd.batch

        OnFetch web ->
            onFetch web model
                |> Tuple.mapSecond Cmd.batch

        OnLoadTokens tokens ->
            initTokens tokens model
                |> Tuple.mapSecond Cmd.batch

        OnDraftChange draft ->
            updateDraft draft model
                |> Tuple.mapSecond Cmd.batch

        MouseClicked _ ->
            resetMenu model
                |> Tuple.mapSecond Cmd.batch

        SaveDraft draft ->
            fetchSavedDraft draft model |> Tuple.mapSecond Cmd.batch

        CreateDraft draft ->
            fetchCreatedDraft draft model |> Tuple.mapSecond Cmd.batch

        DeleteDraft draft ->
            fetchDeletedDraft draft model |> Tuple.mapSecond Cmd.batch


updateDraft : Draft -> Model -> ( Model, List (Cmd Msg) )
updateDraft draft model =
    case model.remote.user of
        RemoteData.Success user ->
            remoteUser (succeed { user | drafts = Dict.insert draft.id draft user.drafts }) model
                |> withNoCommand

        _ ->
            ( model, [] )


onFetch : Web -> Model -> ( Model, List (Cmd Msg) )
onFetch web model =
    case web of
        WebAccount account ->
            remoteAccount account model
                |> resetForm
                |> withNoCommand

        WebAuth0Token token ->
            updateAuth0Token token model
                |> andThen fetchGraphCoolToken

        WebGraphCoolToken token ->
            updateGraphCoolToken token model
                |> andThen fetchUser

        WebUser user ->
            ( remoteUser user model |> resetForm, [] )
                |> andThen saveToken
                |> andThen reroute

        WebSaveDraft draft ->
            updateSavedDraft draft model

        WebCreateDraft draft ->
            case draft of
                Success draft ->
                    case model.remote.user of
                        Success user ->
                            remoteUser (RemoteData.succeed { user | drafts = Dict.insert draft.id draft user.drafts }) model
                                |> Models.resetForm
                                |> Models.resetMenu
                                |> withNoCommand

                        _ ->
                            ( model, [] )

                _ ->
                    ( model, [] )

        WebDeleteDraft web ->
            case web of
                Success id ->
                    case model.remote.user of
                        Success user ->
                            remoteUser (RemoteData.succeed { user | drafts = Dict.remove id user.drafts }) model
                                |> withNoCommand

                        _ ->
                            ( model, [] )

                _ ->
                    ( model, [] )


initTokens : Maybe Tokens -> Model -> ( Model, List (Cmd Msg) )
initTokens tokens model =
    let
        remote =
            model.remote
    in
        case tokens of
            Just { auth0, graphCool } ->
                ( { model | remote = { remote | auth0 = RemoteData.succeed auth0, graphCool = RemoteData.succeed graphCool } }, [] )

            Nothing ->
                ( { model | remote = { remote | auth0 = NotAsked, graphCool = NotAsked } }, [] )


saveToken : Model -> ( Model, List (Cmd Msg) )
saveToken model =
    case ( model.remote.auth0, model.remote.graphCool ) of
        ( RemoteData.Success auth0, RemoteData.Success graphCool ) ->
            ( model, [ Ports.saveTokens <| Just { auth0 = auth0, graphCool = graphCool } ] )

        _ ->
            removeToken model


removeToken : Model -> ( Model, List (Cmd Msg) )
removeToken model =
    ( model, [ Ports.saveTokens Nothing ] )



-------------------------Fetch Remotes--------------------------------------


fetchAccount : Maybe ValidUser -> Model -> ( Model, List (Cmd Msg) )
fetchAccount mUser model =
    case mUser of
        Just user ->
            remoteAccount Loading model
                |> withCommands [ Api.createAccount user ]

        Nothing ->
            ( model, [] )


fetchGraphCoolToken : Model -> ( Model, List (Cmd Msg) )
fetchGraphCoolToken model =
    case model.remote.auth0 of
        RemoteData.Success token ->
            ( model, [ Api.authGraphCool token ] )

        RemoteData.Failure err ->
            let
                remote =
                    model.remote
            in
                ( { model | remote = { remote | user = RemoteData.Failure err } }, [] )

        _ ->
            ( model, [] )


fetchUser : Model -> ( Model, List (Cmd Msg) )
fetchUser model =
    let
        remote =
            model.remote
    in
        case model.remote.graphCool of
            RemoteData.Success token ->
                ( { model | remote = { remote | user = Loading } }, [ Api.fetchUser token ] )

            RemoteData.Failure err ->
                ( { model | remote = { remote | user = RemoteData.Failure err } }, [] )

            _ ->
                ( model, [] )


fetchAuth0Token : Maybe ValidUser -> Model -> ( Model, List (Cmd Msg) )
fetchAuth0Token mUser model =
    case mUser of
        Just user ->
            remoteUser Loading model
                |> withCommands
                    [ Api.login user ]

        Nothing ->
            ( model, [] )


fetchSavedDraft : Draft -> Model -> ( Model, List (Cmd Msg) )
fetchSavedDraft draft model =
    case model.remote.graphCool of
        RemoteData.Success token ->
            remoteUpdatedDraft Loading model
                |> withCommands [ Api.saveDraft draft token ]

        _ ->
            ( model, [] )


fetchCreatedDraft : Draft -> Model -> ( Model, List (Cmd Msg) )
fetchCreatedDraft draft model =
    case model.remote.graphCool of
        RemoteData.Success token ->
            withCommands [ Api.createDraft draft token ] model

        _ ->
            ( model, [] )


fetchDeletedDraft : Draft -> Model -> ( Model, List (Cmd Msg) )
fetchDeletedDraft draft model =
    case model.remote.graphCool of
        RemoteData.Success token ->
            withCommands [ Api.deleteDraft draft token ] model

        _ ->
            ( model, [] )



-------------------------Update Remote--------------------------------------


updateAuth0Token : WebData Auth0Token -> Model -> ( Model, List (Cmd Msg) )
updateAuth0Token token model =
    let
        remote =
            model.remote
    in
        ( { model | remote = { remote | auth0 = token } }, [] )


updateGraphCoolToken : WebData AuthGraphCool -> Model -> ( Model, List (Cmd Msg) )
updateGraphCoolToken token model =
    let
        remote =
            model.remote
    in
        ( { model | remote = { remote | graphCool = token } }, [] )


updateSavedDraft : WebData Draft -> Model -> ( Model, List (Cmd Msg) )
updateSavedDraft web model =
    case web of
        Success draft ->
            case model.remote.user of
                Success user ->
                    remoteUpdatedDraft web model
                        |> remoteUser (RemoteData.succeed { user | drafts = Dict.insert draft.id draft user.drafts })
                        |> withNoCommand

                _ ->
                    ( model, [] )

        _ ->
            ( model, [] )



-------------------------Update Others--------------------------------------


updateMenu : Menu -> Model -> ( Model, List (Cmd Msg) )
updateMenu menu model =
    ( { model | menu = menu }, [] )


updateForm : Form -> Model -> ( Model, List (Cmd Msg) )
updateForm form model =
    ( { model | form = form }, [] )


updateLocation : Location -> Model -> ( Model, List (Cmd Msg) )
updateLocation location model =
    ( { model | route = parseLocation location }, [] )


resetMenu : Model -> ( Model, List (Cmd Msg) )
resetMenu model =
    ( { model | menu = Menu False False False }, [] )
