module User.Api exposing (..)

import User.Encoders exposing (encodeUser)
import Http exposing (jsonBody)
import Messages exposing (Msg)
import RemoteData
import User.Decoders exposing (decodeUser)
import User.Model exposing (SignUpForm, ValidUser)


signUpUrl : String
signUpUrl =
    "https://nookit.eu.auth0.com/dbconnections/signup"

signUp : ValidUser -> Cmd Msg
signUp user =
    Http.post signUpUrl (jsonBody <| encodeUser user) decodeUser
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnUserSignUp

