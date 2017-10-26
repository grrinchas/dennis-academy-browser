module Model exposing (..)

import Html exposing (Html, div, text)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, UpdateRoute))
import Navigation exposing (Location, newUrl)
import RemoteData exposing (WebData)
import RoutesModel exposing (Route(NotFoundRoute, TopicRoute, TopicsRoute))
import Routing exposing (parseLocation, toPath)
import TopicApi exposing (fetchAllTopics)
import TopicModel exposing (Topic, TopicId)
import TopicView exposing (topicList)
import UrlParser exposing (..)


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
            text "loading"

        RemoteData.Success data ->
            view data

        RemoteData.Failure error ->
            text (toString error)


page : Model -> Html Msg
page model =
    case model.route of
        TopicsRoute ->
            mapSuccess topicList model.topics

        TopicRoute id ->
            mapSuccess (mapTopic id) model.topics

        NotFoundRoute ->
            notFoundPage


mapTopic : TopicId -> List Topic -> Html Msg
mapTopic id topics =
    case List.head << List.filter (\topic -> topic.id == id) <| topics of
        Just topic ->
            text topic.description

        Nothing ->
            notFoundPage


notFoundPage : Html msg
notFoundPage =
    div []
        [ text "Page is not found" ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        OnLocationChange location ->
            ( { model | route = parseLocation location }, Cmd.none )
