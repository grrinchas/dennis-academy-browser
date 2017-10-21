module TopicPage exposing (..)

import Html exposing (Html, text)
import Models exposing (Model)
import Msgs exposing (Msg)
import NotFoundPage exposing (notFoundPage)
import RemoteData
import TopicModel exposing (TopicId)


topicPage : Model -> TopicId -> Html Msg
topicPage model topicId =
    case model.topics of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            text "Loading ..."

        RemoteData.Success topics ->
            let
                maybeTopic =
                    topics
                        |> List.filter (\topic -> topic.id == topicId)
                        |> List.head
            in
                case maybeTopic of
                    Just topic ->
                        text (topic.content)

                    Nothing ->
                        notFoundPage

        RemoteData.Failure err ->
            text (toString err)
