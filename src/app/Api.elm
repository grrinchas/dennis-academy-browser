module Api exposing (..)

import GraphQl exposing (toHttpRequest)
import Messages exposing (Msg)
import Topic
import Color exposing (Color)
import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (custom, decode, hardcoded, required, resolve)
import Messages exposing (Msg)
import Json.Decode as Decode exposing (Decoder)
import RemoteData
import Routes exposing (Route(TopicRoute))
import Topic exposing (..)


cmsUrl : String
cmsUrl =
    "https://api.graphcms.com/simple/v1/dgacademy"


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query cmsUrl topicQuery topicsDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchTopics


topicQuery : Value Root
topicQuery =
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
