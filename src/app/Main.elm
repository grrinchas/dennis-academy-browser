module Main exposing (..)

import Brand exposing (Brand)
import Html.Attributes exposing (style)
import Layout
import Loader
import NavBar
import Navigation exposing (Location)
import Messages exposing (Msg(OnFetchBrand, OnWindowChange))
import Api exposing (fetchAllTopics, fetchBrand)
import Html exposing (..)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import Platform.Cmd exposing (batch)
import Registration
import RemoteData exposing (WebData)
import Responsive exposing (..)
import Routes exposing (..)
import Slug exposing (Slug)
import Task
import Topic exposing (..)
import TopicPage
import TopicsPage
import UrlParser exposing (..)
import Views exposing (landingPage)
import Window exposing (Size, resizes)


main : Program Never Model Msg
main =
    Navigation.program Messages.OnLocationChange
        { init = init
        , view = page
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : Model -> Sub Msg
subscriptions model =
    Window.resizes (\size -> OnWindowChange size)


type alias Model =
    { topics : WebData (List Topic)
    , brand : WebData Brand
    , route : Route
    , window : Window.Size
    , responsive : Responsive
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , brand = RemoteData.Loading
    , route = parseLocation location
    , window = Size 0 0
    , responsive = Mobile
    }


init : Location -> ( Model, Cmd Msg )
init location =
    ( initialModel location, batch [ fetchBrand, fetchAllTopics, Task.perform OnWindowChange Window.size ] )


mapSuccess : (a -> Html Msg) -> WebData a -> Html Msg
mapSuccess view response =
    case response of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            Loader.loading

        RemoteData.Success data ->
            view data

        RemoteData.Failure error ->
            text (toString error)


requestHeader : Model -> Html Msg
requestHeader model =
    mapSuccess NavBar.navBar model.brand


requestTopic : Slug -> Model -> Html Msg
requestTopic id model =
    mapSuccess (mapTopic model id) model.topics


requestTopics : Model -> Html Msg
requestTopics model =
    case model.responsive of
        Mobile ->
            mapSuccess TopicsPage.mobile model.topics

        Tablet ->
            mapSuccess TopicsPage.tablet model.topics


page : Model -> Html Msg
page model =
    case model.route of
        HomeRoute ->
            Layout.headerMain model.responsive (requestHeader model) landingPage

        TopicsRoute ->
            Layout.headerMain model.responsive (requestHeader model) (requestTopics model)

        TopicRoute id ->
            Layout.noContainer (requestHeader model) (requestTopic id model)

        SignUpRoute ->
            Registration.signUpPage

        LoginRoute ->
            Registration.loginPage

        NotFoundRoute ->
            Views.notFoundPage


mapTopic : Model -> Slug -> List Topic -> Html Msg
mapTopic model id topics =
    case List.head << List.filter (\topic -> topic.slugTitle == id) <| topics of
        Just topic ->
            case model.responsive of
                Mobile ->
                    TopicPage.mobile topic

                Tablet ->
                    TopicPage.tablet topic

        Nothing ->
            Views.notFoundPage


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        OnFetchBrand response ->
            ( { model | brand = response }, Cmd.none )

        OnWindowChange size ->
            if (size.width <= 600) then
                ( { model | responsive = Mobile }, Cmd.none )
            else
                ( { model | responsive = Tablet }, Cmd.none )

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnLocationChange location ->
            ( { model | route = parseLocation location }, Cmd.none )
