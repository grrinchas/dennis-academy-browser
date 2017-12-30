port module Ports exposing (..)

import Routes exposing (Auth0Token, GraphCoolToken)


port loginGoogle : () -> Cmd msg


port loginFacebook : () -> Cmd msg


port loginGithub : () -> Cmd msg


port saveTokens : Maybe {auth0 : Auth0Token, graphCool: GraphCoolToken} -> Cmd msg

port getTokens : (Maybe {auth0 : Auth0Token, graphCool: GraphCoolToken} -> msg) -> Sub msg

