module Msgs exposing (..)

import Material
import Navigation exposing (Location)
import TopicModel exposing (Topic)
import RemoteData exposing (WebData)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnLocationChange Location
    | OnMaterialChange (Material.Msg Msg)
