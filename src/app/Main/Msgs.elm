module Msgs exposing (..)

import Material
import Navigation exposing (Location)
import TopicModel exposing (Topic)
import RemoteData exposing (WebData)
import RoutesModel exposing (Route)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | UpdateRoute Route
    | OnLocationChange Location
    | OnMaterialChange (Material.Msg Msg)
