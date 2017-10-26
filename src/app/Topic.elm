module Topic exposing (..)

type alias Icon =
    { url : String
    }


type alias TopicId =
    String


type alias Topic =
    { id : TopicId
    , title : String
    , description : String
    , content : String
    , icon : Icon
    , colour : String
    }



