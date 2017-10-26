module Main exposing (..)

import Navigation exposing (Location)
import Model exposing (Model, init, initialModel, page, update)
import Messages exposing (Msg)


main : Program Never Model Msg
main =
    Navigation.program Messages.OnLocationChange
        { init = init
        , view = page
        , update = update
        , subscriptions = (\model -> Sub.none)
        }
