module Common.Views.Pages exposing (..)

import Common.Model exposing (Brand, Responsive(Mobile, Tablet), View)
import Common.Views.Loader as Loader
import Common.Views.NavBar as NavBar
import Common.Views.Layout as Layout
import Common.Views.ErrorPage as ErrorPage
import Http exposing (Error(BadPayload, BadStatus, BadUrl, NetworkError, Timeout), Response)
import User.Views.Registration as Registration
import Question.Model exposing (Question)
import Topic.Views.Topics as Topics
import Topic.Views.Topic as Topic
import Question.Views.Question as Question
import Html exposing (..)
import Messages exposing (..)
import RemoteData exposing (WebData)
import Topic.Model exposing (Topic)
import User.Model exposing (SignUpForm, User)
import User.Views.SignUp as UserView


emptyPage : View msg
emptyPage =
    { mobile = div [] []
    , tablet = div [] []
    }


landing : Brand -> View Msg
landing brand =
    NavBar.view brand


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


signUp : WebData User -> SignUpForm -> View Msg
signUp user form =
    case user of
        RemoteData.NotAsked ->
            UserView.signUpView form Nothing

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success user ->
            Registration.userView user

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    UserView.errorView response form

                _ ->
                    error err


login : View Msg
login =
    Registration.loginView


notFound : View Msg
notFound =
    ErrorPage.notFound


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
