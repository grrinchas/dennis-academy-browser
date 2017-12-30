port module Main exposing (..)

import Api
import Err exposing (..)
import Platform.Cmd exposing (batch)
import Ports
import Html exposing (Html)
import Messages exposing (..)
import Models exposing (..)
import Navigation exposing (Location)
import Pages
import RemoteData exposing (RemoteData(Loading, NotAsked), WebData, succeed)
import Routes exposing (..)
import Task exposing (perform)
import Validator exposing (ValidUser)
import Window exposing (Size)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ Window.resizes (\size -> OnWindowChange size), Ports.getTokens OnLoadTokens ]


main : Program (Maybe { auth0 : Auth0Token, graphCool : GraphCoolToken }) Model Msg
main =
    Navigation.programWithFlags OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Maybe { auth0 : Auth0Token, graphCool : GraphCoolToken } -> Location -> ( Model, Cmd Msg )
init tokens location =
    ( initialModel, [ Navigation.modifyUrl location.hash ] )
        |> andThen (initTokens tokens)
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
            case ( route, RemoteData.isSuccess model.tokens.auth0, RemoteData.isSuccess model.tokens.graphCool ) of
                ( LoginRoute, True, True ) ->
                    updateRoute DashboardRoute model

                ( SignUpRoute, True, True ) ->
                    updateRoute DashboardRoute model

                ( HomeRoute (Just _), True, True ) ->
                    updateRoute DashboardRoute model

                ( DashboardRoute, False, _ ) ->
                    ( { model | route = Err NotFound }, [] )

                ( DashboardRoute, _, False ) ->
                    ( { model | route = Err NotFound }, [] )

                _ ->
                    ( model, [] )

        Err oops ->
            ( model, [] )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnLocationChange location ->
            updateLocation location model
                |> andThen parseHomeRoute
                |> andThen reroute
                |> Tuple.mapSecond Cmd.batch

        OnWindowChange size ->
            ( { model | window = size }, Cmd.none )

        OnFormChange form ->
            updateForm form model
                |> Tuple.mapSecond Cmd.batch

        CreateAccount user ->
            updateAccount user Loading model
                |> andThen (fetchAccount user)
                |> Tuple.mapSecond Cmd.batch

        Login idp ->
            login idp model
                |> Tuple.mapSecond Cmd.batch

        Logout ->
            removeToken model
                |> andThen (updateRoute <| HomeRoute Nothing)
                |> Tuple.mapSecond Cmd.batch

        OnFetchAccount account ->
            ( { model | account = account }, [] )
                |> andThen resetForm
                |> Tuple.mapSecond Cmd.batch

        OnFetchAuth0Token token ->
            updateAuth0Token token model
                |> andThen (updateGraphCoolToken Loading)
                |> andThen fetchGraphCoolToken
                |> Tuple.mapSecond Cmd.batch

        OnFetchGraphCoolToken token ->
            updateGraphCoolToken token model
                |> andThen resetForm
                |> andThen saveToken
                |> andThen reroute
                |> Tuple.mapSecond Cmd.batch

        OnLoadTokens tokens ->
            initTokens tokens model
                |> Tuple.mapSecond Cmd.batch


initTokens : Maybe { auth0 : Auth0Token, graphCool : GraphCoolToken } -> Model -> ( Model, List (Cmd Msg) )
initTokens tokens model =
    case tokens of
        Just { auth0, graphCool } ->
            ( { model | tokens = { auth0 = RemoteData.succeed auth0, graphCool = RemoteData.succeed graphCool } }, [] )

        Nothing ->
            ( { model | tokens = { auth0 = NotAsked, graphCool = NotAsked } }, [] )


updateForm : Form -> Model -> ( Model, List (Cmd Msg) )
updateForm form model =
    ( { model | form = form }, [] )


updateAccount : Maybe ValidUser -> WebData Account -> Model -> ( Model, List (Cmd Msg) )
updateAccount user account model =
    case user of
        Just user ->
            ( { model | account = Loading }, [] )

        Nothing ->
            ( model, [] )


fetchAccount : Maybe ValidUser -> Model -> ( Model, List (Cmd Msg) )
fetchAccount mUser model =
    case mUser of
        Just user ->
            ( model, [ Api.createAccount user ] )

        Nothing ->
            ( model, [] )


updateLocation : Location -> Model -> ( Model, List (Cmd Msg) )
updateLocation location model =
    ( { model | route = parseLocation location }, [] )


updateRoute : Route -> Model -> ( Model, List (Cmd Msg) )
updateRoute route model =
    ( model, [ Navigation.modifyUrl <| path route ] )


updateWindow : Model -> ( Model, List (Cmd Msg) )
updateWindow model =
    ( model, [ perform OnWindowChange Window.size ] )


updateAuth0Token : WebData Auth0Token -> Model -> ( Model, List (Cmd Msg) )
updateAuth0Token token model =
    ( { model | tokens = { auth0 = token, graphCool = model.tokens.graphCool } }, [] )


updateGraphCoolToken : WebData GraphCoolToken -> Model -> ( Model, List (Cmd Msg) )
updateGraphCoolToken token model =
    ( { model | tokens = { auth0 = model.tokens.auth0, graphCool = token } }, [] )


fetchGraphCoolToken : Model -> ( Model, List (Cmd Msg) )
fetchGraphCoolToken model =
    case model.tokens.auth0 of
        RemoteData.Success token ->
            ( model, [ Api.authGraphCool token ] )

        RemoteData.Failure err ->
            ( { model | tokens = { auth0 = model.tokens.auth0, graphCool = RemoteData.Failure err } }, [] )

        _ ->
            ( model, [] )


resetForm : Model -> ( Model, List (Cmd Msg) )
resetForm model =
    updateForm (Form Nothing Nothing Nothing Nothing) model


saveToken : Model -> ( Model, List (Cmd Msg) )
saveToken model =
    case ( model.tokens.auth0, model.tokens.graphCool ) of
        ( RemoteData.Success auth0, RemoteData.Success graphCool ) ->
            ( model, [ Ports.saveTokens <| Just { auth0 = auth0, graphCool = graphCool } ] )

        _ ->
            ( model, [] )


removeToken : Model -> ( Model, List (Cmd Msg) )
removeToken model =
    ( model, [ Ports.saveTokens Nothing ] )


login : IdProvider -> Model -> ( Model, List (Cmd Msg) )
login idProvider model =
    case idProvider of
        Database mUser ->
            case mUser of
                Just user ->
                    updateAuth0Token Loading model
                        |> andThen (loginUser user)

                Nothing ->
                    ( model, [] )

        Google ->
            updateAuth0Token Loading model
                |> andThen loginGoogle

        Facebook ->
            updateAuth0Token Loading model
                |> andThen loginFacebook

        Github ->
            updateAuth0Token Loading model
                |> andThen loginGithub


loginGithub : Model -> ( Model, List (Cmd Msg) )
loginGithub model =
    ( model, [ Ports.loginGithub () ] )


loginFacebook : Model -> ( Model, List (Cmd Msg) )
loginFacebook model =
    ( model, [ Ports.loginFacebook () ] )


loginGoogle : Model -> ( Model, List (Cmd Msg) )
loginGoogle model =
    ( model, [ Ports.loginGoogle () ] )


loginUser : ValidUser -> Model -> ( Model, List (Cmd Msg) )
loginUser user model =
    ( model, [ Api.login user ] )


parseHomeRoute : Model -> ( Model, List (Cmd Msg) )
parseHomeRoute model =
    case model.route of
        Ok route ->
            case route of
                HomeRoute mToken ->
                    case mToken of
                        Just token ->
                            updateAuth0Token (RemoteData.succeed token) model
                                |> andThen (updateGraphCoolToken Loading)
                                |> andThen fetchGraphCoolToken

                        Nothing ->
                            ( model, [] )

                _ ->
                    ( model, [] )

        Err oops ->
            ( model, [] )
