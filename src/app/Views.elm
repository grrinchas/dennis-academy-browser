module Views exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)


notFoundPage : Html Msg
notFoundPage =
    div []
        [ text "Page is not found" ]


landingPage : Html Msg
landingPage =
    text "landing page"

