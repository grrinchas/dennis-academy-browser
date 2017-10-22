module HomePage exposing (..)

import Html exposing (Html, div, h1, h4, p, text)
import Html.Attributes exposing (style)
import Material.Grid exposing (Device(All, Desktop, Phone, Tablet), cell, grid, noSpacing, offset, size)
import Models exposing (Model)
import Msgs exposing (Msg)
import TopicView exposing (topicList)
import RemoteData exposing (WebData)
import TopicModel exposing (Topic)


homePage : Model -> Html Msg
homePage model =
    maybeTopicTable model.topics model



{-
   grid [ noSpacing ]
       [ cell [ size Tablet 8, size Desktop 12, size Phone 4 ]
           [ p
               []
               [ ]
           ]
       ]
-}
{-
   homePage : Model -> Html Msg
   homePage model =
       Layout.render OnMaterialChange
           model.mdl
           [ Layout.fixedHeader ]
           { header = [ h1 [ style [ ( "padding", "2rem" ) ] ] [ text "Counter" ] ]
           , drawer = [ h1 [ style [ ( "padding", "2rem" ) ] ] [ text "Counter" ] ]
           , tabs = ( [], [] )
           , main = [ maybeTopicTable model.topics ]
           }
-}


maybeTopicTable : WebData (List Topic) -> Model -> Html Msg
maybeTopicTable response model =
    case response of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            text "Loading..."

        RemoteData.Success topics ->
            topicList topics model

        RemoteData.Failure error ->
            text (toString error)
