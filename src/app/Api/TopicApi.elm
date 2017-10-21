module TopicApi exposing (..)

import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (decode, required)
import Msgs exposing (Msg)
import Json.Decode as Decode
import RemoteData
import TopicModel exposing (Topic)


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query "https://api.graphcms.com/simple/v1/dgacademy" query playersDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map Msgs.OnFetchTopics


query : Value Root
query =
    object
        [ field "allTopics"
            |> withSelectors
                [ field "id"
                , field "title"
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
        |> required "content" Decode.string
