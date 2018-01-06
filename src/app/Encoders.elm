module Encoders exposing (..)

import GraphQl exposing (Mutation, Named, Operation, Query)
import Json.Encode as Encoder
import Models exposing (Auth0Token, AuthGraphCool, Draft, User, ValidUser)
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


authGraphCool : Auth0Token -> Operation Mutation Named
authGraphCool token =
    GraphQl.named "authenticate"
        [ GraphQl.field "authenticate"
            |> GraphQl.withArgument "accessToken" (GraphQl.string token.accessToken)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "token"
                ]
        ]


userInfo : String -> Operation Query Named
userInfo id =
    GraphQl.named "queryUser"
        [ GraphQl.field "User"
            |> GraphQl.withArgument "id" (GraphQl.string id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "username"
                , GraphQl.field "email"
                , GraphQl.field "picture"
                , GraphQl.field "drafts"
                    |> GraphQl.withSelectors
                        [ GraphQl.field "id"
                        , GraphQl.field "content"
                        , GraphQl.field "type"
                        , GraphQl.field "title"
                        , GraphQl.field "createdAt"
                        , GraphQl.field "updatedAt"
                        ]
                ]
        ]


saveDraft : Draft -> Operation Mutation Named
saveDraft draft =
    GraphQl.named "updateDraft"
        [ GraphQl.field "updateDraft"
            |> GraphQl.withArgument "id" (GraphQl.string draft.id)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize draft.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize draft.title)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "content"
                , GraphQl.field "type"
                , GraphQl.field "title"
                , GraphQl.field "createdAt"
                , GraphQl.field "updatedAt"
                ]
        ]


sanitize : String -> String
sanitize string =
    Regex.replace All (Regex.regex "\n") (\_ -> "\\n") string
        |> Regex.replace All (Regex.regex "\t") (\_ -> "\\t")
        |> Regex.replace All (Regex.regex "\"") (\_ -> "\\\"")


createDraft : Draft -> AuthGraphCool -> Operation Mutation Named
createDraft draft token =
    GraphQl.named "createDraft"
        [ GraphQl.field "createDraft"
            |> GraphQl.withArgument "ownerId" (GraphQl.string token.id)
            |> GraphQl.withArgument "type" (GraphQl.type_ draft.draftType)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize draft.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize draft.title)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "content"
                , GraphQl.field "type"
                , GraphQl.field "title"
                , GraphQl.field "createdAt"
                , GraphQl.field "updatedAt"
                ]
        ]


deleteDraft : Draft -> AuthGraphCool -> Operation Mutation Named
deleteDraft draft token =
    GraphQl.named "deleteDraft"
        [ GraphQl.field "deleteDraft"
            |> GraphQl.withArgument "id" (GraphQl.string draft.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                ]
        ]
