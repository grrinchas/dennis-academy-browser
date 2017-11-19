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
    | QuestionRoute Slug Slug
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
        , map TopicRoute (s "topics" </> slugMatcher)
        , map QuestionRoute (s "topics" </> slugMatcher </> slugMatcher)
        , map SignUpRoute (s "signup")
        , map LoginRoute (s "login")
        ]


slugMatcher : Parser (Slug -> a) a
slugMatcher =
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

        QuestionRoute topic question ->
            "#topics/" ++ Slug.toString topic ++ "/" ++ Slug.toString question

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        NotFoundRoute ->
            ""
