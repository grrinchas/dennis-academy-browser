module Msgs exposing (..)

import Navigation exposing (Location)
import TopicModel exposing (Topic)
import RemoteData exposing (WebData)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnLocationChange Location
