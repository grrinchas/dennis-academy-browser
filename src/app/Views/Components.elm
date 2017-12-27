module Components exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


icon : String -> Html msg
icon str =
    i [ class "material-icons prefix" ] [ text str ]
