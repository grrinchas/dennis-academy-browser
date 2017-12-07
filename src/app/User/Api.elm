module User.Api exposing (..)

import User.Encoders as Encoder
import Http exposing (jsonBody)
import Messages exposing (Msg)
import RemoteData
import User.Decoders exposing (decodeToken, decodeUser)
import User.Validator exposing (ValidUser)


signUpUrl : String
signUpUrl =
    "https://nookit.eu.auth0.com/dbconnections/signup"


loginUrl : String
loginUrl =
    "https://nookit.eu.auth0.com/oauth/token"


signUp : ValidUser -> Cmd Msg
signUp user =
    Http.post signUpUrl (jsonBody <| Encoder.signUp user) decodeUser
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnUserSignUp


login : ValidUser -> Cmd Msg
login user =
    Http.post loginUrl (jsonBody <| Encoder.login user) decodeToken
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnUserLogin
