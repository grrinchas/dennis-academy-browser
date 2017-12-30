module Err exposing (..)

import Dict exposing (Dict)
import Http
import Navigation exposing (Location)
import Routes exposing (Route, RouteError)


type Oops
    = Http Http.Error
    | Input InputError
    | Routing RouteError


type InputError
    = Empty
    | WrongSize
    | NotEntered
    | DoNotMatch
    | UsernameTaken
    | EmailTaken
    | CatchAll
    | FailedLogin
