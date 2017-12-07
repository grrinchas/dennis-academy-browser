module User.Validator exposing (ErrorResponse, Valid, ValidUser, Error(..), username, password, email, toString, isValid, validLoginInputs, validLoginUser, validSignUpInputs, validSignUpUser)

import Regex exposing (Regex)
import User.Model exposing (UserForm)


type Valid
    = Valid String


type alias ValidUser =
    { username : Valid
    , email : Valid
    , password : Valid
    }


type alias ErrorResponse =
    { name : String
    , descriptor : String
    , code : Error
    , statusCode : Int
    }


type Error
    = Empty
    | WrongSize
    | NotEntered
    | DoNotMatch
    | UsernameTaken
    | EmailTaken
    | CatchAll
    | FailedLogin


validLoginUser : UserForm -> Maybe ValidUser
validLoginUser form =
    Result.map3 ValidUser (username <| Just "dummy") (email form.email) (password form.password)
        |> Result.toMaybe


validLoginInputs : UserForm -> Bool
validLoginInputs form =
    [ email form.email, password form.password ]
        |> List.map isValid
        |> List.all ((==) True)


validSignUpUser : UserForm -> Maybe ValidUser
validSignUpUser form =
    if form.repeat == form.password then
        Result.map3 ValidUser (username form.username) (email form.email) (password form.password)
            |> Result.toMaybe
    else
        Nothing


validSignUpInputs : UserForm -> Bool
validSignUpInputs form =
    [ username form.username, email form.email, password form.password, password form.repeat ]
        |> List.map isValid
        |> List.all ((==) True)


password : Maybe String -> Result Error Valid
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


username : Maybe String -> Result Error Valid
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


email : Maybe String -> Result Error Valid
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
toString (Valid s) =
    s


isValid : Result Error Valid -> Bool
isValid str =
    Result.toMaybe str |> (/=) Nothing



-- TODO: Allow registration with email
