module Routing exposing (..)

import Navigation exposing (Location)
import RoutesModel exposing (Route(NotFoundRoute, TopicRoute, TopicsRoute))
import TopicModel exposing (TopicId)
import UrlParser exposing (..)


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map TopicsRoute top
        , map TopicRoute (s "topics" </> string)
        ]


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
