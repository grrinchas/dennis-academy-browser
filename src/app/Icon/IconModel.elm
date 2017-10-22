module IconModel exposing (..)


type alias IconId =
    String


type alias Topic =
    { id : IconId
    , title : String
    , description : String
    , content : String
    }
