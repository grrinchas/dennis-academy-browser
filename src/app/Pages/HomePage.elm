module HomePage exposing (..)

import Color exposing (grey)
import Html exposing (Html, div, h1, h2, h4, p, text)
import Html.Attributes exposing (class, style)
import Material.Color exposing (Hue(Grey), Shade(A700, S50, S900), background, color)
import Material.Grid exposing (Device(All, Desktop, Phone, Tablet), cell, grid, noSpacing, offset, size)
import Models exposing (Model)
import Msgs exposing (Msg(OnMaterialChange))
import TopicView exposing (topicList)
import RemoteData exposing (WebData)
import TopicModel exposing (Topic)
import Material.Spinner as Loading
import Material.Options as Options exposing (styled)
import Material.Layout as Layout
import Material.Typography exposing (center, display1, headline, title)


homePage : Model -> Html Msg
homePage model =
    maybeTopicTable model.topics model


maybeTopicTable : WebData (List Topic) -> Model -> Html Msg
maybeTopicTable response model =
    case response of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            Options.div [ Options.center, Options.css "height" "100vh" ]
                [ Loading.spinner
                    [ Loading.active True ]
                ]

        RemoteData.Success topics ->
            Layout.render OnMaterialChange
                model.mdl
                [ Layout.fixedHeader
                , background (color Grey S900)
                ]
                { header =
                    [ Options.styled h2 [ title, center ] [ text "Choose a topic" ]
                    ]
                , drawer = []
                , tabs = ( [], [] )
                , main =
                    [ topicList topics model
                    ]
                }

        RemoteData.Failure error ->
            text (toString error)
