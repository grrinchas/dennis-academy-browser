module Main exposing (..)

import Brand exposing (Brand)
import Html.Attributes exposing (style)
import Navigation exposing (Location)
import Messages exposing (Msg(OnFetchBrand, OnWindowChange))
import Api exposing (fetchAllTopics, fetchBrand)
import Html exposing (..)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import Platform.Cmd exposing (batch)
import RemoteData exposing (WebData)
import Routes exposing (..)
import Slug exposing (Slug)
import Task
import Topic exposing (..)
import UrlParser exposing (..)
import Views exposing (landingPage, topicsPageMobile, topicsPageTablet, withHeader)
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
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , brand = RemoteData.Loading
    , route = parseLocation location
    , window = Size 0 0
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
            Views.loading

        RemoteData.Success data ->
            view data

        RemoteData.Failure error ->
            text (toString error)


page : Model -> Html Msg
page model =
    case model.route of
        HomeRoute ->
            mapSuccess (withHeader landingPage) model.brand

        TopicsRoute ->
            let
                view =
                    if model.window.width <= 600 then
                        topicsPageMobile
                    else
                        topicsPageTablet
            in
                mapSuccess (withHeader (mapSuccess view model.topics)) model.brand

        TopicRoute id ->
            mapSuccess (withHeader (mapSuccess (mapTopic id) model.topics)) model.brand

        SignUpRoute ->
            Views.signUpPage

        LoginRoute ->
            Views.loginPage

        NotFoundRoute ->
            Views.notFoundPage


mapTopic : Slug -> List Topic -> Html Msg
mapTopic id topics =
    case List.head << List.filter (\topic -> topic.slugTitle == id) <| topics of
        Just topic ->
            Views.topicPage topic

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
            ( { model | window = size }, Cmd.none )

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnLocationChange location ->
            ( { model | route = parseLocation location }, Cmd.none )
