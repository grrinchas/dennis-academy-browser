module Models exposing (..)

import Material
import RemoteData exposing (WebData)
import RoutesModel exposing (Route)
import TopicModel exposing (Topic)


type alias Model =
    { topics : WebData (List Topic)
    , route: Route
    , mdl: Material.Model
    }


initialModel : Route -> Model
initialModel route =
    { topics = RemoteData.Loading
    , route = route
    , mdl = Material.model
    }
