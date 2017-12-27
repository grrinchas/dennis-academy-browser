module Api exposing (..)

import Decoders
import Http exposing (Header, jsonBody)
import Messages exposing (Msg)
import Encoders
import RemoteData exposing (RemoteData)
import Validator exposing (ValidUser)


domain : String
domain =
    "https://nookit.eu.auth0.com"


cmsUrl : String
cmsUrl =
    "https://api.graphcms.com/simple/v1/dgacademy"


login : ValidUser -> Cmd Msg
login user =
    Http.post (domain ++ "/oauth/token") (jsonBody <| Encoders.login user) Decoders.decodeToken
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchToken


createAccount : ValidUser -> Cmd Msg
createAccount user =
    Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchAccount
