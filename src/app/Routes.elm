module Routes exposing (..)

import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import Topic.Model as Topic exposing (Topic)
import UrlParser exposing (..)


type Route
    = HomeRoute
    | TopicsRoute
    | TopicRoute Topic
    | QuestionRoute Slug Slug
    | SignUpRoute
    | LoginRoute
    | VerifyEmailRoute
    | NotFoundRoute


parseLocation : Location -> List Topic -> Route
parseLocation location topics =
    case (parseHash (matchers topics) location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute


matchers : List Topic -> Parser (Route -> a) a
matchers topics =
    oneOf
        [ map HomeRoute top
        , map TopicsRoute (s "topics")
        , map TopicRoute (s "topics" </> topicMatcher topics)
        , map QuestionRoute (s "topics" </> slugMatcher </> slugMatcher)
        , map SignUpRoute (s "signup")
        , map LoginRoute (s "login")
        , map VerifyEmailRoute (s "verify-email")
        ]


topicMatcher : List Topic -> Parser (Topic -> a) a
topicMatcher topics =
    custom "TOPIC_TITLE" <|
        \segment ->
            case Slug.generate segment |> Maybe.andThen (\x -> Topic.findSlug x topics) of
                Just topic ->
                    Ok topic

                Nothing ->
                    Err "Malformed Path"


slugMatcher : Parser (Slug -> a) a
slugMatcher =
    custom "TOPIC_TITLE" <|
        \segment ->
            case Slug.generate segment of
                Just title ->
                    Ok title

                Nothing ->
                    Err "Malformed path"

toTopic : Slug -> String
toTopic slug = "#topics/" ++ Slug.toString slug


toPath : Route -> String
toPath route =
    case route of
        HomeRoute ->
            "#"

        TopicsRoute ->
            "#topics"

        TopicRoute topic ->
            "#topics/" ++ Slug.toString topic.slug

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
