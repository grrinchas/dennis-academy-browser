module User.Model exposing (Valid, SignUpForm, User, ErrorResponse, ValidUser, Error(..), repeatPassword, username, password, email, toString)

import Common.Model exposing (..)
import Regex exposing (Regex)


type Valid
    = Valid String


type alias ErrorResponse =
    { name : String
    , descriptor : String
    , code : Error
    , statusCode : Int
    }


type alias ValidUser =
    { username : Valid
    , email : Valid
    , password : Valid
    }


type alias SignUpForm =
    { username : String
    , password : String
    , repeat : String
    , email : String
    }


type alias User =
    { id : Id
    , username : String
    , email : String
    , email_verified : Bool
    }


type Error
    = Empty
    | WrongSize
    | DoNotMatch
    | UsernameTaken
    | EmailTaken
    | CatchAll


repeatPassword : String -> String -> Result Error Valid
repeatPassword pass repeat =
    if String.isEmpty repeat then
        Err Empty
    else if (pass /= repeat) then
        Err DoNotMatch
    else
        Ok (Valid repeat)


password : String -> Result Error Valid
password pass =
    if String.isEmpty pass then
        Err Empty
    else if String.length pass < 6 then
        Err WrongSize
    else if not <| Regex.contains (Regex.regex "\\d") pass then
        Err DoNotMatch
    else
        Ok (Valid pass)


username : String -> Result Error Valid
username name =
    if String.isEmpty name then
        Err Empty
    else if not <| Regex.contains (Regex.regex "^\\w*$") name then
        Err DoNotMatch
    else if String.length name > 30 then
        Err WrongSize
    else
        Ok (Valid name)


email : String -> Result Error Valid
email email =
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
