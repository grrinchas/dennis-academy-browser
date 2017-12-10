module Main exposing (main)

import Persistence
import Views.Pages as Pages exposing (..)
import Html exposing (Html)
import Messages exposing (..)
import Model exposing (..)
import Navigation exposing (Location, back, load, modifyUrl, newUrl)
import Platform.Cmd exposing (batch)
import RemoteData exposing (WebData)
import Routes exposing (..)
import Task exposing (perform)
import Api exposing (..)
import Window exposing (Size)


main : Program (Maybe Token) Model Msg
main =
    Navigation.programWithFlags OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : Model.Model -> Sub Msg
subscriptions model =
    Sub.batch [ Window.resizes (\size -> OnWindowChange size), Persistence.get OnTokenLoad ]


init : Maybe Token -> Location -> ( Model, Cmd Msg )
init token location =
    let
        model =
            { initialModel
                | token = Maybe.map RemoteData.succeed token |> Maybe.withDefault RemoteData.NotAsked
                , route = parseLocation location
            }
    in
        ( model
        , batch
            [ fetchBrand
            , fetchAllTopics
            , RemoteData.map fetchUserInfo model.token |> RemoteData.withDefault Cmd.none
            , perform OnWindowChange Window.size
            ]
        )


view : Model -> Html Msg
view model =
    if model.window.width <= 600 then
        (page model).mobile
    else
        (page model).tablet


page : Model -> View Msg
page model =
    case model.route of
        HomeRoute ->
            Pages.landing model

        TopicsRoute ->
            Pages.topics model

        TopicRoute id ->
            Pages.topic model id

        QuestionRoute topicId questionId ->
            Pages.question model topicId questionId

        SignUpRoute ->
            Pages.signUp model

        LoginRoute ->
            Pages.login model

        UserHomeRoute ->
            Pages.userHome model

        NotFoundRoute ->
            Pages.notFound


resolveRoute : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
resolveRoute ( model, cmd ) =
    case ( model.route, isLoggedIn model ) of
        ( SignUpRoute, True ) ->
            ( model, Cmd.batch [ cmd, modifyUrl <| toPath UserHomeRoute ] )

        ( LoginRoute, True ) ->
            ( model, Cmd.batch [ cmd, modifyUrl <| toPath UserHomeRoute ] )

        ( UserHomeRoute, False ) ->
            ( model, Cmd.batch [ cmd, modifyUrl <| toPath HomeRoute ] )

        _ ->
            ( model, cmd )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        OnFetchBrand response ->
            ( { model | brand = response }, Cmd.none )

        OnLocationChange location ->
            resolveRoute ( { model | route = parseLocation location }, Cmd.none )

        OnUserSignUp response ->
            ( { model | signUp = response }, Cmd.none )

        OnUserLogin response ->
            ( { model | token = response }
            , batch
                [ RemoteData.withDefault Cmd.none <| RemoteData.map fetchUserInfo response
                , Persistence.put <| RemoteData.toMaybe response
                ]
            )

        OnFetchUserInfo response ->
            resolveRoute ( { model | user = response }, Cmd.none )

        OnWindowChange size ->
            ( { model | window = size }, Cmd.none )

        UpdateRoute route ->
            ( model, modifyUrl <| toPath route )

        OnSignUpForm form ->
            onSignUpForm form model.userForm model

        OnLoginForm form ->
            onLoginForm form model.userForm model

        Logout ->
            resolveRoute ( { model | user = RemoteData.NotAsked }, Persistence.put Nothing )

        OnTokenLoad token ->
            ( { model | token = Maybe.map RemoteData.succeed token |> Maybe.withDefault RemoteData.NotAsked }, Cmd.none )

        UserMenu bool ->
            ( { model | user = RemoteData.map (\x -> { x | menu = bool }) model.user }, Cmd.none )


onLoginForm : Form -> UserForm -> Model -> ( Model, Cmd Msg )
onLoginForm msg oldForm model =
    case msg of
        Email text ->
            ( { model | userForm = { oldForm | email = Just text } }, Cmd.none )

        Password text ->
            ( { model | userForm = { oldForm | password = Just text } }, Cmd.none )

        Submit user ->
            ( { model | token = RemoteData.Loading, userForm = initialUserForm }, Maybe.withDefault Cmd.none <| Maybe.map Api.login user )

        _ ->
            ( model, Cmd.none )


onSignUpForm : Form -> UserForm -> Model -> ( Model, Cmd Msg )
onSignUpForm msg oldForm model =
    case msg of
        Username text ->
            ( { model | userForm = { oldForm | username = Just text } }, Cmd.none )

        Email text ->
            ( { model | userForm = { oldForm | email = Just text } }, Cmd.none )

        Password text ->
            ( { model | userForm = { oldForm | password = Just text } }, Cmd.none )

        Repeat text ->
            ( { model | userForm = { oldForm | repeat = Just text } }, Cmd.none )

        Submit user ->
            ( { model | user = RemoteData.Loading, userForm = initialUserForm }, Maybe.withDefault Cmd.none <| Maybe.map Api.signUp user )
