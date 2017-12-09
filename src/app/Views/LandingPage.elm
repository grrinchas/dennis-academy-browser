module Views.LandingPage exposing (..)

import Html exposing (..)
import Model exposing (Brand, View)


landingPage : Brand -> View msg
landingPage brand =
    { mobile = text "landing page"
    , tablet = text "landing page"
    }
