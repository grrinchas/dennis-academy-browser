module Decoders exposing (..)

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
        |> authenticateField
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
        |> userField
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


draftObject : Decoder.Decoder Draft
draftObject =
    Pipeline.decode Draft
        |> Pipeline.required "id" Decoder.string
        |> Pipeline.required "content" Decoder.string
        |> Pipeline.required "type" Decoder.string


dataField : Decoder.Decoder a -> Decoder.Decoder a
dataField decoder =
    Decoder.field "data" decoder


updateDraftField : Decoder.Decoder a -> Decoder.Decoder a
updateDraftField decoder =
    Decoder.field "updateDraft" decoder


userField : Decoder.Decoder a -> Decoder.Decoder a
userField decoder =
    Decoder.field "User" decoder


authenticateField : Decoder.Decoder a -> Decoder.Decoder a
authenticateField decoder =
    Decoder.field "authenticate" decoder


decodeUpdateDraft : Decoder.Decoder Draft
decodeUpdateDraft =
    draftObject
        |> updateDraftField
        |> dataField
