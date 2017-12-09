port module Persistence exposing (..)

import Model exposing (Token)


port put : Maybe Token -> Cmd msg

