module Common.Views.NotFoundPage exposing (..)

import Common.Model exposing (View)
import Html exposing (..)


view : View msg
view =
    { mobile = div [] [ text "Page is not found" ], tablet = div [] [ text "Page is not found" ] }
