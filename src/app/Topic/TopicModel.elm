module TopicModel exposing (..)


type alias TopicId =
    String


type alias Topic =
    { id : TopicId
    , title : String
    , description : String
    , content : String
    }