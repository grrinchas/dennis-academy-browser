module Topic exposing (..)

import Slug exposing (Slug)

type alias Icon =
    { url : String
    }


type alias TopicId =
    String


type alias Topic =
    {
      title : String
    , slugTitle : Slug
    , description : String
    , content : String
    , icon : Icon
    , colour : String
    }



