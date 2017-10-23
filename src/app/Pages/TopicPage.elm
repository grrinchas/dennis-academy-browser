module TopicPage exposing (..)

import Html exposing (Html, text)
import Models exposing (Model)
import Msgs exposing (Msg)
import NotFoundPage exposing (notFoundPage)
import RemoteData
import TopicModel exposing (TopicId)
import Markdown exposing (Options)
import Material.Options as Options
import Material.Spinner as Loading


topicPage : Model -> TopicId -> Html Msg
topicPage model topicId =
    case model.topics of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            Options.div [ Options.center, Options.css "height" "100vh" ]
                [ Loading.spinner
                    [ Loading.active True ]
                ]

        RemoteData.Success topics ->
            let
                maybeTopic =
                    topics
                        |> List.filter (\topic -> topic.id == topicId)
                        |> List.head
            in
                case maybeTopic of
                    Just topic ->
                        Markdown.toHtml [] topic.content

                    Nothing ->
                        notFoundPage

        RemoteData.Failure err ->
            text (toString err)
