module Main exposing (..)

import Navigation exposing (Location)
import Routing exposing (parseLocation)
import TopicApi exposing (fetchAllTopics)
import Models exposing (Model, initialModel)
import Msgs exposing (Msg(OnMaterialChange))
import Subscriptions exposing (subscriptions)
import Update exposing (update)
import Views exposing (page)


init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            parseLocation location
    in
        ( initialModel currentRoute, fetchAllTopics )


main : Program Never Model Msg
main =
    Navigation.program Msgs.OnLocationChange
        { init = init
        , view = page
        , update = update
        , subscriptions = subscriptions
        }
