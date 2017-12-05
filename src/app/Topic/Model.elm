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


contains : Slug -> List Topic -> Bool
contains slug =
    List.isEmpty << List.filter (\topic -> topic.slug == slug)


containsQuestion : Slug -> List Topic -> Bool
containsQuestion slug topics =
    List.map questions topics
        |> List.concat
        |> List.filter (\question -> question.slug == slug)
        |> List.isEmpty


questions : Topic -> List Question
questions topic =
    topic.questions
