module Encoders exposing (..)

import GraphQl exposing (Mutation, Named, Operation, OperationType(OperationMutation, OperationQuery), Query, operationToBody)
import Http
import Json.Encode as Encoder
import Models exposing (Auth0Token, AuthGraphCool, Draft, DraftOwner, Form, Notification, NotificationType(LIKED_DRAFT), Publication, User, ValidUser, Visibility(PUBLIC))
import Regex exposing (HowMany(All))
import Validator


clientId : String
clientId =
    "enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ"


createAccount : ValidUser -> Encoder.Value
createAccount user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "email", Encoder.string <| Validator.toString user.email )
        , ( "password", Encoder.string <| Validator.toString user.password )
        , ( "username", Encoder.string <| Validator.toString user.username )
        , ( "connection", Encoder.string "academy-db-connection" )
        ]


login : ValidUser -> Encoder.Value
login user =
    Encoder.object
        [ ( "client_id", Encoder.string clientId )
        , ( "password", Encoder.string <| Validator.toString user.password )
        , ( "username", Encoder.string <| Validator.toString user.email )
        , ( "grant_type", Encoder.string "http://auth0.com/oauth/grant-type/password-realm" )
        , ( "audience", Encoder.string "dg-academy" )
        , ( "realm", Encoder.string "academy-db-connection" )
        , ( "scope", Encoder.string "openid" )
        ]

