module Main exposing (main)

import Views.Pages as Pages exposing (..)
import Html exposing (Html)
import Messages exposing (..)
import Model exposing (..)
import Navigation exposing (Location, back, modifyUrl, newUrl)
import Platform.Cmd exposing (batch)
import RemoteData exposing (WebData)
import Routes exposing (..)
import Task exposing (perform)
import Api exposing (..)
import Window exposing (Size)


main : Program Never Model.Model Msg
main =
    Navigation.program OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : Model.Model -> Sub Msg
subscriptions model =
    Window.resizes (\size -> OnWindowChange size)


init : Location -> ( Model, Cmd Msg )
init location =
    ( initialModel location, batch [ fetchBrand, fetchAllTopics, perform OnWindowChange Window.size ] )


view : Model -> Html Msg
view model =
    case model.responsive of
        Mobile ->
            (page model).mobile

        Tablet ->
            (page model).tablet


page : Model -> View Msg
page model =
    case parseLocation model.location of
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


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        OnFetchBrand response ->
            ( { model | brand = response }, Cmd.none )

        OnLocationChange response ->
            redirect response model

        OnUserSignUp response ->
            ( { model | signUp = response }, Cmd.none )

        OnUserLogin response ->
            ( { model | token = response }, RemoteData.withDefault Cmd.none <| RemoteData.map fetchUserInfo response )

        OnFetchUserInfo response ->
            onFetchUserInfo response model

        OnWindowChange size ->
            onWindowChange model size

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnSignUpForm form ->
            onSignUpForm form model.userForm model

        OnLoginForm form ->
            onLoginForm form model.userForm model


onFetchUserInfo : WebData User -> Model -> ( Model, Cmd Msg )
onFetchUserInfo user model =
    if RemoteData.isSuccess user then
        ( { model | user = user }, newUrl <| toPath UserHomeRoute )
    else
        ( { model | user = user }, Cmd.none )


redirect : Location -> Model -> ( Model, Cmd Msg )
redirect location model =
    let
        route =
            parseLocation location
    in
        if (route == SignUpRoute || route == LoginRoute) && RemoteData.isSuccess model.user then
            ( model, newUrl <| toPath UserHomeRoute )
        else if (route == UserHomeRoute) && not (RemoteData.isSuccess model.user) then
            ( model, newUrl <| toPath LoginRoute )
        else
            ( { model | location = location }, Cmd.none )


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


onWindowChange : Model -> Size -> ( Model, Cmd Msg )
onWindowChange model size =
    if (size.width <= 600) then
        ( { model | responsive = Mobile }, Cmd.none )
    else
        ( { model | responsive = Tablet }, Cmd.none )
