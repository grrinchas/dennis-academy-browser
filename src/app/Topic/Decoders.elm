module Topic.Decoders exposing (..)

import Common.Decoders exposing (decodeSlug)
import Common.Model exposing (..)
import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Question.Decoders exposing (decodeQuestion)
import Question.Model exposing (Question)
import Slug exposing (Slug)
import Topic.Model exposing (Topic)

decodeTopics : Decoder.Decoder (List Topic)
decodeTopics =
    Decoder.field "allTopics" (Decoder.list decodeTopic)


decodeTopic : Decoder.Decoder Topic
decodeTopic =
    Pipeline.decode finalTopicDecoder
        |> Pipeline.required "id" Decoder.string
        |> Pipeline.required "title" Decoder.string
        |> Pipeline.required "description" Decoder.string
        |> Pipeline.required "questions" (Decoder.list decodeQuestion)
        |> Pipeline.required "icon" (Decoder.field "url" Decoder.string)
        |> Pipeline.required "colour" Decoder.string
        |> Pipeline.required "nextTopic" (Decoder.nullable (Decoder.field "title" Decoder.string |> Decoder.andThen decodeSlug))
        |> Pipeline.required "previousTopic" (Decoder.nullable (Decoder.field "title" Decoder.string |> Decoder.andThen decodeSlug))
        |> Pipeline.resolve



finalTopicDecoder : Id -> Title -> Description -> List Question -> Icon -> Colour -> Maybe Slug -> Maybe Slug -> Decoder.Decoder Topic
finalTopicDecoder id title desc questions icon colour next prev =
    case Slug.generate title of
        Just slug ->
            Decoder.succeed <| Topic id title slug desc questions icon colour next prev

        Nothing ->
            Decoder.fail "Can't slugify title"
