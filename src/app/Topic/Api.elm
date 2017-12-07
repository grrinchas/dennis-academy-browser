module Topic.Api exposing (..)

import Common.Api
import GraphQl exposing (..)
import Messages exposing (Msg)
import RemoteData
import Topic.Decoders


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query Common.Api.cmsUrl topicQuery Topic.Decoders.decodeTopics)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchTopics


topicQuery : GraphQl.Value Root
topicQuery =
    GraphQl.object
        [ GraphQl.field "allTopics"
            |> withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "title"
                , GraphQl.field "description"
                , GraphQl.field "questions"
                    |> withSelectors
                        [ GraphQl.field "id"
                        , GraphQl.field "title"
                        , GraphQl.field "answer"
                        , GraphQl.field "nextQuestion" |> withSelectors [ GraphQl.field "title" ]
                        , GraphQl.field "previousQuestion" |> withSelectors [ GraphQl.field "title" ]
                        ]
                , GraphQl.field "icon" |> withSelectors [ GraphQl.field "url" ]
                , GraphQl.field "colour"
                , GraphQl.field "nextTopic" |> withSelectors [ GraphQl.field "title" ]
                , GraphQl.field "previousTopic" |> withSelectors [ GraphQl.field "title" ]
                ]
        ]
