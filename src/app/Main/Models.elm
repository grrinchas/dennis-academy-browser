module Models exposing (..)

import RemoteData exposing (WebData)
import RoutesModel exposing (Route)
import TopicModel exposing (Topic)


type alias Model =
    { topics : WebData (List Topic)
    , route: Route
    }


initialModel : Route -> Model
initialModel route =
    { topics = RemoteData.Loading
    , route = route
    }
