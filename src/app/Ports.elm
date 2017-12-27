port module Ports exposing (..)

import Routes exposing (Token)


port loginGoogle : () -> Cmd msg


port loginFacebook : () -> Cmd msg


port loginGithub : () -> Cmd msg


port saveToken : Maybe Token -> Cmd msg


port getToken : (Maybe Token -> msg) -> Sub msg
