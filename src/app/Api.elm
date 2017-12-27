module Api exposing (..)

import Decoders
import GraphQl exposing (..)
import Http exposing (Header, jsonBody)
import Messages exposing (Msg)
import Encoders
import RemoteData exposing (RemoteData)
import Validator exposing (ValidUser)


domain : String
domain = "https://nookit.eu.auth0.com"


loginUrl : String
loginUrl =
    "https://nookit.eu.auth0.com/oauth/token"


cmsUrl : String
cmsUrl =
    "https://api.graphcms.com/simple/v1/dgacademy"


createAccount : ValidUser -> Cmd Msg
createAccount user =
    Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchAccount

