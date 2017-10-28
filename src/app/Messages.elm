module Messages exposing (..)

import Brand exposing (Brand)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route)
import Topic exposing (Topic)
import Window exposing (Size)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnFetchBrand (WebData Brand)
    | OnWindowChange Size
    | UpdateRoute Route
    | OnLocationChange Location
