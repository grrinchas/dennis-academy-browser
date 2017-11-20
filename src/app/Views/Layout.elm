module Layout exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)
import Responsive exposing (Responsive)


justMain : Responsive -> Html msg -> Html msg
justMain responsive content =
    main_
        [ classList
            [ ( "container", responsive == Responsive.Tablet ) ]
        ]
        [ content ]


justHeader : Html msg -> Html msg
justHeader content =
    header [] [ content ]


headerMain : Responsive -> Html msg -> Html msg -> Html msg
headerMain responsive header main =
    div [ class "dg-layout" ] [ justHeader header, justMain responsive main ]


noContainer : Html msg -> Html msg -> Html msg
noContainer header main =
    div [ class "dg-layout-no-container" ] [ justHeader header, main_ [] [ main ] ]
