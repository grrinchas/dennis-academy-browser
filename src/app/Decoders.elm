module Decoders exposing (..)

import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Model exposing (..)
import Slug exposing (Slug)
import Validator exposing (..)



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
            |> Pipeline.required "logo" (Decoder.field "url" Decoder.string)
            |> Pipeline.required "primaryColour" Decoder.string
            |> Pipeline.required "secondaryColour" Decoder.string
        )



decodeSignUp : Decoder.Decoder SignUp
decodeSignUp =
    Pipeline.decode SignUp
        |> Pipeline.required "_id" Decoder.string
        |> Pipeline.required "username" Decoder.string
        |> Pipeline.required "email" Decoder.string
        |> Pipeline.required "email_verified" Decoder.bool


decodeToken : Decoder.Decoder Token
decodeToken =
    Pipeline.decode Token
        |> Pipeline.required "access_token" Decoder.string
        |> Pipeline.required "id_token" Decoder.string
        |> Pipeline.required "token_type" Decoder.string
        |> Pipeline.required "expires_in" Decoder.int


decodeError : Decoder.Decoder ErrorResponse
decodeError =
    Pipeline.decode ErrorResponse
        |> Pipeline.required "name" Decoder.string
        |> Pipeline.required "description" Decoder.string
        |> Pipeline.required "code" (Decoder.map toError Decoder.string)
        |> Pipeline.required "statusCode" Decoder.int


decodeUser : Decoder.Decoder User
decodeUser =
    Pipeline.decode User
        |> Pipeline.required "nickname" Decoder.string
        |> Pipeline.required "email" Decoder.string
        |> Pipeline.required "picture" Decoder.string
        |> Pipeline.required "email_verified" Decoder.bool


toError : String -> Error
toError str =
    if str == "username_exists" then
        UsernameTaken
    else if str == "user_exists" then
        EmailTaken
    else
        CatchAll
