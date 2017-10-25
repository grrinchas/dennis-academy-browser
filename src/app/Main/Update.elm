module Update exposing (..)

import Material
import Model exposing (Model)
import Messages exposing (Msg(OnFetchTopics, OnLocationChange, OnMaterialChange, UpdateRoute))
import Navigation exposing (newUrl)
import Routing exposing (parseLocation, toPath)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        -- Update model with new topics fetched from cms
        OnFetchTopics response ->
            ( { model | topics = response }, Cmd.none )

        -- Update browsers location
        UpdateRoute route ->
            ( model, newUrl <| toPath route )

        -- Update model's current route with new one
        OnLocationChange location ->
            ( { model | route = parseLocation location }, Cmd.none )

        -- Material design boilerplate
        OnMaterialChange msg_ ->
            Material.update OnMaterialChange msg_ model
