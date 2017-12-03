module Common.Views.Pages exposing (..)

import Common.Model exposing (Brand, Responsive(Mobile, Tablet), View)
import Common.Views.Loader as Loader
import Common.Views.NavBar as NavBar
import Common.Views.Layout as Layout
import Common.Views.NotFoundPage as NotFoundPage
import Common.Views.LandingPage as LandingPage
import User.Views.Registration as Registration
import Question.Model exposing (Question)
import Topic.Views.Topics as Topics
import Topic.Views.Topic as Topic
import Question.Views.Question as Question
import Html exposing (..)
import Messages exposing (..)
import RemoteData exposing (WebData)
import Slug exposing (Slug)
import Topic.Model exposing (Topic)
import User.Model exposing (User)


emptyPage : View msg
emptyPage =
    { mobile = div [] []
    , tablet = div [] []
    }


landing : WebData Brand -> View Msg
landing brand =
    map NavBar.view brand


map : (a -> View m) -> WebData a -> View m
map view response =
    case response of
        RemoteData.NotAsked ->
            { mobile = text "", tablet = text "" }

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success data ->
            view data

        RemoteData.Failure error ->
            { mobile = text (toString error), tablet = text (toString error) }


map2 : (a -> b -> View m) -> WebData a -> WebData b -> View m
map2 f a b =
    case a of
        RemoteData.NotAsked ->
            { mobile = text "", tablet = text "" }

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success data ->
            map (f data) b

        RemoteData.Failure error ->
            { mobile = text (toString error), tablet = text (toString error) }


topicsPage : Brand -> List Topic -> View Msg
topicsPage b t =
    Layout.headerMain (NavBar.view b) (Topics.view t)


topics : WebData Brand -> WebData (List Topic) -> View Msg
topics brand topics =
    map2 topicsPage brand topics


questionPage : Slug -> Slug -> Brand -> List Topic -> View Msg
questionPage questionId topicId brand topics =
    let
        topic =
            List.head topics
    in
        Maybe.andThen (findQuestion questionId) topic
            |> mapNotFound2 Question.view topic
            |> Layout.noContainer (NavBar.view brand)


findQuestion : Slug -> Topic -> Maybe Question
findQuestion id topic =
    List.head << List.filter (\question -> question.slugTitle == id) <| topic.questions


mapNotFound : (a -> View Msg) -> Maybe a -> View Msg
mapNotFound view maybe =
    case maybe of
        Just a ->
            view a

        Nothing ->
            NotFoundPage.view


mapNotFound2 : (a -> b -> View Msg) -> Maybe a -> Maybe b -> View Msg
mapNotFound2 view ma mb =
    case ma of
        Just a ->
            mapNotFound (view a) mb

        Nothing ->
            NotFoundPage.view


topic : Topic -> WebData Brand -> View Msg
topic topic brand =
    Topic.view topic


question : Slug -> Slug -> WebData Brand -> WebData (List Topic) -> View Msg
question questionId topicId brand topics =
    map2 (questionPage questionId topicId) brand topics


signUp : WebData User -> View Msg
signUp user =
    case user of
        RemoteData.NotAsked ->
            Registration.signUpView

        RemoteData.Loading ->
            { mobile = Loader.loading, tablet = Loader.loading }

        RemoteData.Success user ->
            Registration.userView user

        RemoteData.Failure error ->
            { mobile = text (toString error), tablet = text (toString error) }


login : View Msg
login =
    Registration.loginView
