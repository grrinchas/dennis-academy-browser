module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodePublicDrafts, decodeUser)
import GraphQL exposing (Payload)
import Http exposing (Header, jsonBody)
import Json.Decode
import Encoders
import Models exposing (..)
import Regex exposing (HowMany(All))
import RemoteData exposing (RemoteData(Failure, Success), WebData, sendRequest)



initialPayload: Payload decoder
initialPayload =
    { queries = GraphQL.remote <| GraphQL.queries "http://localhost:3000/graphql/queries.graphql"
    , endpoint = GraphQL.endpoint "https://api.graph.cool/simple/v1/cjcnkimc02rhy0177ejct2ika" (Json.Decode.fail "missing decoder")
    , name = ""
    , variables = []
    }


domain : String
domain =
    "https://nookit.eu.auth0.com"


graphCool : String
graphCool =
    "https://api.graph.cool/simple/v1/cjcnkimc02rhy0177ejct2ika"

authorised : (AuthGraphCool -> Http.Body) -> Json.Decode.Decoder a -> AuthGraphCool -> Http.Request a
authorised body decoder token =
    Http.request
        { method = "POST"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.token ]
        , url = graphCool
        , body = body token
        , expect = Http.expectJson decoder
        , timeout = Nothing
        , withCredentials = False
        }


login : Maybe ValidUser -> Model -> ( Model, Cmd Msg )
login mUser model =
    case mUser of
        Just user ->
            Http.post (domain ++ "/oauth/token") (jsonBody <| Encoders.login user) Decoders.decodeAuth0Token
                |> RemoteData.sendRequest
                |> Cmd.map OnFetchAuth0Token
                |> (\msg -> withCommands [ msg ] model)

        Nothing ->
            withNoCommand model


createAccount : Maybe ValidUser -> Model -> ( Model, Cmd Msg )
createAccount mUser model =
    case mUser of
        Just user ->
            Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
                |> RemoteData.sendRequest
                |> Cmd.map OnFetchCreatedAccount
                |> (\msg -> withCommands [ msg ] model)

        Nothing ->
            withNoCommand model


deleteDraft : Draft -> Model -> ( Model, Cmd Msg )
deleteDraft draft model =
    initialPayload
        |> GraphQL.withName "deleteDraft"
        |> GraphQL.withDecoder Decoders.decodeDeleteDraft
        |> GraphQL.withVariables [GraphQL.variable "id" draft.id]
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchDeletedDraft
        |> (,) model


deletePublication : Publication -> Model -> ( Model, Cmd Msg )
deletePublication pub model =
    initialPayload
        |> GraphQL.withName "deletePublication"
        |> GraphQL.withDecoder Decoders.decodeDeletePublication
        |> GraphQL.withVariables [GraphQL.variable "id" pub.id]
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchDeletedPublication
        |> (,) model


updatePublication : Publication -> Model -> ( Model, Cmd Msg )
updatePublication pub model =
    initialPayload
        |> GraphQL.withName "updatePublication"
        |> GraphQL.withDecoder Decoders.decodeUpdatePublication
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "id" pub.id
            , GraphQL.variable "content" <| sanitize pub.content
            , GraphQL.variable "title" <| sanitize pub.title
            , GraphQL.variable "image" pub.image
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchUpdatedPublication
        |> (,) model


updateDraft : Draft -> Model -> ( Model, Cmd Msg )
updateDraft draft model =
    initialPayload
        |> GraphQL.withName "updateDraft"
        |> GraphQL.withDecoder Decoders.decodeUpdateDraft
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "id" draft.id
            , GraphQL.variable "content" <| sanitize draft.content
            , GraphQL.variable "title" <| sanitize draft.title
            , GraphQL.variable "visibility" <| visibility draft.visibility
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchUpdatedDraft
        |> (,) model


createDraft : Draft -> Model -> ( Model, Cmd Msg )
createDraft draft model =
    initialPayload
        |> GraphQL.withName "createDraft"
        |> GraphQL.withDecoder Decoders.decodeCreateDraft
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "ownerId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "content" <| sanitize draft.content
            , GraphQL.variable "title" <| sanitize draft.title
            , GraphQL.variable "type" "TUTORIAL"
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchCreatedDraft
        |> (,) model



createPublication : Publication -> Model -> ( Model, Cmd Msg )
createPublication pub model =
    initialPayload
        |> GraphQL.withName "createPublication"
        |> GraphQL.withDecoder Decoders.decodeCreatePublication
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "ownerId" pub.owner.id
            , GraphQL.variable "content" <| sanitize pub.content
            , GraphQL.variable "title" <| sanitize pub.title
            , GraphQL.variable "image" pub.image
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchCreatedPublication
        |> (,) model


likeDraft : Draft -> Model -> ( Model, Cmd Msg )
likeDraft draft model =
    initialPayload
        |> GraphQL.withName "likeDraft"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "userId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "draftId" draft.id
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model


likePublication : Publication -> Model -> ( Model, Cmd Msg )
likePublication pub model =
    initialPayload
        |> GraphQL.withName "likePublication"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "userId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "publicationId" pub.id
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model


unLikeDraft : Draft -> Model -> ( Model, Cmd Msg )
unLikeDraft draft model =
    initialPayload
        |> GraphQL.withName "unlikeDraft"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "userId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "draftId" draft.id
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model


unLikePublication : Publication -> Model -> ( Model, Cmd Msg )
unLikePublication pub model =
    initialPayload
        |> GraphQL.withName "unlikePublication"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "userId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "publicationId" pub.id
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model



authGraphCool : Model -> ( Model, Cmd Msg )
authGraphCool model =
    initialPayload
        |> GraphQL.withName "authenticate"
        |> GraphQL.withDecoder Decoders.decodeGraphCoolToken
        |> GraphQL.withVariables
            [ GraphQL.variable "token" (RemoteData.map .accessToken model.remote.auth0 |> RemoteData.withDefault "")
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchGraphCoolToken
        |> (,) model



fetchAdmin : Model -> ( Model, Cmd Msg )
fetchAdmin model =
    initialPayload
        |> GraphQL.withName "admin"
        |> GraphQL.withDecoder Decoders.decodeUser
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [GraphQL.variable "id" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchUserInfo
        |> (,) model


fetchUserProfile : String -> Model -> ( Model, Cmd Msg )
fetchUserProfile username model =
    initialPayload
        |> GraphQL.withName "userProfile"
        |> GraphQL.withDecoder Decoders.decodeUserProfile
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [GraphQL.variable "username" username]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchUserProfile
        |> (,) model



updateUser : Model -> ( Model, Cmd Msg )
updateUser model =
    initialPayload
        |> GraphQL.withName "updateUser"
        |> GraphQL.withDecoder Decoders.decodeUpdateProfile
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "id" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "bio" model.form.userBio
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchUserProfile
        |> (,) model


fetchPublicDrafts : Model -> ( Model, Cmd Msg )
fetchPublicDrafts model =
    initialPayload
        |> GraphQL.withName "allPublicDrafts"
        |> GraphQL.withDecoder Decoders.decodePublicDrafts
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchPublicDrafts
        |> (,) model


fetchPublications : Model -> ( Model, Cmd Msg )
fetchPublications model =
    initialPayload
        |> GraphQL.withName "allPublications"
        |> GraphQL.withDecoder Decoders.decodePublications
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map OnFetchPublications
        |> (,) model


createNotification : String -> DraftOwner -> NotificationType -> Model -> ( Model, Cmd Msg )
createNotification msg owner noteType model =
    initialPayload
        |> GraphQL.withName "createNotification"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.withVariables
            [ GraphQL.variable "senderId" (RemoteData.map .id model.remote.graphCool |> RemoteData.withDefault "")
            , GraphQL.variable "receiverId" owner.id
            , GraphQL.variable "type" <| notification noteType
            , GraphQL.variable "message" msg
            ]
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model



deleteNotification : Notification -> Model -> ( Model, Cmd Msg )
deleteNotification note model =
    initialPayload
        |> GraphQL.withName "deleteNotification"
        |> GraphQL.withDecoder (Json.Decode.succeed ())
        |> GraphQL.withVariables [GraphQL.variable "id" note.id]
        |> GraphQL.withAuthorisation (RemoteData.map .token model.remote.graphCool |> RemoteData.withDefault "")
        |> GraphQL.send RemoteData.fromResult
        |> Cmd.map (always WhenNoOperation)
        |> (,) model


sanitize : String -> String
sanitize string =
    Regex.replace All (Regex.regex "\n") (\_ -> "\\n") string
        |> Regex.replace All (Regex.regex "\t") (\_ -> "\\t")
        |> Regex.replace All (Regex.regex "\"") (\_ -> "\\\"")


visibility: Visibility -> String
visibility vis =
    case vis of
        PUBLIC -> "PUBLIC"
        PRIVATE -> "PRIVATE"

notification: NotificationType -> String
notification note =
    case note of
        LIKED_DRAFT -> "LIKED_DRAFT"
        UNLIKED_DRAFT -> "UNLIKED_DRAFT"
        LIKED_PUBLICATION -> "LIKED_PUBLICATION"
        UNLIKED_PUBLICATION -> "UNLIKED_PUBLICATION"
