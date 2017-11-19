module Api exposing (..)

import Brand exposing (Brand)
import GraphQl exposing (toHttpRequest, withArgument)
import Messages exposing (Msg)
import Slug exposing (Slug)
import Color exposing (Color)
import GraphQl exposing (Root, Value, field, object, toHttpRequest, withSelectors)
import Json.Decode.Pipeline exposing (custom, decode, hardcoded, optional, required, resolve)
import Messages exposing (Msg)
import Json.Decode as Decode exposing (Decoder, decodeString, fail, nullable, string, succeed)
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
                [ field "id"
                , field "title"
                , field "description"
                , field "questions"
                    |> withSelectors
                        [ field "id"
                        , field "title"
                        , field "answer"
                        , field "nextQuestion" |> withSelectors [ field "title" ]
                        , field "previousQuestion" |> withSelectors [ field "title" ]
                        ]
                , field "icon" |> withSelectors [ field "url" ]
                , field "colour"
                , field "nextTopic" |> withSelectors [ field "title" ]
                , field "previousTopic" |> withSelectors [ field "title" ]
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
            |> required "logo" (Decode.field "url" string)
            |> required "primaryColour" Decode.string
            |> required "secondaryColour" Decode.string
        )


topicDecoder : Decoder Topic
topicDecoder =
    decode finalTopicDecoder
        |> required "id" Decode.string
        |> required "title" Decode.string
        |> required "description" Decode.string
        |> required "questions" (Decode.list questionsDecoder)
        |> required "icon" (Decode.field "url" string)
        |> required "colour" Decode.string
        |> required "nextTopic" (nullable (Decode.field "title" string |> Decode.andThen slugDecoder))
        |> required "previousTopic" (nullable (Decode.field "title" string |> Decode.andThen slugDecoder))
        |> resolve


questionsDecoder : Decoder Question
questionsDecoder =
    decode finalQuestionDecoder
        |> required "id" Decode.string
        |> required "title" Decode.string
        |> required "answer" Decode.string
        |> required "nextQuestion" (nullable (Decode.field "title" string |> Decode.andThen slugDecoder))
        |> required "previousQuestion" (nullable (Decode.field "title" string |> Decode.andThen slugDecoder))
        |> resolve


slugDecoder : String -> Decoder Slug
slugDecoder title =
    case Slug.generate title of
        Just slug ->
            succeed slug

        Nothing ->
            fail "Can't slugify title"


finalQuestionDecoder : String -> String -> String -> Maybe Slug -> Maybe Slug -> Decoder Question
finalQuestionDecoder id title answer next prev =
    case Slug.generate title of
        Just slug ->
            succeed <| Question id title slug answer next prev

        Nothing ->
            fail "Can't slugify question title"


finalTopicDecoder : String -> String -> String -> List Question -> String -> String -> Maybe Slug -> Maybe Slug -> Decoder Topic
finalTopicDecoder id title desc questions icon colour next prev =
    case Slug.generate title of
        Just slug ->
            succeed <| Topic id title slug desc questions icon colour next prev

        Nothing ->
            fail "Can't slugify title"
