module Routes exposing (..)

import Err exposing (..)
import Http
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import UrlParser exposing (..)


type Route
    = HomeRoute
    | SignUpRoute



{-
   |
   | TopicsRoute
   | TopicRoute Slug
   | QuestionRoute Slug Slug
   | LoginRoute
   | UserHomeRoute
-}


parseLocation : Location -> Maybe Route
parseLocation location =
    parseHash matchers location


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map HomeRoute top

        --      , map TopicsRoute (s "topics")
        --     , map TopicRoute (s "topics" </> slugMatcher)
        --    , map QuestionRoute (s "topics" </> slugMatcher </> slugMatcher)
        , map SignUpRoute (s "signup")

        --     , map LoginRoute (s "login")
        --     , map UserHomeRoute (s "user")
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


path : Route -> String
path route =
    case route of
        HomeRoute ->
            "#"

        --    TopicsRoute -> "#topics"
        --    TopicRoute topic -> "#topics/" ++ Slug.toString topic
        --    QuestionRoute topic question -> "#topics/" ++ Slug.toString topic ++ "/" ++ Slug.toString question
        SignUpRoute ->
            "#signup"



--    LoginRoute -> "#login"
--    UserHomeRoute -> "#user"
