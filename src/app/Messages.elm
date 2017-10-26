module Messages exposing (..)

import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route)
import Topic exposing (Topic)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | UpdateRoute Route
    | OnLocationChange Location
