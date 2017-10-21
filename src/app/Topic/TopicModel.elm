module TopicModel exposing (..)


type alias TopicId =
    String


type alias Topic =
    { id : TopicId
    , title : String
    , content : String
    }
