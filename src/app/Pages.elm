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
import Views.NavBar as NavBar
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
    case ( model.user.tokens.auth0, model.user.tokens.graphCool, model.user.data ) of
        ( NotAsked, _, _ ) ->
            Auth.loginForm model.form empty
                |> Auth.wrapper

        ( Loading, _, _ ) ->
            Auth.loginForm model.form empty
                |> withLoader
                |> Auth.wrapper

        ( _, Loading, _ ) ->
            Auth.loginForm model.form empty
                |> withLoader
                |> Auth.wrapper

        ( _, _, Loading ) ->
            Auth.loginForm model.form empty
                |> withLoader
                |> Auth.wrapper

        ( Failure err, _, _ ) ->
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

        ( _, Failure err, _ ) ->
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

        ( _, _, Failure err ) ->
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

        _ ->
            Auth.loginForm model.form empty
                |> Auth.wrapper


landing : Model -> Html Msg
landing model =
    case ( model.route, model.user.tokens.graphCool, model.user.data ) of
        ( Ok (HomeRoute (Just _)), Failure err, _ ) ->
            Error.view <| Http err

        ( _, _, Success _ ) ->
            NavBar.withDashboard |> NavBar.wrapper

        _ ->
            NavBar.withSignUp |> NavBar.wrapper


dashboard : Model -> Html Msg
dashboard model =
    case model.user.data of
        Success _ ->
            NavBar.withUserMenu |> NavBar.wrapper

        _ ->
            Error.view <| Routing NotFound


tablet : Model -> Html Msg
tablet model =
    case model.route of
        Ok route ->
            case route of
                HomeRoute _ ->
                    landing model

                SignUpRoute ->
                    signUpPage model

                LoginRoute ->
                    loginPage model

                DashboardRoute ->
                    dashboard model

        Err oops ->
            Error.view <| Routing oops


mobile : Model -> Html Msg
mobile model =
    tablet model
