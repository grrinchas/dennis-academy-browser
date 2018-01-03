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
        [ Window.resizes (\size -> OnWindowChange size)
        , Ports.getTokens OnLoadTokens
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
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Maybe Tokens -> Location -> ( Model, Cmd Msg )
init tokens location =
    updateLocation location initialModel
        |> andThen (initTokens tokens)
        |> andThen fetchUser
        |> andThen updateWindow
        |> Tuple.mapSecond Cmd.batch


view : Model -> Html Msg
view model =
    if model.window.width <= 600 then
        Pages.mobile model
    else
        Pages.tablet model


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
                    updateRoute DashboardRoute model

                ( SignUpRoute, True ) ->
                    updateRoute DashboardRoute model

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

        OnWindowChange size ->
            ( { model | window = size }, Cmd.none )

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
            removeToken model
                |> andThen (updateAuth0Token NotAsked)
                |> andThen (updateGraphCoolToken NotAsked)
                |> andThen (updateUser NotAsked)
                |> andThen (updateRoute HomeRoute)
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
            fetchSavedToken draft model |> Tuple.mapSecond Cmd.batch

        CreateDraft draft ->
            fetchCreatedToken draft model |> Tuple.mapSecond Cmd.batch


updateDraft : Draft -> Model -> ( Model, List (Cmd Msg) )
updateDraft draft model =
    let
        remote =
            model.remote
    in
        case model.remote.user of
            RemoteData.Success user ->
                let
                    drafts =
                        user.drafts
                in
                    ( { model | remote = { remote | user = RemoteData.succeed { user | drafts = Dict.insert draft.id draft user.drafts } } }, [] )

            _ ->
                ( model, [] )


onFetch : Web -> Model -> ( Model, List (Cmd Msg) )
onFetch web model =
    case web of
        WebAccount account ->
            updateAccount account model
                |> andThen resetForm

        WebAuth0Token token ->
            updateAuth0Token token model
                |> andThen fetchGraphCoolToken

        WebGraphCoolToken token ->
            updateGraphCoolToken token model
                |> andThen fetchUser

        WebUser user ->
            updateUser user model
                |> andThen resetForm
                |> andThen saveToken
                |> andThen reroute

        WebSaveDraft draft ->
            updateSavedDraft draft model

        WebCreateDraft draft ->
            let
                _ =
                    Debug.log "" draft
            in
                case draft of
                    NotAsked ->
                        ( model, [] )

                    Loading ->
                        ( model, [] )

                    Success draft ->
                        case model.remote.user of
                            NotAsked ->
                                ( model, [] )

                            Loading ->
                                ( model, [] )

                            Success user ->
                                let
                                    remote =
                                        model.remote
                                in
                                    let
                                        drafts =
                                            user.drafts
                                    in
                                        ( { model | remote = { remote | user = RemoteData.succeed { user | drafts = Dict.insert draft.id draft drafts } } }, [] )

                            Failure err ->
                                ( model, [] )

                    Failure err ->
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
            updateAccount Loading model
                |> andThen (\model -> ( model, [ Api.createAccount user ] ))

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
            updateUser Loading model
                |> andThen (\model -> ( model, [ Api.login user ] ))

        Nothing ->
            ( model, [] )


fetchSavedToken : Draft -> Model -> ( Model, List (Cmd Msg) )
fetchSavedToken draft model =
    let
        remote =
            model.remote
    in
        case model.remote.graphCool of
            RemoteData.Success token ->
                ( { model | remote = { remote | savedDraft = Loading } }, [ Api.saveDraft draft token ] )

            RemoteData.Failure err ->
                ( { model | remote = { remote | user = RemoteData.Failure err } }, [] )

            _ ->
                ( model, [] )


fetchCreatedToken : Draft -> Model -> ( Model, List (Cmd Msg) )
fetchCreatedToken draft model =
    let
        remote =
            model.remote
    in
        case model.remote.graphCool of
            RemoteData.Success token ->
                ( model, [ Api.createDraft draft token ] )

            RemoteData.Failure err ->
                ( { model | remote = { remote | user = RemoteData.Failure err } }, [] )

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


updateUser : WebData User -> Model -> ( Model, List (Cmd Msg) )
updateUser user model =
    let
        remote =
            model.remote
    in
        ( { model | remote = { remote | user = user } }, [] )


updateAccount : WebData Account -> Model -> ( Model, List (Cmd Msg) )
updateAccount account model =
    let
        remote =
            model.remote
    in
        ( { model | remote = { remote | account = account } }, [] )


updateSavedDraft : WebData Draft -> Model -> ( Model, List (Cmd Msg) )
updateSavedDraft draft model =
    let
        remote =
            model.remote
    in
        ( { model | remote = { remote | savedDraft = draft } }, [] )



-------------------------Update Others--------------------------------------


updateMenu : Menu -> Model -> ( Model, List (Cmd Msg) )
updateMenu menu model =
    ( { model | menu = menu }, [] )


updateForm : Form -> Model -> ( Model, List (Cmd Msg) )
updateForm form model =
    ( { model | form = form }, [] )


resetForm : Model -> ( Model, List (Cmd Msg) )
resetForm model =
    updateForm (Form Nothing Nothing Nothing Nothing) model


updateLocation : Location -> Model -> ( Model, List (Cmd Msg) )
updateLocation location model =
    ( { model | route = parseLocation location }, [] )


updateRoute : Route -> Model -> ( Model, List (Cmd Msg) )
updateRoute route model =
    ( model, [ Navigation.modifyUrl <| path route ] )


updateWindow : Model -> ( Model, List (Cmd Msg) )
updateWindow model =
    ( model, [ perform OnWindowChange Window.size ] )


resetMenu : Model -> ( Model, List (Cmd Msg) )
resetMenu model =
    ( { model | menu = Menu False False False }, [] )
