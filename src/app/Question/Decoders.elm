module Question.Decoders exposing (..)

import Common.Decoders exposing (decodeSlug)
import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Question.Model exposing (Question)
import Slug exposing (Slug)


decodeQuestion : Decoder.Decoder Question
decodeQuestion =
    Pipeline.decode finalQuestionDecoder
        |>Pipeline.required "id" Decoder.string
        |>Pipeline.required "title" Decoder.string
        |>Pipeline.required "answer" Decoder.string
        |>Pipeline.required "nextQuestion" (Decoder.nullable (Decoder.field "title" Decoder.string |> Decoder.andThen decodeSlug))
        |>Pipeline.required "previousQuestion" (Decoder.nullable (Decoder.field "title" Decoder.string |> Decoder.andThen decodeSlug))
        |>Pipeline.resolve


finalQuestionDecoder : String -> String -> String -> Maybe Slug -> Maybe Slug -> Decoder.Decoder Question
finalQuestionDecoder id title answer next prev =
    case Slug.generate title of
        Just slug ->
            Decoder.succeed <| Question id title slug answer next prev

        Nothing ->
            Decoder.fail "Can't slugify question title"
