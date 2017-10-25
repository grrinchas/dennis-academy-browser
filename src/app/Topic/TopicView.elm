module TopicView exposing (..)

import Html exposing (Html, a, div, h2, h3, hr, i, li, p, span, table, tbody, td, text, th, thead, tr, ul)
import Html.Attributes exposing (class, href)
import Html.Events
import Messages exposing (Msg(UpdateRoute))
import Navigation exposing (newUrl)
import RoutesModel exposing (Route(TopicRoute))
import Routing exposing (toPath)
import TopicModel exposing (Topic, TopicId)
import RemoteData exposing (WebData)
import Material.List as MList
import Material.Icon as MIcon exposing (size24, size36)
import Material.Options as Options exposing (when)
import Material.Spinner as Loading
import Material.Color as Color
import Set


topicList : List Topic -> Html Msg
topicList topics =
    div [ class "collection dg-topic-list" ]
        (List.map
            topicListItem
            topics
        )


topicListItem : Topic -> Html Msg
topicListItem topic =
    a [ href <| toPath <| TopicRoute topic.id, class "collection-item avatar text-black" ]
        [ i [ class "material-icons teal ligthen-1 circle medium" ] [ text "library_books" ]
        , span [ class "title text-black" ] [ text topic.title ]
        , p [] [ text topic.description ]
        ]
