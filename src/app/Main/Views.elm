module Views exposing (..)

import HomePage exposing (homePage)
import Html exposing (Html, div, text)
import Models exposing (Model)
import Msgs exposing (Msg)
import NotFoundPage exposing (notFoundPage)
import RoutesModel exposing (Route(NotFoundRoute, TopicRoute, TopicsRoute))
import TopicPage exposing (topicPage)
import TopicView exposing (maybeTopicTable)


page : Model -> Html Msg
page model =
    case model.route of
        TopicsRoute ->
            homePage model

        TopicRoute id ->
            topicPage model id

        NotFoundRoute ->
            notFoundPage
