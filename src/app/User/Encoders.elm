module User.Encoders exposing (..)

import User.Model as User exposing (ValidUser)
import Json.Encode as Encoder


clientId : String
clientId =
    "enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ"


encodeUser : ValidUser -> Encoder.Value
encodeUser user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "email", Encoder.string <| User.toString user.email )
        , ( "password", Encoder.string <| User.toString user.password )
        , ( "username", Encoder.string <| User.toString user.username )
        , ( "connection", Encoder.string "db-connection" )
        ]
