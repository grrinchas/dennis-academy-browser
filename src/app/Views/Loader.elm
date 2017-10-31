module Loader exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


loaderPart : String -> Html msg
loaderPart color =
    div [ class ("spinner-layer spinner-" ++ color) ]
        [ div [ class "circle-clipper left" ]
            [ div [ class "circle" ] []
            ]
        , div [ class "gap-patch" ]
            [ div [ class "circle" ] []
            ]
        , div [ class "circle-clipper right" ]
            [ div [ class "circle" ] []
            ]
        ]


loading : Html msg
loading =
    div [ class "dg-loading" ]
        [ div [ class "preloader-wrapper active" ] <|
            List.map
                loaderPart
                [ "blue", "red", "yellow", "green" ]
        ]
