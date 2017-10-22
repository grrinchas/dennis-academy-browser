module Update exposing (..)

import Material
import Models exposing (Model)
import Msgs exposing (Msg(OnFetchTopics, OnLocationChange, OnMaterialChange))
import Routing exposing (parseLocation)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )

        OnMaterialChange msg_ ->
            Material.update OnMaterialChange msg_ model
