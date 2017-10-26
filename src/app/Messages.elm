module Messages exposing (..)

import Navigation exposing (Location)
import RemoteData exposing (WebData)
import RoutesModel exposing (Route)
import TopicModel exposing (Topic)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | UpdateRoute Route
    | OnLocationChange Location
