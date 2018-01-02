module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodeUser)
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
    Http.post graphCool (jsonBody <| Encoders.authGraphCool token) decodeGraphCoolToken
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebGraphCoolToken web)


authorisedUser : AuthGraphCool -> Json.Encode.Value -> Json.Decode.Decoder a -> Http.Request a
authorisedUser token encoder decoder =
    Http.request
        { method = "POST"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.token ]
        , url = graphCool
        , body = jsonBody encoder
        , expect = Http.expectJson decoder
        , timeout = Nothing
        , withCredentials = False
        }


fetchUser : AuthGraphCool -> Cmd Msg
fetchUser token =
    authorisedUser token (Encoders.userInfo token.id) decodeUser
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebUser web)


saveDraft : Draft -> AuthGraphCool -> Cmd Msg
saveDraft draft token =
    authorisedUser token (Encoders.saveDraft draft) Decoders.decodeUpdateDraft
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> OnFetch <| WebSaveDraft web)
