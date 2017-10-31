module TopicsPage exposing (mobile, tablet)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(TopicRoute), toPath)
import Text
import Topic exposing (Topic)


mobile : List Topic -> Html Msg
mobile topics =
    div [ class "dg-no-margins collection" ]
        (List.map
            listItem
            topics
        )


listItem : Topic -> Html msg
listItem topic =
    a [ href <| toPath <| TopicRoute topic.slugTitle, class "collection-item avatar" ]
        [ img [ src topic.icon, class "circle", style [ ( "background-color", topic.colour ) ] ] []
        , span [ class "title dg-text-black" ] [ text topic.title ]
        , p [ class "dg-text-black" ] [ text topic.description ]
        ]


tablet : List Topic -> Html Msg
tablet topics =
    div [ class "row" ]
        (List.map listCard topics)


listCard : Topic -> Html Msg
listCard topic =
    div [ class "col m6 xl4" ]
        [ div [ class "card medium hoverable" ]
            [ div [ class "card-image", style [ ( "background-color", topic.colour ) ], onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
                [ img [ src topic.icon, class "dg-topic-img" ] []
                ]
            , div [ class "card-content", onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
                [ span [ class "card-title" ] [ text topic.title ]
                , p [ class "text-black" ] [ text topic.description ]
                ]
            , div [ class "card-action" ]
                [ a [ href <| toPath <| TopicRoute topic.slugTitle ] [ Text.readMore ]
                ]
            ]
        ]
