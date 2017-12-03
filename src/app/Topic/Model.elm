module Topic.Model exposing (..)

import Common.Model exposing (..)
import Question.Model exposing (Question)
import Slug exposing (Slug)


type alias Topic =
    { id : Id
    , title : Title
    , slug : Slug
    , description : String
    , questions : List Question
    , icon : Icon
    , colour : Colour
    , next : Maybe Slug
    , previous : Maybe Slug
    }


findTopic : Title -> List Topic -> Maybe Topic
findTopic title =
    List.head << List.filter (\topic -> topic.title == title)


findSlug : Slug -> List Topic -> Maybe Topic
findSlug slug =
    List.head << List.filter (\topic -> topic.slug == slug)


findQuestion : Slug -> List Topic -> Maybe Question
findQuestion slug topics =
    List.map questions topics
        |> List.concat
        |> List.filter (\question -> question.slug == slug)
        |> List.head


questions : Topic -> List Question
questions topic =
    topic.questions
