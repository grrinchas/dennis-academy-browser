module Common.Decoders exposing (..)
import Common.Model exposing (Brand)
import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Slug exposing (Slug)
import User.Model exposing (User)


decodeSlug : String -> Decoder.Decoder Slug
decodeSlug title =
    case Slug.generate title of
        Just slug ->
            Decoder.succeed slug

        Nothing ->
            Decoder.fail "Can't slugify title"


decodeBrand : Decoder.Decoder Brand
decodeBrand =
    Decoder.field "Brand"
        (Pipeline.decode Brand
            |>Pipeline.required "logo" (Decoder.field "url" Decoder.string)
            |>Pipeline.required "primaryColour" Decoder.string
            |>Pipeline.required "secondaryColour" Decoder.string
        )
