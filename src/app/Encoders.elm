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
                , GraphQl.field "likedDrafts"
                    |> GraphQl.withSelectors draftSelector
                , GraphQl.field "likedPublications"
                    |> GraphQl.withSelectors publicationSelector
                , GraphQl.field "publications"
                    |> GraphQl.withSelectors publicationSelector
                , GraphQl.field "sentNotifications"
                    |> GraphQl.withSelectors notificationSelector
                , GraphQl.field "receivedNotifications"
                    |> GraphQl.withSelectors notificationSelector
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

publications :  Http.Body
publications  =
    GraphQl.named "allPublications"
        [ GraphQl.field "allPublications"
            |> GraphQl.withSelectors publicationSelector
        ] |> query



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


createPublication : Publication -> AuthGraphCool -> Http.Body
createPublication pub token =
    GraphQl.named "createPublication"
        [ GraphQl.field "createPublication"
            |> GraphQl.withArgument "ownerId" (GraphQl.string token.id)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize pub.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize pub.title)
            |> GraphQl.withArgument "image" (GraphQl.string <| sanitize pub.image)
            |> GraphQl.withSelectors publicationSelector
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

updatePublication : Publication -> AuthGraphCool -> Http.Body
updatePublication pub _ =
    GraphQl.named "updatePublication"
        [ GraphQl.field "updatePublication"
            |> GraphQl.withArgument "id" (GraphQl.string pub.id)
            |> GraphQl.withArgument "content" (GraphQl.string <| sanitize pub.content)
            |> GraphQl.withArgument "title" (GraphQl.string <| sanitize pub.title)
            |> GraphQl.withArgument "image" (GraphQl.string pub.image)
            |> GraphQl.withSelectors publicationSelector
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

deletePublication : Publication -> AuthGraphCool -> Http.Body
deletePublication pub token =
    GraphQl.named "deletePublication"
        [ GraphQl.field "deletePublication"
            |> GraphQl.withArgument "id" (GraphQl.string pub.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                ]
        ]
        |> mutation


deleteNotification : Notification -> AuthGraphCool -> Http.Body
deleteNotification note token =
    GraphQl.named "deleteNotification"
        [ GraphQl.field "deleteNotification"
            |> GraphQl.withArgument "id" (GraphQl.string note.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "id"
                ]
        ]
        |> mutation

likeDraft : Draft -> AuthGraphCool -> Http.Body
likeDraft draft token =
    GraphQl.named "likeDraft"
        [ GraphQl.field "addToUserOnLikedDraft"
            |> GraphQl.withArgument "draftFanUserId" (GraphQl.string token.id)
            |> GraphQl.withArgument "likedDraftsDraftId" (GraphQl.string draft.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "likedDraftsDraft"
                    |> GraphQl.withSelectors draftSelector
                ]
        ]
        |> mutation


likePublication : Publication -> AuthGraphCool -> Http.Body
likePublication pub token =
    GraphQl.named "likePublication"
        [ GraphQl.field "addToUserOnLikedPublication"
            |> GraphQl.withArgument "publicationFanUserId" (GraphQl.string token.id)
            |> GraphQl.withArgument "likedPublicationsPublicationId" (GraphQl.string pub.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "likedPublicationsPublication"
                    |> GraphQl.withSelectors publicationSelector
                ]
        ]
        |> mutation


unLikeDraft : Draft -> AuthGraphCool -> Http.Body
unLikeDraft draft token =
    GraphQl.named "unLikeDraft"
        [ GraphQl.field "removeFromUserOnLikedDraft"
            |> GraphQl.withArgument "draftFanUserId" (GraphQl.string token.id)
            |> GraphQl.withArgument "likedDraftsDraftId" (GraphQl.string draft.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "likedDraftsDraft"
                    |> GraphQl.withSelectors draftSelector
                ]
        ]
        |> mutation


unLikePublication : Publication -> AuthGraphCool -> Http.Body
unLikePublication pub token =
    GraphQl.named "unLikePublication"
        [ GraphQl.field "removeFromUserOnLikedPublication"
            |> GraphQl.withArgument "publicationFanUserId" (GraphQl.string token.id)
            |> GraphQl.withArgument "likedPublicationsPublicationId" (GraphQl.string pub.id)
            |> GraphQl.withSelectors
                [ GraphQl.field "likedPublicationsPublication"
                    |> GraphQl.withSelectors publicationSelector
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

createDraftNotification: String -> DraftOwner -> NotificationType -> AuthGraphCool -> Http.Body
createDraftNotification id owner notType token =
    GraphQl.named "createNotification"
        [GraphQl.field "createNotification"
            |> GraphQl.withArgument "senderId" (GraphQl.string token.id)
            |> GraphQl.withArgument "receiverId" (GraphQl.string owner.id)
            |> GraphQl.withArgument "type" (GraphQl.type_ <| toString notType)
            |> GraphQl.withArgument "message" (GraphQl.string id)
            |> GraphQl.withSelectors
                [ GraphQl.field "sender"
                    |> GraphQl.withSelectors
                        [GraphQl.field "username"]
                , GraphQl.field "receiver"
                    |> GraphQl.withSelectors
                        [GraphQl.field "username"]
                ]
        ] |> mutation



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
        |> GraphQl.withSelectors draftSelector
    , GraphQl.field "likedDrafts"
        |> GraphQl.withArgument "filter" (GraphQl.input [ ( "visibility", GraphQl.type_ <| toString PUBLIC ) ])
        |> GraphQl.withSelectors draftSelector
    ]


notificationSelector : List (GraphQl.Value a)
notificationSelector =
    [ GraphQl.field "id"
    , GraphQl.field "createdAt"
    , GraphQl.field "updatedAt"
    , GraphQl.field "type"
    , GraphQl.field "message"
    , GraphQl.field "sender"
        |> GraphQl.withSelectors profileSelector
    , GraphQl.field "receiver"
        |> GraphQl.withSelectors profileSelector
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
            [ GraphQl.field "id"
            , GraphQl.field "username"
            , GraphQl.field "picture"
            , GraphQl.field "bio"
            ]
    , GraphQl.field "_draftFanMeta"
        |> GraphQl.withSelectors
            [GraphQl.field "count"]
    ]

publicationSelector: List (GraphQl.Value a)
publicationSelector =
    [ GraphQl.field "id"
    , GraphQl.field "content"
    , GraphQl.field "title"
    , GraphQl.field "createdAt"
    , GraphQl.field "updatedAt"
    , GraphQl.field "image"
    , GraphQl.field "owner"
        |> GraphQl.withSelectors
            [ GraphQl.field "id"
            , GraphQl.field "username"
            , GraphQl.field "picture"
            , GraphQl.field "bio"
            ]
    , GraphQl.field "_publicationFanMeta"
        |> GraphQl.withSelectors
            [GraphQl.field "count"]
    ]


mutation : Operation Mutation a -> Http.Body
mutation operation =
    operationToBody OperationMutation operation Nothing


query : Operation Query a -> Http.Body
query operation =
    operationToBody OperationQuery operation Nothing

