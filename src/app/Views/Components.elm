module Components exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


icon : String -> Html msg
icon str =
    i [ class "material-icons prefix" ] [ text str ]


empty : Html msg
empty =
    div [] []


withLoader : Html msg -> Html msg
withLoader view =
    div [ class "loader" ] [ view, loader ]


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


loader : Html msg
loader =
    div [ class "dg-loading-wrapper" ]
        [ div [ class "dg-loader" ]
            [ div [ class "preloader-wrapper active" ] <|
                List.map
                    loaderPart
                    [ "blue", "red", "yellow", "green" ]
            ]
        ]
