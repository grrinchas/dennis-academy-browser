module Routes exposing (..)

import Err exposing (..)
import Http
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import UrlParser exposing (..)


type alias Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }


type Route
    = HomeRoute (Maybe Token)
    | SignUpRoute
    | LoginRoute
    | DashboardRoute


parseLocation : Location -> Maybe Route
parseLocation location =
    parseHash matchers location


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map (HomeRoute Nothing) top
        , map HomeRoute parseToken
        , map SignUpRoute (s "signup")
        , map LoginRoute (s "login")
        , map DashboardRoute (s "dashboard")
        ]


parseToken : Parser (Maybe Token -> a) a
parseToken =
    custom "ACCESS_TOKEN" <|
        \segment ->
            case String.split "&" segment |> List.map (String.split "=") of
                [ [ "access_token", accessToken ], [ "expires_in", expires ], [ "token_type", type_ ], [ "state", state ], [ "id_token", idToken ] ] ->
                    case String.toInt expires of
                        Ok int ->
                            Ok <| Just <| Token accessToken idToken type_ int

                        Err e ->
                            Err "Missing expires_in"

                _ ->
                    Err "Not an access token"


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
        HomeRoute _ ->
            "#"

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        DashboardRoute ->
            "#dashboard"
