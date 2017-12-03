module Main exposing (..)

import Common.Api exposing (fetchBrand)
import Common.Model exposing (Brand, Responsive(Mobile, Tablet), View)
import Common.Views.ErrorPage
import Common.Views.LandingPage as LandingPage exposing (landingPage)
import Common.Views.NotFoundPage
import Common.Views.Pages
import Html.Attributes exposing (style)
import Common.Views.Layout as Layout
import Common.Views.Loader as Loader
import Common.Views.NavBar as NavBar
import Navigation exposing (Location, load)
import Messages exposing (..)
import Html exposing (..)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import Platform.Cmd exposing (batch)
import User.Api
import User.Model exposing (SignUpForm, User)
import User.Views.Registration as Registration
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (..)
import Slug exposing (Slug)
import Task
import Topic.Api exposing (fetchAllTopics)
import Topic.Model exposing (Topic)
import UrlParser exposing (..)
import Window exposing (Size, resizes)
import Common.Views.Pages as Pages


main : Program Never Model Msg
main =
    Navigation.program Messages.OnLocationChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : Model -> Sub Msg
subscriptions model =
    Window.resizes (\size -> OnWindowChange size)


type alias Model =
    { topics : WebData (List Topic)
    , brand : WebData Brand
    , location : Location
    , window : Window.Size
    , responsive : Responsive
    , signUpForm : SignUpForm
    , user : WebData User
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , brand = RemoteData.Loading
    , location = location
    , window = Size 0 0
    , responsive = Mobile
    , signUpForm = SignUpForm Nothing Nothing Nothing Nothing
    , user = RemoteData.NotAsked
    }


init : Location -> ( Model, Cmd Msg )
init location =
    ( initialModel location, batch [ fetchBrand, Topic.Api.fetchAllTopics, Task.perform OnWindowChange Window.size ] )


view : Model -> Html Msg
view model =
    case model.responsive of
        Mobile ->
            (page model).mobile

        Tablet ->
            (page model).tablet


page : Model -> View Msg
page model =
    case parseLocation model.location <| RemoteData.withDefault [] model.topics of
        HomeRoute ->
            Pages.landing model.brand

        TopicsRoute ->
            Pages.topics model.brand model.topics

        TopicRoute id ->
            Pages.topic id model.brand

        QuestionRoute topic question ->
            Pages.question question topic model.brand model.topics

        SignUpRoute ->
            Pages.signUp model.user

        LoginRoute ->
            Pages.login

        VerifyEmailRoute ->
            Pages.emptyPage

        NotFoundRoute ->
            Common.Views.NotFoundPage.view


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        OnFetchBrand response ->
            ( { model | brand = response }, Cmd.none )

        OnWindowChange size ->
            onWindowChange model size

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnLocationChange location ->
            ( { model | location = location }, Cmd.none )

        OnUserSignUp response ->
            ( { model | user = response }, Cmd.none )

        OnSignUpForm form ->
            let
                oldForm =
                    model.signUpForm
            in
                case form of
                    Username text ->
                        ( { model | signUpForm = { oldForm | username = Just text } }, Cmd.none )

                    Email text ->
                        ( { model | signUpForm = { oldForm | email = Just text } }, Cmd.none )

                    Password text ->
                        ( { model | signUpForm = { oldForm | password = Just text } }, Cmd.none )

                    Repeat text ->
                        ( { model | signUpForm = { oldForm | repeat = Just text } }, Cmd.none )

                    Submit ->
                        let
                            _ =
                                Debug.log "" model.signUpForm.username
                        in
                            ( model, User.Api.signUp model.signUpForm )


onWindowChange : Model -> Size -> ( Model, Cmd Msg )
onWindowChange model size =
    if (size.width <= 600) then
        ( { model | responsive = Mobile }, Cmd.none )
    else
        ( { model | responsive = Tablet }, Cmd.none )
