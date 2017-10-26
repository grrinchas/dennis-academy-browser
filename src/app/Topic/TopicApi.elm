module TopicApi exposing (..)

import Api exposing (cmsUrl)
import Color exposing (Color)
import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (custom, decode, hardcoded, required, resolve)
import Messages exposing (Msg)
import Json.Decode as Decode exposing (Decoder)
import RemoteData
import TopicModel exposing (Icon, Topic)


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query cmsUrl query topicsDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchTopics


query : Value Root
query =
    object
        [ field "allTopics"
            |> withSelectors
                [ field "id"
                , field "title"
                , field "description"
                , field "content"
                , field
                    "icon"
                    |> withSelectors
                        [ field "url" ]
                , field "colour"
                ]
        ]


topicsDecoder : Decoder (List Topic)
topicsDecoder =
    Decode.field "allTopics" (Decode.list topicDecoder)


topicDecoder : Decoder Topic
topicDecoder =
    decode Topic
        |> required "id" Decode.string
        |> required "title" Decode.string
        |> required "description" Decode.string
        |> required "content" Decode.string
        |> required "icon" iconDecoder
        |> required "colour" Decode.string


iconDecoder : Decoder Icon
iconDecoder =
    decode Icon
        |> required "url" Decode.string
