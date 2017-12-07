module Common.Views.Pages exposing (..)

import Common.Model exposing (Brand, Responsive(Mobile, Tablet), View)
import Common.Views.NavBar as NavBar
import Common.Views.Layout as Layout
import Common.Views.ErrorPage as ErrorPage
import Http exposing (Error(BadPayload, BadStatus, BadUrl, NetworkError, Timeout), Response)
import Json.Decode
import Question.Model exposing (Question)
import Topic.Views.Topics as Topics
import Topic.Views.Topic as Topic
import Question.Views.Question as Question
import Html exposing (..)
import Messages exposing (..)
import RemoteData exposing (RemoteData(NotAsked), WebData)
import Topic.Model exposing (Topic)
import User.Decoders
import User.Model exposing (Token, User, UserForm)
import User.Validator exposing (Error(EmailTaken, UsernameTaken))
import User.Views.Home as UserHome
import User.Views.Registration as Registration
import User.Views.VerifyEmail as VerifyEmail


emptyPage : View msg
emptyPage =
    { mobile = div [] []
    , tablet = div [] []
    }


notFound : View Msg
notFound =
    ErrorPage.notFound


loading : View msg
loading =
    { mobile = Layout.loading
    , tablet = Layout.loading
    }


landing : Brand -> View Msg
landing brand =
    Layout.headerMain (NavBar.view brand) (emptyPage)


topics : Brand -> List Topic -> View Msg
topics brand topics =
    Layout.headerMain (NavBar.view brand) (Topics.view topics)


topic : Brand -> Maybe Topic -> View Msg
topic brand maybe =
    case maybe of
        Just topic ->
            Layout.noContainer (NavBar.view brand) (Topic.view topic)

        Nothing ->
            notFound


question : Brand -> ( Maybe Topic, Maybe Question ) -> View Msg
question brand maybeData =
    case maybeData of
        ( Just topic, Just question ) ->
            Layout.noContainer (NavBar.view brand) (Question.view topic question)

        _ ->
            notFound


signUp : WebData User -> UserForm -> View Msg
signUp user form =
    case user of
        NotAsked ->
            Layout.onlyMain <| Registration.signUpView form Nothing

        RemoteData.Loading ->
            Layout.withLoader (Layout.onlyMain <| Registration.signUpView form Nothing)

        RemoteData.Success user ->
            emptyPage

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    case Json.Decode.decodeString User.Decoders.decodeError response.body of
                        Ok result ->
                            case result.code of
                                UsernameTaken ->
                                    Layout.onlyMain <| Registration.signUpView form <| Just "Username is taken."

                                EmailTaken ->
                                    Layout.onlyMain <| Registration.signUpView form <| Just "Username is taken."

                                _ ->
                                    error err

                        _ ->
                            error err

                _ ->
                    error err


verifyEmail : WebData User -> View Msg
verifyEmail user =
    emptyPage


login : WebData Token -> UserForm -> View Msg
login user form =
    case user of
        RemoteData.NotAsked ->
            Registration.loginView form Nothing

        RemoteData.Loading ->
            Layout.withLoader (Registration.loginView form Nothing)

        RemoteData.Success token ->
            { mobile = text <| Basics.toString token, tablet = text <| Basics.toString token }

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    if response.status.code == 403 then
                        Registration.loginView form <| Just "Wrong email or password."
                    else
                        error err

                _ ->
                    error err


error : Http.Error -> View msg
error error =
    case error of
        BadUrl _ ->
            ErrorPage.networkError

        Timeout ->
            ErrorPage.networkError

        NetworkError ->
            ErrorPage.networkError

        BadStatus response ->
            ErrorPage.userError response

        BadPayload _ response ->
            ErrorPage.userError response
