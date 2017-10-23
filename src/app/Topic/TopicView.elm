module TopicView exposing (..)

import Html exposing (Html, a, div, hr, table, tbody, td, text, th, thead, tr)
import Html.Attributes exposing (class, href)
import Html.Events
import Material.Color exposing (Hue, background, primary, white)
import Material.Typography exposing (right)
import Models exposing (Model)
import Navigation exposing (newUrl)
import RoutesModel exposing (Route(TopicRoute))
import Routing exposing (toPath)
import TopicModel exposing (Topic, TopicId)
import Msgs exposing (Msg(OnLocationChange, OnMaterialChange, UpdateRoute))
import RemoteData exposing (WebData)
import Material.List as MList
import Material.Icon as MIcon exposing (size24, size36)
import Material.Options as Options exposing (when)
import Material.Spinner as Loading
import Material.Color as Color
import Set


topicList : List Topic -> Model -> Html Msg
topicList topics model =
    MList.ul [ Options.cs "dg-topic-list" ] (List.map (topicListItem model) topics)


topicListItem : Model -> Topic -> Html Msg
topicListItem model topic =
    MList.li
        [ Options.onClick <| UpdateRoute <| TopicRoute topic.id
        , Color.text white
        ]
        [ MList.content []
            [ MList.icon "library_books" [ Color.text primary ]
            , text topic.title
            ]
        , MList.content2
            []
            [ MIcon.view "navigate_next" []
            ]
        ]
