module User.Decoders exposing (..)

import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import User.Model exposing (User)

decodeUser : Decoder.Decoder User
decodeUser =
    Pipeline.decode User
        |>Pipeline.required "_id" Decoder.string
        |>Pipeline.required "username" Decoder.string
        |>Pipeline.required "email" Decoder.string
        |>Pipeline.required "email_verified" Decoder.bool
