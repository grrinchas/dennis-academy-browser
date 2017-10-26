module TopicView exposing (..)

import Color exposing (Color, blue, green, red, toRgb)
import Html exposing (Html, a, div, h2, h3, hr, i, img, li, p, span, table, tbody, td, text, th, thead, tr, ul)
import Html.Attributes exposing (class, href, src, style)
import Html.Events
import Messages exposing (Msg(UpdateRoute))
import Navigation exposing (newUrl)
import RoutesModel exposing (Route(TopicRoute))
import Routing exposing (toPath)
import TopicModel exposing (Topic, TopicId)
import RemoteData exposing (WebData)
import Set


topicList : List Topic -> Html Msg
topicList topics =
    div [ class "container" ]
        [ div [ class "row collection hide-on-med-and-up dg-topic-list " ]
            (List.map
                topicListItem
                topics
            )
        , div [ class "row hide-on-small-only" ]
            (List.map
                topicListCard
                topics
            )
        ]


topicListCard : Topic -> Html Msg
topicListCard topic =
    div [ class "col m6 xl4" ]
        [ div [ class "card medium" ]
            [ div [ class "card-image", style [ ( "background-color", topic.colour ) ] ]
                [ img [ src topic.icon.url, class "dg-topic-img" ] []
                ]
            , div [ class "card-content" ]
                [ span [ class "card-title" ] [ text topic.title ]
                , p [ class "text-black" ] [ text topic.description ]
                ]
            , div [ class "card-action" ]
                [ a [ href <| toPath <| TopicRoute topic.id ] [ text "Let's go" ]
                ]
            ]
        ]


topicListItem : Topic -> Html Msg
topicListItem topic =
    a [ href <| toPath <| TopicRoute topic.id, class "collection-item avatar text-black " ]
        [ img [ src topic.icon.url, class "circle medium dg-topic-a", style [ ( "background-color", topic.colour ) ] ] []
        , span [ class "title dg-topic-a" ] [ text topic.title ]
        , p [ class "dg-topic-a" ] [ text topic.description ]
        ]
