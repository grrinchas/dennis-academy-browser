module Encoders exposing (..)

import Json.Encode as Encoder
import Models exposing (Auth0Token, AuthGraphCool, Draft, User, ValidUser)
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


authGraphCool : Auth0Token -> Encoder.Value
authGraphCool token =
    let
        query =
            "mutation {authenticate (accessToken: \"" ++ token.accessToken ++ "\"){id token}}"
    in
        Encoder.object
            [ ( "query", Encoder.string query ) ]


userInfo : String -> Encoder.Value
userInfo id =
    let
        query =
            "query {User (id: \"" ++ id ++ "\"){id username picture email drafts{id content type} }}"
    in
        Encoder.object
            [ ( "query", Encoder.string query ) ]


createDraft : User -> Encoder.Value
createDraft user =
    let
        query =
            "mutation {createDraft (type: Tutorial, content: \"\", ownerId: \"" ++ user.id ++ "\"){id content}}"
    in
        Encoder.object
            [ ( "query", Encoder.string query ) ]


saveDraft : Draft -> Encoder.Value
saveDraft draft =
    let
        query =
            "mutation {updateDraft (id: \"" ++ draft.id ++ "\", content: \"" ++ draft.content ++ "\"){id content type}}"
    in
        Encoder.object
            [ ( "query", Encoder.string query ) ]
