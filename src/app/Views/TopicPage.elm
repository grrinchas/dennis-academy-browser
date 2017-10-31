module TopicPage exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(TopicRoute, TopicsRoute), toPath)
import Slug exposing (Slug)
import Text
import Topic exposing (Question, Topic)


topicHeader : Topic -> Html Msg
topicHeader topic =
    section [ class "section", style [ ( "background-color", topic.colour ) ] ]
        [ h1 [ class "dg-text-white center-align" ]
            [ img [ class "dg-topic-img", src topic.icon ] []
            , text
                topic.title
            ]
        ]


topicNavigation : Topic -> Html msg
topicNavigation topic =
    section [ class "section container dg-center" ]
        [ toPreviousTopic topic
        , toTopicsPage
        , toNextTopic topic
        ]


tablet : Topic -> Html Msg
tablet topic =
    topicPage (section [ class "section container" ] [ div [ class "row" ] (List.map questionListCard topic.questions) ]) topic


mobile : Topic -> Html Msg
mobile topic =
    topicPage (section [ class "dg-no-margins collection" ] (List.map listItem topic.questions)) topic


topicPage : Html Msg -> Topic -> Html Msg
topicPage questions topic =
    div []
        [ topicHeader topic
        , questions
        , topicNavigation topic
        ]


listItem : Question -> Html msg
listItem question =
    a [ class "collection-item" ]
        [ span [ class "dg-text-black" ] [ text <| question.title ++ "?" ]
        ]


questionListCard : Question -> Html Msg
questionListCard question =
    div [ class "col m6 xl4" ]
        [ div [ class "card small hoverable dg-center" ]
            [ div [ class "card-content" ]
                [ span [ class "card-title center-align" ] [ text <| question.title ++ "?" ]
                ]
            ]
        ]


toTopicsPage : Html msg
toTopicsPage =
    a [ class "btn dg-primary-colour", href <| toPath TopicsRoute ] [ appsIcon ]


toNextTopic : Topic -> Html msg
toNextTopic topic =
    mapSlug (navLink [ Text.next, nextIcon ]) topic.next


toPreviousTopic : Topic -> Html msg
toPreviousTopic topic =
    mapSlug (navLink [ Text.previous, previousIcon ]) topic.previous


navLink : List (Html msg) -> Slug -> Html msg
navLink content slug =
    a [ href <| toPath <| TopicRoute slug, class "btn dg-topic-nav-btn dg-primary-colour" ]
        content


mapSlug : (Slug -> Html msg) -> Maybe Slug -> Html msg
mapSlug view maybeSlug =
    case maybeSlug of
        Just slug ->
            view slug

        Nothing ->
            a [] []


appsIcon : Html msg
appsIcon =
    i [ class "material-icons" ] [ text "apps" ]


nextIcon : Html msg
nextIcon =
    i [ class "material-icons right" ] [ text "navigate_next" ]


previousIcon : Html msg
previousIcon =
    i [ class "material-icons left" ] [ text "navigate_before" ]
