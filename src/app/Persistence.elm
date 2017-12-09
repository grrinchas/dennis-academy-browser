port module Persistence exposing (..)

import Model exposing (Token)

port put : Maybe Token -> Cmd msg
port get : (Maybe Token -> msg) -> Sub msg
