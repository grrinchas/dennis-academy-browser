module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodePublicDrafts, decodeUser)
import GraphQl
import Http exposing (Header, jsonBody)
import Json.Decode
import Json.Encode
import Encoders
import Models exposing (..)
import RemoteData exposing (RemoteData)


domain : String
domain =
    "https://nookit.eu.auth0.com"


graphCool : String
graphCool =
    "https://api.graph.cool/simple/v1/cjb18c15f1csb0122a4ptkgnt"


login : ValidUser -> Cmd Msg
login user =
    Http.post (domain ++ "/oauth/token") (jsonBody <| Encoders.login user) Decoders.decodeAuth0Token
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebAuth0Token web)


createAccount : ValidUser -> Cmd Msg
createAccount user =
    Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebAccount web)


authGraphCool : Auth0Token -> Cmd Msg
authGraphCool token =
    Http.post graphCool (GraphQl.operationToBody GraphQl.OperationMutation (Encoders.authGraphCool token) Nothing) decodeGraphCoolToken
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebGraphCoolToken web)


fetchUser : AuthGraphCool -> Cmd Msg
fetchUser token =
    authorised token (GraphQl.operationToBody GraphQl.OperationQuery (Encoders.userInfo token.id) Nothing) decodeUser
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebUser web)


fetchPublicDrafts : AuthGraphCool -> Cmd Msg
fetchPublicDrafts token =
    authorised token (GraphQl.operationToBody GraphQl.OperationQuery Encoders.publicDrafts Nothing) decodePublicDrafts
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebPublicDrafts web)


authorised : AuthGraphCool -> Http.Body -> Json.Decode.Decoder a -> Http.Request a
authorised token body decoder =
    Http.request
        { method = "POST"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.token ]
        , url = graphCool
        , body = body
        , expect = Http.expectJson decoder
        , timeout = Nothing
        , withCredentials = False
        }


saveDraft : Draft -> AuthGraphCool -> Cmd Msg
saveDraft draft token =
    authorised token (GraphQl.operationToBody GraphQl.OperationMutation (Encoders.saveDraft draft) Nothing) Decoders.decodeUpdateDraft
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebSaveDraft web)


createDraft : Draft -> AuthGraphCool -> Cmd Msg
createDraft draft token =
    authorised token (GraphQl.operationToBody GraphQl.OperationMutation (Encoders.createDraft draft token) Nothing) Decoders.decodeCreateDraft
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebCreateDraft web)


deleteDraft : Draft -> AuthGraphCool -> Cmd Msg
deleteDraft draft token =
    authorised token (GraphQl.operationToBody GraphQl.OperationMutation (Encoders.deleteDraft draft token) Nothing) Decoders.decodeDeleteDraft
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebDeleteDraft web)
