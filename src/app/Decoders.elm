module Decoders exposing (..)

import Err exposing (InputError(..))
import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Models exposing (..)
import Routes exposing (Token)
import Validator exposing (..)


decodeToken : Decoder.Decoder Token
decodeToken =
    Pipeline.decode Token
        |> Pipeline.required "access_token" Decoder.string
        |> Pipeline.required "id_token" Decoder.string
        |> Pipeline.required "token_type" Decoder.string
        |> Pipeline.required "expires_in" Decoder.int


decodeSignUpError : Decoder.Decoder ErrorResponse
decodeSignUpError =
    Pipeline.decode ErrorResponse
        |> Pipeline.required "name" Decoder.string
        |> Pipeline.required "description" Decoder.string
        |> Pipeline.required "code" (Decoder.map toError Decoder.string)
        |> Pipeline.required "statusCode" Decoder.int


decodeAccount : Decoder.Decoder Account
decodeAccount =
    Pipeline.decode Account
        |> Pipeline.required "_id" Decoder.string
        |> Pipeline.required "email" Decoder.string
        |> Pipeline.required "email_verified" Decoder.bool


toError : String -> InputError
toError str =
    if str == "username_exists" then
        UsernameTaken
    else if str == "user_exists" then
        EmailTaken
    else
        CatchAll
