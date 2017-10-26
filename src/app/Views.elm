module Views exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown exposing (toHtml)
import Routes exposing (topicUrl)
import Topic exposing (..)


notFoundPage : Html msg
notFoundPage =
    div []
        [ text "Page is not found" ]


topicPage : Topic -> Html msg
topicPage topic =
    toHtml [] topic.content


topicsPage : List Topic -> Html msg
topicsPage topics =
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


topicListCard : Topic -> Html msg
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
                [ a [ href <| topicUrl topic.id ] [ text "Let's go" ]
                ]
            ]
        ]


topicListItem : Topic -> Html msg
topicListItem topic =
    a [ href <| topicUrl topic.id, class "collection-item avatar text-black " ]
        [ img [ src topic.icon.url, class "circle medium dg-topic-a", style [ ( "background-color", topic.colour ) ] ] []
        , span [ class "title dg-topic-a" ] [ text topic.title ]
        , p [ class "dg-topic-a" ] [ text topic.description ]
        ]


loading : Html msg
loading =
    text "loading"
