module Validator exposing (..)

import Err exposing (InputError(..))
import Regex exposing (Regex)
import Models exposing (..)




password : Maybe String -> Result InputError Valid
password maybe =
    case maybe of
        Nothing ->
            Err NotEntered

        Just pass ->
            if String.isEmpty pass then
                Err Empty
            else if String.length pass < 6 then
                Err WrongSize
            else if not <| Regex.contains (Regex.regex "\\d") pass then
                Err DoNotMatch
            else
                Ok (Valid pass)


username : Maybe String -> Result InputError Valid
username maybe =
    case maybe of
        Nothing ->
            Err NotEntered

        Just name ->
            if String.isEmpty name then
                Err Empty
            else if Regex.contains (Regex.regex "\\W") name then
                Err DoNotMatch
            else if String.length name > 30 then
                Err WrongSize
            else
                Ok (Valid name)


email : Maybe String -> Result InputError Valid
email maybe =
    case maybe of
        Nothing ->
            Err NotEntered

        Just email ->
            if String.isEmpty email then
                Err Empty
            else if not <| Regex.contains emailRegex email then
                Err DoNotMatch
            else
                Ok (Valid email)


emailRegex : Regex
emailRegex =
    Regex.regex "^\\S+@\\S+\\.\\S+$"
        |> Regex.caseInsensitive


toString : Valid -> String
toString (Valid valid) =
    valid


isValid : Result InputError Valid -> Bool
isValid str =
    Result.toMaybe str |> (/=) Nothing


validSignUpInputs : Form -> Bool
validSignUpInputs form =
    [ username form.username, email form.email, password form.password, password form.repeatPass ]
        |> List.map isValid
        |> List.append [ form.repeatPass == form.password ]
        |> List.all ((==) True)


validLoginUser : Form -> Maybe ValidUser
validLoginUser form =
    Result.map3 ValidUser (username <| Just "dummy") (email form.email) (password form.password)
        |> Result.toMaybe


validLoginInputs : Form -> Bool
validLoginInputs form =
    [ email form.email, password form.password ]
        |> List.map isValid
        |> List.all ((==) True)


validSignUpUser : Form -> Maybe ValidUser
validSignUpUser form =
    if form.repeatPass == form.password then
        Result.map3 ValidUser (username form.username) (email form.email) (password form.password)
            |> Result.toMaybe
    else
        Nothing
