module Topic exposing (..)

import Slug exposing (Slug)


type alias TopicId =
    String


type alias QuestionId =
    String


type alias Question =
    { id : QuestionId
    , title : String
    , answer : String
    }


type alias Topic =
    { id : TopicId
    , title : String
    , slugTitle : Slug
    , description : String
    , questions : List Question
    , icon : String
    , colour : String
    , next : Maybe Slug
    , previous : Maybe Slug
    }
