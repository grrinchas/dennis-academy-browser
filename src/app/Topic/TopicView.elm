module TopicView exposing (maybeTopicTable)

import Html exposing (Html, div, table, tbody, td, text, th, thead, tr)
import TopicModel exposing (Topic)
import Msgs exposing (Msg)
import RemoteData exposing (WebData)


topicTable : List Topic -> Html Msg
topicTable topics =
    div []
        [ table []
            [ thead []
                [ tr []
                    [ th [] [ text "Id" ]
                    , th [] [ text "Title" ]
                    ]
                ]
            , tbody [] (List.map topicRow topics)
            ]
        ]


topicRow : Topic -> Html Msg
topicRow topic =
    tr []
        [ td [] [ text topic.id ]
        , td [] [ text topic.title ]
        , td []
            []
        ]


maybeTopicTable : WebData (List Topic) -> Html Msg
maybeTopicTable response =
    case response of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            text "Loading..."

        RemoteData.Success topics ->
            topicTable topics

        RemoteData.Failure error ->
            text (toString error)
