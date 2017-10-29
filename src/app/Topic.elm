module Topic exposing (..)

import Slug exposing (Slug)


type alias TopicId =
    String


type alias Topic =
    { id : TopicId
    , title : String
    , slugTitle : Slug
    , description : String
    , content : String
    , icon : String
    , colour : String
    , next : Maybe Slug
    , previous : Maybe Slug
    }
