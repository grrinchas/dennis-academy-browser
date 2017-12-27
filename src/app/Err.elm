module Err exposing (..)

import Dict exposing (Dict)
import Http
import Navigation exposing (Location)


type Oops
    = Http Http.Error
    | Input InputError
    | NotFound

type InputError
    = Empty
    | WrongSize
    | NotEntered
    | DoNotMatch
    | UsernameTaken
    | EmailTaken
    | CatchAll
    | FailedLogin
