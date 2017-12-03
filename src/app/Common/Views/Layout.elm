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


noContainer : View msg -> View msg -> View msg
noContainer header main =
    { mobile = div [] [ headerMobile header, mainMobile main ]
    , tablet = div [] [ headerTablet header, mainNoContainer main ]
    }
