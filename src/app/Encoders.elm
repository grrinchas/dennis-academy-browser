module Encoders exposing (..)

import Json.Encode as Encoder
import Validator exposing (ValidUser)


clientId : String
clientId =
    "enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ"


signUp : ValidUser -> Encoder.Value
signUp user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "email", Encoder.string <| Validator.toString user.email )
        , ( "password", Encoder.string <| Validator.toString user.password )
        , ( "username", Encoder.string <| Validator.toString user.username )
        , ( "connection", Encoder.string "db-connection" )
        ]


login : ValidUser -> Encoder.Value
login user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "password", Encoder.string <| Validator.toString user.password )
        , ( "username", Encoder.string <| Validator.toString user.email )
        , ( "grant_type", Encoder.string "password" )
        , ( "audience", Encoder.string "dg-academy" )
        , ( "scope", Encoder.string "openid" )
        ]


