module TopicView exposing (..)

import Html exposing (Html, div, table, tbody, td, text, th, thead, tr)
import Html.Attributes exposing (class)
import Material.Color exposing (Hue)
import Material.Typography exposing (right)
import Models exposing (Model)
import TopicModel exposing (Topic)
import Msgs exposing (Msg(OnMaterialChange))
import RemoteData exposing (WebData)
import Material.List as MList
import Material.Icon as MIcon exposing (size24, size36)
import Material.Options as MOptions exposing (when)
import Material.Button as MButton
import Set


topicList : List Topic -> Model -> Html Msg
topicList topics model =
    MList.ul [ MOptions.cs "dg-topic-list" ] (List.map (topicListItem model) topics)


topicListItem : Model -> Topic -> Html Msg
topicListItem model topic =
    MList.li []
        [ MList.content []
            [ MList.icon "photo_camera" []
            , text topic.title
            ]
        , MList.content2
            []
            [ MIcon.view "navigate_next" []
            ]
        ]
