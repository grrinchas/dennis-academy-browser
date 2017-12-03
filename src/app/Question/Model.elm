module Question.Model exposing (..)

import Common.Model exposing (..)
import Slug exposing (Slug)

type alias Answer =
    String


type alias Question =
    { id : Id
    , title : Title
    , slugTitle : Slug
    , answer : Answer
    , next : Maybe Slug
    , previous : Maybe Slug
    }
