module Views exposing (..)

import Html exposing (Html, div, text)
import Model exposing (mapSuccess)
import Model exposing (Model)
import Messages exposing (Msg)
import NotFoundPage exposing (notFoundPage)
import RoutesModel exposing (Route(NotFoundRoute, TopicRoute, TopicsRoute))
import TopicModel exposing (Topic, TopicId)
import TopicPage exposing (topicPage)
import TopicView exposing (topicList)


page : Model -> Html Msg
page model =
    case model.route of
        TopicsRoute ->
            mapSuccess topicList model.topics

        TopicRoute id ->
            mapSuccess (mapTopic id) model.topics

        NotFoundRoute ->
            notFoundPage


mapTopic : TopicId -> List Topic -> Html Msg
mapTopic id topics =
    case List.head << List.filter (\topic -> topic.id == id) <| topics of
        Just topic ->
            topicPage topic

        Nothing ->
            notFoundPage
