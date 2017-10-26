module Routes exposing (Route(..), parseLocation, toPath, topicUrl)

import Navigation exposing (Location)
import Topic exposing (TopicId)
import Topic exposing (TopicId)
import UrlParser exposing (..)


type Route
    = TopicsRoute
    | TopicRoute TopicId
    | NotFoundRoute




parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute


toPath : Route -> String
toPath route =
    case route of
        TopicsRoute ->
            "/"

        TopicRoute id ->
            "#topics/" ++ id

        NotFoundRoute ->
            ""


topicUrl : TopicId -> String
topicUrl id =
    toPath <| TopicRoute id



matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map TopicsRoute top
        , map TopicRoute (s "topics" </> string)
        ]
