module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken)
import Http exposing (Header, jsonBody)
import Json.Decode
import Json.Encode
import Messages exposing (Msg)
import Encoders
import RemoteData exposing (RemoteData)
import Routes exposing (Auth0Token, GraphCoolToken)
import Validator exposing (ValidUser)


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
        |> Cmd.map Messages.OnFetchAuth0Token


createAccount : ValidUser -> Cmd Msg
createAccount user =
    Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchAccount


authGraphCool : Auth0Token -> Cmd Msg
authGraphCool token =
    Http.post graphCool (jsonBody <| Encoders.authGraphCool token) decodeGraphCoolToken
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchGraphCoolToken
