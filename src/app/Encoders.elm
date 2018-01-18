module Encoders exposing (..)

import GraphQl exposing (Mutation, Named, Operation, OperationType(OperationMutation, OperationQuery), Query, operationToBody)
import Http
import Json.Encode as Encoder
import Models exposing (Auth0Token, AuthGraphCool, Draft, Form, User, ValidUser, Visibility(PUBLIC))
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


authGraphCool : Auth0Token -> Http.Body
authGraphCool token =
    GraphQl.named "authenticate"
        [ GraphQl.field "authenticate"
            |> GraphQl.withArgument "accessToken" (GraphQl.string token.accessToken)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "token"
                ]
        ]
        |> mutation


userInfo : AuthGraphCool -> Http.Body
userInfo token =
    GraphQl.named "queryUser"
        [ GraphQl.field "User"
            |> GraphQl.withArgument "id" (GraphQl.string token.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "username"
                , GraphQl.field "email"
                , GraphQl.field "picture"
                , GraphQl.field "bio"
                , GraphQl.field "drafts"
                    |> GraphQl.withSelectors draftSelector
                ]
        ]
        |> query


publicDrafts : AuthGraphCool -> Http.Body
publicDrafts _ =
    GraphQl.named "allDrafts"
        [ GraphQl.field "allDrafts"
            |> GraphQl.withArgument "filter"
                (GraphQl.input
                    [ ( "visibility", GraphQl.type_ <| toString PUBLIC )
                    ]
                )
            |> GraphQl.withSelectors draftSelector
        ]
        |> query


sanitize : String -> String
sanitize string =
    Regex.replace All (Regex.regex "\n") (\_ -> "\\n") string
        |> Regex.replace All (Regex.regex "\t") (\_ -> "\\t")
        |> Regex.replace All (Regex.regex "\"") (\_ -> "\\\"")


createDraft : Draft -> AuthGraphCool -> Http.Body
createDraft draft token =
    GraphQl.named "createDraft"
        [ GraphQl.field "createDraft"
            |> GraphQl.withArgument "ownerId" (GraphQl.string token.id)
            |> GraphQl.withArgument "type" (GraphQl.type_ draft.draftType)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize draft.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize draft.title)
            |> GraphQl.withSelectors draftSelector
        ]
        |> mutation


updateDraft : Draft -> AuthGraphCool -> Http.Body
updateDraft draft _ =
    GraphQl.named "updateDraft"
        [ GraphQl.field "updateDraft"
            |> GraphQl.withArgument "id" (GraphQl.string draft.id)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize draft.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize draft.title)
            |> GraphQl.withArgument "visibility" (GraphQl.type_ <| toString draft.visibility)
            |> GraphQl.withSelectors draftSelector
        ]
        |> mutation


deleteDraft : Draft -> AuthGraphCool -> Http.Body
deleteDraft draft token =
    GraphQl.named "deleteDraft"
        [ GraphQl.field "deleteDraft"
            |> GraphQl.withArgument "id" (GraphQl.string draft.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                ]
        ]
        |> mutation


updateProfile : Form -> AuthGraphCool -> Http.Body
updateProfile form token =
    GraphQl.named "updateUser"
        [ GraphQl.field "updateUser"
            |> GraphQl.withArgument "id" (GraphQl.string token.id)
            |> GraphQl.withArgument "bio" (GraphQl.string form.userBio)
            |> GraphQl.withSelectors profileSelector
        ]
        |> mutation


userProfile : String -> AuthGraphCool -> Http.Body
userProfile username _ =
    GraphQl.named "userProfile"
        [ GraphQl.field "User"
            |> GraphQl.withArgument "username" (GraphQl.string username)
            |> GraphQl.withSelectors profileSelector
        ]
        |> query


profileSelector : List (GraphQl.Value a)
profileSelector =
    [ GraphQl.field "username"
    , GraphQl.field "picture"
    , GraphQl.field "bio"
    , GraphQl.field "drafts"
        |> GraphQl.withArgument "filter" (GraphQl.input [ ( "visibility", GraphQl.type_ <| toString PUBLIC ) ])
        |> GraphQl.withArgument "orderBy" (GraphQl.type_ "updatedAt_DESC")
        |> GraphQl.withSelectors draftSelector
    ]


draftSelector : List (GraphQl.Value a)
draftSelector =
    [ GraphQl.field "id"
    , GraphQl.field "content"
    , GraphQl.field "type"
    , GraphQl.field "title"
    , GraphQl.field "createdAt"
    , GraphQl.field "updatedAt"
    , GraphQl.field "visibility"
    , GraphQl.field "owner"
        |> GraphQl.withSelectors
            [ GraphQl.field "username"
            , GraphQl.field "picture"
            , GraphQl.field "bio"
            ]
    ]


mutation : Operation Mutation a -> Http.Body
mutation operation =
    operationToBody OperationMutation operation Nothing


query : Operation Query a -> Http.Body
query operation =
    operationToBody OperationQuery operation Nothing
