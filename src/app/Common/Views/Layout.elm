module Common.Views.Layout exposing (..)

import Common.Model exposing (Responsive(Tablet), View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)


mainMobile : View msg -> Html msg
mainMobile content =
    main_ [] [ content.mobile ]


mainTablet : View msg -> Html msg
mainTablet content =
    main_ [ class "container" ] [ content.tablet ]


mainNoContainer : View msg -> Html msg
mainNoContainer content =
    main_ [] [ content.tablet ]


headerMobile : View msg -> Html msg
headerMobile content =
    header [] [ content.mobile ]


headerTablet : View msg -> Html msg
headerTablet content =
    header [] [ content.tablet ]


headerMain : View msg -> View msg -> View msg
headerMain header main =
    { mobile = div [] [ headerMobile header, mainMobile main ]
    , tablet = div [] [ headerTablet header, mainTablet main ]
    }


onlyMain : View msg -> View msg
onlyMain main =
    { mobile = div [] [ mainMobile main ]
    , tablet = div [] [ mainNoContainer main ]
    }


noContainer : View msg -> View msg -> View msg
noContainer header main =
    { mobile = div [] [ headerMobile header, mainMobile main ]
    , tablet = div [] [ headerTablet header, mainNoContainer main ]
    }


withLoader : View msg -> View msg
withLoader content =
    { mobile = div [] [ content.mobile, loading ], tablet = div [] [ content.tablet, loading ] }


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
    div [ class "dg-loading-wrapper" ]
        [ div [ class "dg-loader" ]
            [ div [ class "preloader-wrapper active" ] <|
                List.map
                    loaderPart
                    [ "blue", "red", "yellow", "green" ]
            ]
        ]
