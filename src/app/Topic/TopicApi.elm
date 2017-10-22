module TopicApi exposing (..)

import Api exposing (cmsUrl)
import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (decode, required)
import Msgs exposing (Msg)
import Json.Decode as Decode
import RemoteData
import TopicModel exposing (Topic)


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query cmsUrl query playersDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map Msgs.OnFetchTopics


query : Value Root
query =
    object
        [ field "allTopics"
            |> withSelectors
                [ field "id"
                , field "title"
                , field "description"
                , field "content"
                ]
        ]


playersDecoder : Decode.Decoder (List Topic)
playersDecoder =
    Decode.field "allTopics" (Decode.list playerDecoder)


playerDecoder : Decode.Decoder Topic
playerDecoder =
    decode Topic
        |> required "id" Decode.string
        |> required "title" Decode.string
        |> required "description" Decode.string
        |> required "content" Decode.string
