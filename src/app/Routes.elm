module Routes exposing (..)

import Common.Model exposing (Brand)
import Navigation exposing (Location)
import Question.Model exposing (Question)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import Topic.Model as Topic exposing (Topic)
import UrlParser exposing (..)


type Route
    = HomeRoute
    | TopicsRoute
    | TopicRoute Slug
    | QuestionRoute Slug Slug
    | SignUpRoute
    | LoginRoute
    | VerifyEmailRoute
    | NotFoundRoute


parseLocation : Location -> Route
parseLocation location =
    case parseHash matchers location of
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
        , map VerifyEmailRoute (s "verify-email")
        ]


slugMatcher : Parser (Slug -> a) a
slugMatcher =
    custom "TOPIC_TITLE" <|
        \segment ->
            case Slug.generate segment of
                Just slug ->
                    Ok slug

                Nothing ->
                    Err "Malformed Path"


toPath : Route -> String
toPath route =
    case route of
        HomeRoute ->
            "#"

        TopicsRoute ->
            "#topics"

        TopicRoute topic ->
            "#topics/" ++ Slug.toString topic

        QuestionRoute topic question ->
            "#topics/" ++ Slug.toString topic ++ "/" ++ Slug.toString question

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        VerifyEmailRoute ->
            "#verify-email"

        NotFoundRoute ->
            ""
