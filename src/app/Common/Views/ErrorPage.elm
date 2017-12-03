module Common.Views.ErrorPage exposing (..)

import Common.Model exposing (..)
import Html exposing (..)


view404 : View msg
view404 =
    { mobile = div [] [ text " 404 Page is not found" ], tablet = div [] [ text "Page is not found" ] }
