module Api exposing (..)

import Brand exposing (Brand)
import GraphQl exposing (toHttpRequest, withArgument)
import Messages exposing (Msg)
import Slug
import Topic
import Color exposing (Color)
import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (custom, decode, hardcoded, required, resolve)
import Messages exposing (Msg)
import Json.Decode as Decode exposing (Decoder, fail, succeed)
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


fetchBrand : Cmd Msg
fetchBrand =
    toHttpRequest (GraphQl.query cmsUrl brandQuery brandDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchBrand


topicQuery : Value Root
topicQuery =
    object
        [ field "allTopics"
            |> withSelectors
                [ field "title"
                , field "description"
                , field "content"
                , field
                    "icon"
                    |> withSelectors
                        [ field "url" ]
                , field "colour"
                ]
        ]


brandQuery : Value Root
brandQuery =
    object
        [ field "Brand"
            |> withArgument "name" (GraphQl.string "dgacademy")
            |> withSelectors
                [ field "primaryColour"
                , field "secondaryColour"
                , field
                    "logo"
                    |> withSelectors
                        [ field "url" ]
                ]
        ]


topicsDecoder : Decoder (List Topic)
topicsDecoder =
    Decode.field "allTopics" (Decode.list topicDecoder)


brandDecoder : Decoder Brand
brandDecoder =
    Decode.field "Brand"
        (decode Brand
            |> required "logo" iconDecoder
            |> required "primaryColour" Decode.string
            |> required "secondaryColour" Decode.string
        )


topicDecoder : Decoder Topic
topicDecoder =
    decode finalDecoder
        |> required "title" Decode.string
        |> required "description" Decode.string
        |> required "content" Decode.string
        |> required "icon" iconDecoder
        |> required "colour" Decode.string
        |> resolve


finalDecoder : String -> String -> String -> Icon -> String -> Decoder Topic
finalDecoder title desc content icon colour =
    case Slug.generate title of
        Just slug ->
            succeed <| Topic title slug desc content icon colour

        Nothing ->
            fail "Can't slugify title"


iconDecoder : Decoder Icon
iconDecoder =
    decode Icon
        |> required "url" Decode.string
