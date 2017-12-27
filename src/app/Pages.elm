module Pages exposing (..)

import Decoders
import Err exposing (..)
import Html exposing (Html, text)
import Http
import Json.Decode
import Views.Landing as Landing
import Views.Error as Error
import Views.Auth as Auth
import Models exposing (..)
import Routes exposing (..)
import Messages exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))


tablet : Model -> Html Msg
tablet model =
    case model.route of
        Just route ->
            case route of
                HomeRoute ->
                    Landing.view

                SignUpRoute ->
                    case model.account of
                        NotAsked ->
                            Auth.signUpWithEmpty model.form

                        Loading ->
                            text "loading"

                        Success account ->
                            Auth.signUpWithSuccess model.form account

                        Failure err ->
                            case err of
                                Http.BadStatus response ->
                                    case Json.Decode.decodeString Decoders.decodeSignUpError response.body of
                                        Ok result ->
                                            case result.code of
                                                EmailTaken ->
                                                    Auth.signUpWithError model.form "Email is taken."

                                                UsernameTaken ->
                                                    Auth.signUpWithError model.form "Username is taken."

                                                _ ->
                                                    Error.view <| Http err

                                        Err _ ->
                                            Error.view <| Http err

                                _ ->
                                    Error.view <| Http err

        Nothing ->
            Error.view NotFound


mobile : Model -> Html Msg
mobile model =
    tablet model
