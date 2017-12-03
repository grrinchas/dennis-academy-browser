module Common.Views.LandingPage exposing (..)

import Common.Model exposing (Brand, View)
import Html exposing (..)


landingPage : Brand -> View msg
landingPage brand =
    { mobile = text "landing page"
    , tablet = text "landing page"
    }
