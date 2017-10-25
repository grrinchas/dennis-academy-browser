module Model exposing (..)

import Html exposing (Html, text)
import Material
import Messages exposing (Msg)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import RoutesModel exposing (Route(NotFoundRoute, TopicRoute, TopicsRoute))
import Routing exposing (parseLocation)
import TopicApi exposing (fetchAllTopics)
import TopicModel exposing (Topic)
import TopicView exposing (topicList)
import UrlParser exposing (..)


type alias Model =
    { topics : WebData (List Topic)
    , route : Route
    , mdl : Material.Model
    }


initialModel : Location -> Model
initialModel location =
    { topics = RemoteData.Loading
    , route = parseLocation location
    , mdl = Material.model
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
