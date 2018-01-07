module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodePublicDrafts, decodeUser)
import GraphQl exposing (Mutation, Operation, OperationType(OperationMutation, OperationQuery), Query, operationToBody)
import Http exposing (Header, jsonBody)
import Json.Decode
import Json.Encode
import Encoders
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Success), WebData, sendRequest)


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


aauthorised : (AuthGraphCool -> Http.Body) -> Json.Decode.Decoder a -> AuthGraphCool -> Http.Request a
aauthorised body decoder token =
    Http.request
        { method = "POST"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.token ]
        , url = graphCool
        , body = body token
        , expect = Http.expectJson decoder
        , timeout = Nothing
        , withCredentials = False
        }


deleteDraft : Draft -> Model -> ( Model, Cmd Msg )
deleteDraft draft model =
    RemoteData.map (aauthorised (Encoders.deleteDraft draft) Decoders.decodeDeleteDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map (\web -> OnFetch <| WebDeleteDraft web))
        |> withError model


updateDraft : Draft -> Model -> ( Model, Cmd Msg )
updateDraft draft model =
    RemoteData.map (aauthorised (Encoders.updateDraft draft) Decoders.decodeUpdateDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map (\web -> OnFetch <| WebSaveDraft web))
        |> withError model


createDraft : Draft -> Model -> ( Model, Cmd Msg )
createDraft draft model =
    RemoteData.map (aauthorised (Encoders.createDraft draft) Decoders.decodeCreateDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map (\web -> OnFetch <| WebCreateDraft web))
        |> withError model


withError : Model -> WebData (Cmd Msg) -> ( Model, Cmd Msg )
withError model web =
    case web of
        Success a ->
            ( model, a )

        Failure err ->
            failRemoteUser err model
                |> withNoCommand

        _ ->
            withNoCommand model
