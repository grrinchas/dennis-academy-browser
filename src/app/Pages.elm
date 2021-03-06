module Pages exposing (..)

import Components exposing (empty, layout)
import Decoders
import Dict
import Err exposing (..)
import Html exposing (Html, div, text)
import Http exposing (Error(BadStatus))
import Json.Decode
import Views.Error as Error
import Views.Auth as Auth
import Views.NavBar as NavBar
import Views.Draft as Draft
import Views.Drafts as Drafts
import Views.Dashboard as Dashboard
import Views.UserProfile as UserProfile
import Views.Landing as Landing
import Views.Publications as Publications
import Views.Publication as Publication
import Models exposing (..)
import Routes exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))


signUpPage : Model -> Html Msg
signUpPage model =
    case model.remote.account of
        NotAsked ->
            Auth.signUpForm model.form empty
                |> Auth.wrapper

        Loading ->
            Auth.wrapper (Auth.loader <| Auth.signUpForm model.form empty)

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
            Auth.loginForm model.form empty |> Auth.wrapper

        Loading ->
            Auth.wrapper (Auth.loader <| Auth.loginForm  model.form empty)

        Success _ ->
            Error.view <| Routing NotFound

        Failure err ->
            case err of
                BadStatus response ->
                    if response.status.code == 403 then
                        Auth.failureResponse "Wrong email or password."
                            |> Auth.loginForm model.form
                            |> Auth.wrapper
                    else Auth.loginForm model.form empty |> Auth.wrapper

                _ ->  Auth.loginForm model.form empty |> Auth.wrapper


draftPage : String -> Model -> Html Msg
draftPage id model =
    case model.remote.user of
        Success user ->
            case Dict.get id user.drafts of
                Just draft ->
                    layout model (NavBar.draft (Just draft) model) <| Draft.view model (Just draft)

                Nothing ->
                    Error.view <| Routing NotFound

        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.draft Nothing model) <| Draft.view model Nothing


dashboardPage : Model -> Html Msg
dashboardPage model =
    case model.remote.user of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.dashboard model) <| Dashboard.view model


landingPage : Model -> Html Msg
landingPage model =
    case model.remote.publications of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.landing model) <| Landing.view model


draftsPage : Model -> Html Msg
draftsPage model =
    case model.remote.user of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.drafts model) <| Drafts.view False model


publicDraftsPage : Model -> Html Msg
publicDraftsPage model =
    case RemoteData.append model.remote.user model.remote.publicDrafts of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.dashboard model) <| Drafts.publicView True model

publicationsPage : Model -> Html Msg
publicationsPage model =
    case RemoteData.append model.remote.user model.remote.publications of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.dashboard model) <| Publications.view model


publicationPage : String -> Model -> Html Msg
publicationPage id model =
    case RemoteData.append model.remote.user model.remote.publications of
        Success (user, publications) ->
            case Dict.get id publications of
                Just pub ->
                    layout model (NavBar.dashboard model) <| Publication.view model (Just pub)

                Nothing ->
                    Error.view <| Routing NotFound

        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.dashboard model) <| Publication.view model Nothing


userProfilePage : String -> Model -> Html Msg
userProfilePage username model =
    case RemoteData.append model.remote.user model.remote.userProfile of
        Failure err ->
            Error.view <| Http err

        _ ->
            layout model (NavBar.dashboard model) <| UserProfile.view model



view : Model -> Html Msg
view model =
    case model.route of
        Ok route ->
            case route of
                HomeRoute ->
                    landingPage model


                SignUpRoute ->
                    signUpPage model

                LoginRoute ->
                    loginPage model

                DraftRoute id ->
                    draftPage id model

                DashboardRoute ->
                    dashboardPage model

                DraftsRoute ->
                    draftsPage model

                PublicDraftsRoute ->
                    publicDraftsPage model

                ProfileRoute username ->
                    userProfilePage username model

                PublicationsRoute ->
                    publicationsPage model

                PublicationRoute id ->
                    publicationPage id model

        Err oops ->
            Error.view <| Routing oops
