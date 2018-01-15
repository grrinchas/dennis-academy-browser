module Pages exposing (..)

import Components exposing (empty, layout, withLoader)
import Decoders
import Dict
import Err exposing (..)
import Html exposing (Html, div, text)
import Http exposing (Error(BadStatus))
import Json.Decode
import List
import Views.Landing as Landing
import Views.Error as Error
import Views.Auth as Auth
import Views.NavBar as NavBar
import Views.Draft as Draft
import Views.Drafts as Drafts
import Views.UserProfile as UserProfile
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


draftPage : String -> Model -> Html Msg
draftPage id model =
    case model.remote.user of
        NotAsked ->
            div [] []

        Loading ->
            div [] []

        Success user ->
            case Dict.get id user.drafts of
                Just draft ->
                    let
                        header =
                            NavBar.withButtons
                                [ NavBar.publish model.menu
                                , NavBar.notifications
                                , NavBar.profile user model.menu
                                ]
                                |> NavBar.wrapper NavBar.logo
                    in
                        layout model.menu header <| Draft.view model draft

                Nothing ->
                    Error.view <| Routing NotFound

        Failure err ->
            Error.view <| Http err


dashboard : Model -> Html Msg
dashboard model =
    case model.remote.user of
        NotAsked ->
            div [] []

        Loading ->
            div [] []

        Success user ->
            NavBar.withButtons
                [ NavBar.notifications, NavBar.profile user model.menu ]
                |> NavBar.wrapper NavBar.logo

        Failure err ->
            Error.view <| Http err


landing : Model -> Html Msg
landing model =
    case model.remote.user of
        NotAsked ->
            NavBar.withButtons
                [ NavBar.login, NavBar.or, NavBar.signUp ]
                |> NavBar.wrapper NavBar.logo

        Loading ->
            NavBar.withButtons
                [ NavBar.login, NavBar.or, NavBar.signUp ]
                |> NavBar.wrapper NavBar.logo

        Success user ->
            NavBar.withButtons
                [ NavBar.dashboard ]
                |> NavBar.wrapper NavBar.logo

        Failure err ->
            Error.view <| Http err


draftsPage : Model -> Html Msg
draftsPage model =
    case model.remote.user of
        NotAsked ->
            div [] []

        Loading ->
            div [] []

        Success user ->
            layout model.menu (NavBar.draftsHeader user model) <| Drafts.view False model.menu user (Dict.values user.drafts)

        Failure err ->
            Error.view <| Http err


publicDraftsPage : Model -> Html Msg
publicDraftsPage model =
    case RemoteData.append model.remote.user model.remote.publicDrafts of
        NotAsked ->
            div [] []

        Loading ->
            div [] []

        Success ( user, drafts ) ->
            layout model.menu (NavBar.draftsHeader user model) <| Drafts.publicView True model.menu user drafts model.remote.refreshedPublicDrafts

        Failure err ->
            Error.view <| Http err


userProfilePage : String -> Model -> Html Msg
userProfilePage username model =
    case RemoteData.append model.remote.user model.remote.userProfile of
        NotAsked ->
            div [] []

        Loading ->
            div [] []

        Success ( user, profile ) ->
            NavBar.withButtons [NavBar.notifications,  NavBar.profile user model.menu] |> NavBar.wrapper NavBar.logo
                |> (\h -> layout model.menu h <| UserProfile.view model.form model.menu user profile model.remote.userProfile)

        Failure err ->
            Error.view <| Http err


view : Model -> Html Msg
view model =
    case model.route of
        Ok route ->
            case route of
                HomeRoute ->
                    landing model

                SignUpRoute ->
                    signUpPage model

                LoginRoute ->
                    loginPage model

                DraftRoute id ->
                    draftPage id model

                DashboardRoute ->
                    dashboard model

                DraftsRoute ->
                    draftsPage model

                PublicDraftsRoute ->
                    publicDraftsPage model

                ProfileRoute username -> userProfilePage username model

        Err oops ->
            Error.view <| Routing oops
