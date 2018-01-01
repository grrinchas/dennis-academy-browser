module Pages exposing (..)

import Components exposing (empty, layout, withLoader)
import Decoders
import Err exposing (..)
import Html exposing (Html, div, text)
import Http exposing (Error(BadStatus))
import Json.Decode
import Views.Landing as Landing
import Views.Error as Error
import Views.Auth as Auth
import Views.NavBar as NavBar
import Views.Editor as Editor
import Models exposing (..)
import Routes exposing (..)
import Messages exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))


signUpPage : Model -> Html Msg
signUpPage model =
    case model.remote.account of
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
    case model.remote.user of
        NotAsked ->
            Auth.loginForm model.form empty
                |> Auth.wrapper

        Loading ->
            Auth.loginForm model.form empty
                |> withLoader
                |> Auth.wrapper

        Success _ ->
            Error.view <| Routing NotFound

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


editorPage : Model -> Html Msg
editorPage model =
    case model.remote.user of
        NotAsked ->
            Error.view <| Routing NotFound

        Loading ->
            div [] []

        Success user ->
            layout (NavBar.withUserMenu user model.menu |> NavBar.wrapper NavBar.logo (NavBar.withEditor model.menu)) <| Editor.view model.editor

        Failure err ->
            Error.view <| Http err


dashboard : Model -> Html Msg
dashboard model =
    case model.remote.user of
        NotAsked ->
            Error.view <| Routing NotFound

        Loading ->
            div [] []

        Success user ->
            NavBar.withUserMenu user model.menu |> NavBar.wrapper NavBar.logo empty

        Failure err ->
            Error.view <| Http err


landing : Model -> Html Msg
landing model =
    case isLoggedIn model of
        True ->
            NavBar.withDashboard |> NavBar.wrapper NavBar.logo empty

        False ->
            NavBar.withSignUp |> NavBar.wrapper NavBar.logo empty


tablet : Model -> Html Msg
tablet model =
    case model.route of
        Ok route ->
            case route of
                HomeRoute ->
                    landing model

                SignUpRoute ->
                    signUpPage model

                LoginRoute ->
                    loginPage model

                EditorRoute id ->
                    editorPage model

                DashboardRoute ->
                    dashboard model

        Err oops ->
            Error.view <| Routing oops


mobile : Model -> Html Msg
mobile model =
    tablet model
