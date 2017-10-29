module Routes exposing (Route(..), parseLocation, toPath)

import Navigation exposing (Location)
import Slug exposing (Slug)
import Topic exposing (TopicId)
import Topic exposing (TopicId)
import UrlParser exposing (..)


type Route
    = HomeRoute
    | TopicsRoute
    | TopicRoute Slug
    | SignUpRoute
    | LoginRoute
    | NotFoundRoute


parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map HomeRoute top
        , map TopicsRoute (s "topics")
        , map TopicRoute (s "topics" </> topicMatcher)
        , map SignUpRoute (s "signup")
        , map LoginRoute (s "login")
        ]


topicMatcher : Parser (Slug -> a) a
topicMatcher =
    custom "TOPIC_TITLE" <|
        \segment ->
            case Slug.generate segment of
                Just title ->
                    Ok title

                Nothing ->
                    Err "Malformed path"


toPath : Route -> String
toPath route =
    case route of
        HomeRoute ->
            "#"

        TopicsRoute ->
            "#topics"

        TopicRoute id ->
            "#topics/" ++ Slug.toString id

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        NotFoundRoute ->
            ""