module Messages exposing (..)

import Brand exposing (Brand)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route)
import Topic exposing (Topic)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnFetchBrand (WebData Brand)
    | UpdateRoute Route
    | OnLocationChange Location
