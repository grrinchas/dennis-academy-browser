module User.Decoders exposing (..)

import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import User.Model exposing (Error(CatchAll, EmailTaken, UsernameTaken), ErrorResponse, User)


decodeUser : Decoder.Decoder User
decodeUser =
    Pipeline.decode User
        |> Pipeline.required "_id" Decoder.string
        |> Pipeline.required "username" Decoder.string
        |> Pipeline.required "email" Decoder.string
        |> Pipeline.required "email_verified" Decoder.bool


decodeError : Decoder.Decoder ErrorResponse
decodeError =
    Pipeline.decode ErrorResponse
        |> Pipeline.required "name" Decoder.string
        |> Pipeline.required "description" Decoder.string
        |> Pipeline.required "code" (Decoder.map toError Decoder.string)
        |> Pipeline.required "statusCode" Decoder.int


toError : String -> Error
toError str =
    if str == "username_exists" then
        UsernameTaken
    else if str == "user_exists" then
        EmailTaken
    else
        CatchAll
