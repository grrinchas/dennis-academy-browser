module Decoders exposing (..)

import Date exposing (Date)
import Dict
import Err exposing (InputError(..))
import Json.Decode as Decoder
import Json.Decode.Pipeline as Pipeline
import Models exposing (..)
import Validator exposing (..)


decodeAuth0Token : Decoder.Decoder Auth0Token
decodeAuth0Token =
    Pipeline.decode Auth0Token
        |> Pipeline.required "access_token" Decoder.string
        |> Pipeline.required "id_token" Decoder.string
        |> Pipeline.required "token_type" Decoder.string
        |> Pipeline.required "expires_in" Decoder.int


decodeGraphCoolToken : Decoder.Decoder AuthGraphCool
decodeGraphCoolToken =
    graphCoolTokenObject
        |> Decoder.field "authenticate"
        |> dataField


graphCoolTokenObject : Decoder.Decoder AuthGraphCool
graphCoolTokenObject =
    Pipeline.decode AuthGraphCool
        |> Pipeline.required "id" (Decoder.string)
        |> Pipeline.required "token" (Decoder.string)


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


decodeUser : Decoder.Decoder User
decodeUser =
    userObject
        |> Decoder.field "User"
        |> dataField


toError : String -> InputError
toError str =
    if str == "username_exists" then
        UsernameTaken
    else if str == "user_exists" then
        EmailTaken
    else
        CatchAll


userObject : Decoder.Decoder User
userObject =
    Pipeline.decode User
        |> Pipeline.required "id" Decoder.string
        |> Pipeline.required "username" Decoder.string
        |> Pipeline.required "email" Decoder.string
        |> Pipeline.required "picture" Decoder.string
        |> Pipeline.required "drafts"
            (Decoder.map Dict.fromList <| Decoder.list <| Decoder.map (\draft -> ( draft.id, draft )) draftObject)


publicDraftObject : Decoder.Decoder PublicDraft
publicDraftObject =
    let
        toDecoder =
            \id created updated content type_ title visibility owner ->
                case ( created, updated, visibility ) of
                    ( Ok c, Ok u, Just v ) ->
                        Decoder.succeed <| PublicDraft (Draft id c u content type_ title v) owner

                    ( Err err, _, _ ) ->
                        Decoder.fail err

                    ( _, Err err, _ ) ->
                        Decoder.fail err

                    ( _, _, Nothing ) ->
                        Decoder.fail "No such visibility"
    in
        Pipeline.decode toDecoder
            |> Pipeline.required "id" Decoder.string
            |> Pipeline.required "createdAt" (Decoder.map Date.fromString Decoder.string)
            |> Pipeline.required "updatedAt" (Decoder.map Date.fromString Decoder.string)
            |> Pipeline.required "content" Decoder.string
            |> Pipeline.required "type" Decoder.string
            |> Pipeline.required "title" Decoder.string
            |> Pipeline.required "visibility" (Decoder.map visibility Decoder.string)
            |> Pipeline.required "owner" draftOwner
            |> Pipeline.resolve


draftOwner : Decoder.Decoder DraftOwner
draftOwner =
    Pipeline.decode DraftOwner
        |> Pipeline.required "username" Decoder.string
        |> Pipeline.required "picture" Decoder.string


draftObject : Decoder.Decoder Draft
draftObject =
    let
        toDecoder =
            \id created updated content type_ title visibility ->
                case ( created, updated, visibility ) of
                    ( Ok c, Ok u, Just v ) ->
                        Decoder.succeed <| Draft id c u content type_ title v

                    ( Err err, _, _ ) ->
                        Decoder.fail err

                    ( _, Err err, _ ) ->
                        Decoder.fail err

                    ( _, _, Nothing ) ->
                        Decoder.fail "No such visibility"
    in
        Pipeline.decode toDecoder
            |> Pipeline.required "id" Decoder.string
            |> Pipeline.required "createdAt" (Decoder.map Date.fromString Decoder.string)
            |> Pipeline.required "updatedAt" (Decoder.map Date.fromString Decoder.string)
            |> Pipeline.required "content" Decoder.string
            |> Pipeline.required "type" Decoder.string
            |> Pipeline.required "title" Decoder.string
            |> Pipeline.required "visibility" (Decoder.map visibility Decoder.string)
            |> Pipeline.resolve


visibility : String -> Maybe Visibility
visibility visibility =
    if visibility == "PRIVATE" then
        Just PRIVATE
    else if visibility == "PUBLIC" then
        Just PUBLIC
    else
        Nothing


dataField : Decoder.Decoder a -> Decoder.Decoder a
dataField decoder =
    Decoder.field "data" decoder


decodeUpdateDraft : Decoder.Decoder Draft
decodeUpdateDraft =
    draftObject
        |> Decoder.field "updateDraft"
        |> dataField


decodeCreateDraft : Decoder.Decoder Draft
decodeCreateDraft =
    draftObject
        |> Decoder.field "createDraft"
        |> dataField


decodeDeleteDraft : Decoder.Decoder String
decodeDeleteDraft =
    Decoder.string
        |> Decoder.field "id"
        |> Decoder.field "deleteDraft"
        |> dataField


decodePublicDrafts : Decoder.Decoder (List PublicDraft)
decodePublicDrafts =
    publicDraftObject
        |> Decoder.list
        |> Decoder.field "allDrafts"
        |> dataField
