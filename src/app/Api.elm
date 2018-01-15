module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodePublicDrafts, decodeUser)
import Http exposing (Header, jsonBody)
import Json.Decode
import Encoders
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Success), WebData, sendRequest)


domain : String
domain =
    "https://nookit.eu.auth0.com"


graphCool : String
graphCool =
    "https://api.graph.cool/simple/v1/cjb18c15f1csb0122a4ptkgnt"


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
    RemoteData.map (authorised (Encoders.deleteDraft draft) Decoders.decodeDeleteDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchDeletedDraft)
        |> withError model


updateDraft : Draft -> Model -> ( Model, Cmd Msg )
updateDraft draft model =
    RemoteData.map (authorised (Encoders.updateDraft draft) Decoders.decodeUpdateDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchUpdatedDraft)
        |> withError model


createDraft : Draft -> Model -> ( Model, Cmd Msg )
createDraft draft model =
    RemoteData.map (authorised (Encoders.createDraft draft) Decoders.decodeCreateDraft) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchCreatedDraft)
        |> withError model


authGraphCool : Model -> ( Model, Cmd Msg )
authGraphCool model =
    RemoteData.map (\token -> Http.post graphCool (Encoders.authGraphCool token) Decoders.decodeGraphCoolToken) model.remote.auth0
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchGraphCoolToken)
        |> withError model


fetchUpdateProfile : Model -> ( Model, Cmd Msg )
fetchUpdateProfile model =
    RemoteData.map (authorised (Encoders.updateProfile model.form) Decoders.decodeUpdateProfile) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchUserProfile)
        |> withError model



fetchUser : Model -> ( Model, Cmd Msg )
fetchUser model =
    RemoteData.map (authorised Encoders.userInfo Decoders.decodeUser) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchUserInfo)
        |> withError model


fetchUserProfile : String -> Model -> ( Model, Cmd Msg )
fetchUserProfile username model =
    RemoteData.map (authorised (Encoders.userProfile username ) Decoders.decodeUserProfile) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchUserProfile)
        |> withError model


fetchPublicDrafts : Model -> ( Model, Cmd Msg )
fetchPublicDrafts model =
    RemoteData.map (authorised Encoders.publicDrafts Decoders.decodePublicDrafts) model.remote.graphCool
        |> RemoteData.map sendRequest
        |> RemoteData.map (Cmd.map OnFetchPublicDrafts)
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
