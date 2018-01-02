module Api exposing (..)

import Decoders exposing (decodeGraphCoolToken, decodeUser)
import Http exposing (Header, jsonBody)
import Json.Encode
import Messages exposing (Msg)
import Encoders
import Models exposing (Auth0Token, AuthGraphCool, User)
import RemoteData exposing (RemoteData)
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
        |> Cmd.map (\web -> Messages.OnFetch <| Messages.Auth0Token web)


createAccount : ValidUser -> Cmd Msg
createAccount user =
    Http.post (domain ++ "/dbconnections/signup") (jsonBody <| Encoders.createAccount user) Decoders.decodeAccount
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> Messages.OnFetch <| Messages.Account web)


authGraphCool : Auth0Token -> Cmd Msg
authGraphCool token =
    Http.post graphCool (jsonBody <| Encoders.authGraphCool token) decodeGraphCoolToken
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> Messages.OnFetch <| Messages.GraphCoolToken web)


authorisedUser : AuthGraphCool -> Http.Request User
authorisedUser token =
    Http.request
        { method = "POST"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.token ]
        , url = graphCool
        , body = jsonBody <| Encoders.userInfo token.id
        , expect = Http.expectJson decodeUser
        , timeout = Nothing
        , withCredentials = False
        }


fetchUser : AuthGraphCool -> Cmd Msg
fetchUser token =
    authorisedUser token
        |> RemoteData.sendRequest
        |> Cmd.map (\web -> Messages.OnFetch <| Messages.User web)
