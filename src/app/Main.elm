module Main exposing (..)

import Common.Api exposing (fetchBrand)
import Common.Model exposing (Brand, Responsive(Mobile, Tablet), View)
import Common.Views.Loader as Loader
import Navigation exposing (Location, load)
import Messages exposing (..)
import Html exposing (..)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import Platform.Cmd exposing (batch)
import User.Api
import User.Model exposing (SignUpForm, User)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (..)
import Slug exposing (Slug)
import Task
import Topic.Api exposing (fetchAllTopics)
import Topic.Model exposing (Topic)
import Window exposing (Size, resizes)
import Common.Views.Pages as Pages
import Question.Model exposing (Question)


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
    , toast : String
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , brand = RemoteData.Loading
    , location = location
    , window = Size 0 0
    , responsive = Mobile
    , signUpForm = SignUpForm "Dennis" "nezinau1" "nezinau1" "dg@acou.com"
    , user = RemoteData.NotAsked
    , toast = ""
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
    case parseLocation model.location of
        HomeRoute ->
            map Pages.landing model.brand

        TopicsRoute ->
            map2 Pages.topics model.brand model.topics

        TopicRoute id ->
            RemoteData.map (findTopic id) model.topics
                |> map2 Pages.topic model.brand

        QuestionRoute topic question ->
            RemoteData.map (findQuestion question) model.topics
                |> RemoteData.append (RemoteData.map (findTopic topic) model.topics)
                |> map2 Pages.question model.brand

        SignUpRoute ->
            Pages.signUp model.user model.signUpForm

        LoginRoute ->
            Pages.login

        VerifyEmailRoute ->
            Pages.emptyPage

        NotFoundRoute ->
            Pages.notFound


findTopic : Slug -> List Topic -> Maybe Topic
findTopic id =
    List.head << List.filter (\topic -> topic.slug == id)


findQuestion : Slug -> List Topic -> Maybe Question
findQuestion id topics =
    List.map Topic.Model.questions topics
        |> List.concat
        |> List.filter (\question -> question.slug == id)
        |> List.head


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
            onSignUpForm form model.signUpForm model

        DisplayToast message ->
            ( { model | toast = message }, Cmd.none )


onSignUpForm : Form -> SignUpForm -> Model -> ( Model, Cmd Msg )
onSignUpForm msg oldForm model =
    case msg of
        Username text ->
            ( { model | signUpForm = { oldForm | username = text } }, Cmd.none )

        Email text ->
            ( { model | signUpForm = { oldForm | email = text } }, Cmd.none )

        Password text ->
            ( { model | signUpForm = { oldForm | password = text } }, Cmd.none )

        Repeat text ->
            ( { model | signUpForm = { oldForm | repeat = text } }, Cmd.none )

        Submit user ->
            ( { model | user = RemoteData.Loading, signUpForm = SignUpForm "" "" "" "" }, Maybe.withDefault Cmd.none <| Maybe.map User.Api.signUp user )


onWindowChange : Model -> Size -> ( Model, Cmd Msg )
onWindowChange model size =
    if (size.width <= 600) then
        ( { model | responsive = Mobile }, Cmd.none )
    else
        ( { model | responsive = Tablet }, Cmd.none )


map : (a -> View m) -> WebData a -> View m
map view response =
    case response of
        RemoteData.NotAsked ->
            { mobile = text "", tablet = text "" }

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success data ->
            view data

        RemoteData.Failure error ->
            Pages.error error


map2 : (a -> b -> View m) -> WebData a -> WebData b -> View m
map2 f a b =
    case a of
        RemoteData.NotAsked ->
            { mobile = text "", tablet = text "" }

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success data ->
            map (f data) b

        RemoteData.Failure error ->
            Pages.error error
