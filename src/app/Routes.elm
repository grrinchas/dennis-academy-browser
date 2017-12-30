module Routes exposing (..)

import Http
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import UrlParser exposing (..)


type alias Auth0Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }


type alias GraphCoolToken =
    String


type Route
    = HomeRoute (Maybe Auth0Token)
    | SignUpRoute
    | LoginRoute
    | DashboardRoute


type RouteError
    = NotFound
    | NotAllowed Route Route


parseLocation : Location -> Result RouteError Route
parseLocation location =
    case parseHash matchers location of
        Just route ->
            Ok route

        Nothing ->
            Err NotFound


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map (HomeRoute Nothing) top
        , map HomeRoute parseToken
        , map SignUpRoute (s "signup")
        , map LoginRoute (s "login")
        , map DashboardRoute (s "dashboard")
        ]


parseToken : Parser (Maybe Auth0Token -> a) a
parseToken =
    custom "ACCESS_TOKEN" <|
        \segment ->
            case String.split "&" segment |> List.map (String.split "=") of
                [ [ "access_token", accessToken ], [ "expires_in", expires ], [ "token_type", type_ ], [ "state", state ], [ "id_token", idToken ] ] ->
                    case String.toInt expires of
                        Ok int ->
                            Ok <| Just <| Auth0Token accessToken idToken type_ int

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
        HomeRoute token ->
            Maybe.map (\_ -> "#token") token
                |> Maybe.withDefault "#"

        SignUpRoute ->
            "#signup"

        LoginRoute ->
            "#login"

        DashboardRoute ->
            "#dashboard"
