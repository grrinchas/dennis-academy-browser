module Topic.Model exposing (..)

import Common.Model exposing (..)
import Question.Model exposing (Question)
import Slug exposing (Slug)


type alias Topic =
    { id : Id
    , title : Title
    , slugTitle : Slug
    , description : String
    , questions : List Question
    , icon : Icon
    , colour : Colour
    , next : Maybe Slug
    , previous : Maybe Slug
    }
