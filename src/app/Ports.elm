port module Ports exposing (..)

import Models exposing (Tokens)


port saveTokens : Maybe Tokens -> Cmd msg


port getTokens : (Maybe Tokens -> msg) -> Sub msg
