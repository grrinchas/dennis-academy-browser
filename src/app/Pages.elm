module Pages exposing (..)

import Components exposing (empty, withLoader)
import Decoders
import Err exposing (..)
import Html exposing (Html, text)
import Http exposing (Error(BadStatus))
import Json.Decode
import Views.Landing as Landing
import Views.Error as Error
import Views.Auth as Auth
import Models exposing (..)
import Routes exposing (..)
import Messages exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))


signUpPage : Model -> Html Msg
signUpPage model =
    case model.account of
        NotAsked ->
            Auth.signUpForm model.form empty
                |> Auth.wrapper

        Loading ->
            Auth.signUpForm model.form empty
                |> withLoader
                |> Auth.wrapper

        Success account ->
            Auth.successResponse account
                |> Auth.signUpForm model.form
                |> Auth.wrapper

        Failure err ->
            case err of
                Http.BadStatus response ->
                    case Json.Decode.decodeString Decoders.decodeSignUpError response.body of
                        Ok result ->
                            case result.code of
                                EmailTaken ->
                                    Auth.failureResponse "Email is taken."
                                        |> Auth.signUpForm model.form
                                        |> Auth.wrapper

                                UsernameTaken ->
                                    Auth.failureResponse "Username is taken."
                                        |> Auth.signUpForm model.form
                                        |> Auth.wrapper

                                _ ->
                                    Error.view <| Http err

                        Err _ ->
                            Error.view <| Http err

                _ ->
                    Error.view <| Http err


loginPage : Model -> Html Msg
loginPage model =
    case model.token of
        NotAsked ->
            Auth.loginForm model.form empty
                |> Auth.wrapper

        Loading ->
            Auth.loginForm model.form empty
                |> withLoader
                |> Auth.wrapper

        Success token ->
            Error.view NotFound

        Failure err ->
            case err of
                BadStatus response ->
                    if response.status.code == 403 then
                        Auth.failureResponse "Wrong email or password."
                            |> Auth.loginForm model.form
                            |> Auth.wrapper
                    else
                        Error.view <| Http err

                _ ->
                    Error.view <| Http err


tablet : Model -> Html Msg
tablet model =
    case model.route of
        Just route ->
            case route of
                HomeRoute _ ->
                    Landing.view

                SignUpRoute ->
                    signUpPage model

                LoginRoute ->
                    loginPage model

                DashboardRoute ->
                    text "dashboard"

        Nothing ->
            Error.view NotFound


mobile : Model -> Html Msg
mobile model =
    tablet model
