module User.Encoders exposing (..)

import User.Validator as User exposing (ValidUser)
import Json.Encode as Encoder


clientId : String
clientId =
    "enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ"


signUp : ValidUser -> Encoder.Value
signUp user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "email", Encoder.string <| User.toString user.email )
        , ( "password", Encoder.string <| User.toString user.password )
        , ( "username", Encoder.string <| User.toString user.username )
        , ( "connection", Encoder.string "db-connection" )
        ]


login : ValidUser -> Encoder.Value
login user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "password", Encoder.string <| User.toString user.password )
        , ( "username", Encoder.string <| User.toString user.email )
        , ( "grant_type", Encoder.string "password" )
        ]
