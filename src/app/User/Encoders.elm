module User.Encoders exposing (..)

import User.Model exposing (SignUpForm)
import Json.Encode as Encoder


clientId : String
clientId =
    "enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ"


encodeUser : SignUpForm -> Encoder.Value
encodeUser user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "email", Encoder.string <| Maybe.withDefault "" user.email )
        , ( "password", Encoder.string <| Maybe.withDefault "" user.password )
        , ( "username", Encoder.string <| Maybe.withDefault "" user.username )
        , ( "connection", Encoder.string "db-connection" )
        ]
