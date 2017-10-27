module Routes exposing (Route(..), parseLocation, toPath, topicUrl, signUpUrl, loginUrl)

import Navigation exposing (Location)
import Slug exposing (Slug)
import Topic exposing (TopicId)
import Topic exposing (TopicId)
import UrlParser exposing (..)


type Route
    = TopicsRoute
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
        [ map TopicsRoute top
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
        TopicsRoute ->
            "/"

        TopicRoute id ->
            "#topics/" ++ Slug.toString id

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        NotFoundRoute ->
            ""


topicUrl : Slug -> String
topicUrl id =
    toPath <| TopicRoute id


signUpUrl : String
signUpUrl =
    toPath SignUpRoute


loginUrl : String
loginUrl =
    toPath LoginRoute
