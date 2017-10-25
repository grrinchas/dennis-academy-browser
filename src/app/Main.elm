module Main exposing (..)

import Navigation exposing (Location)
import Model exposing (Model, init, initialModel)
import Messages exposing (Msg(OnMaterialChange))
import Subscriptions exposing (subscriptions)
import Update exposing (update)
import Views exposing (page)


main : Program Never Model Msg
main =
    Navigation.program Messages.OnLocationChange
        { init = init
        , view = page
        , update = update
        , subscriptions = subscriptions
        }
