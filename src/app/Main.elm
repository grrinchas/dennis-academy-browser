module Main exposing (..)

import Navigation exposing (Location)
import Messages exposing (Msg)
import Api exposing (fetchAllTopics)
import Html exposing (Html, div, text)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import RemoteData exposing (WebData)
import Routes exposing (..)
import Topic exposing (..)
import UrlParser exposing (..)
import Views exposing (topicsPage)

main : Program Never Model Msg
main =
    Navigation.program Messages.OnLocationChange
        { init = init
        , view = page
        , update = update
        , subscriptions = (\model -> Sub.none)
        }
type alias Model =
    { topics : WebData (List Topic)
    , route : Route
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , route = parseLocation location
    }


init : Location -> ( Model, Cmd Msg )
init location =
    ( initialModel location, fetchAllTopics )


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
        TopicsRoute ->
            mapSuccess topicsPage model.topics

        TopicRoute id ->
            mapSuccess (mapTopic id) model.topics

        NotFoundRoute ->
            Views.notFoundPage


mapTopic : TopicId -> List Topic -> Html Msg
mapTopic id topics =
    case List.head << List.filter (\topic -> topic.id == id) <| topics of
        Just topic ->
            Views.topicPage topic

        Nothing ->
            Views.notFoundPage


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnLocationChange location ->
            ( { model | route = parseLocation location }, Cmd.none )
