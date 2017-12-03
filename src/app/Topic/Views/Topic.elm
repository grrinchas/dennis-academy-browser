module Topic.Views.Topic exposing (..)

import Common.Model exposing (Responsive(Mobile, Tablet), View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (..)
import Slug exposing (Slug)
import Common.Views.Text as Text
import Question.Model exposing (Question)
import Topic.Model exposing (Topic)


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
    topicPage (section [ class "section container" ] [ div [ class "row dg-no-margins" ] (List.map (questionListCard topic) topic.questions) ]) topic


mobile : Topic -> Html Msg
mobile topic =
    topicPage (section [ class "dg-no-margins collection" ] (List.map (listItem topic) topic.questions)) topic


view : Topic -> View Msg
view topic =
    { mobile = mobile topic
    , tablet = tablet topic
    }


topicPage : Html Msg -> Topic -> Html Msg
topicPage questions topic =
    div []
        [ topicHeader topic
        , questions
        , topicNavigation topic
        ]


listItem : Topic -> Question -> Html msg
listItem topic question =
    a [ class "collection-item", href <| toPath <| QuestionRoute topic question ]
        [ span [ class "dg-text-black" ] [ text <| question.title ++ "?" ]
        ]


questionListCard : Topic -> Question -> Html Msg
questionListCard topic question =
    div [ class "col m6 xl4" ]
        [ div [ class "card small hoverable dg-center", onClick <| UpdateRoute <| QuestionRoute topic question ]
            [ div [ class "card-content" ]
                [ span [ class "card-title center-align" ] [ text <| question.title ++ "?" ]
                ]
            ]
        ]


toTopicsPage : Html msg
toTopicsPage =
    a [ class "btn dg-primary-colour dg-topic-nav-btn", href <| toPath TopicsRoute ] [ appsIcon ]


appsIcon : Html msg
appsIcon =
    i [ class "material-icons" ] [ text "apps" ]


toNextTopic : Topic -> Html msg
toNextTopic topic =
    mapSlug (navLink [ Text.next, nextIcon ]) topic.next


toPreviousTopic : Topic -> Html msg
toPreviousTopic topic =
    mapSlug (navLink [ Text.previous, previousIcon ]) topic.previous


navLink : List (Html msg) -> Slug -> Html msg
navLink content slug =
    a [ href <| Routes.toTopic slug, class "btn dg-topic-nav-btn dg-primary-colour" ]
        content


mapSlug : (Slug -> Html msg) -> Maybe Slug -> Html msg
mapSlug view maybeSlug =
    case maybeSlug of
        Just slug ->
            view slug

        Nothing ->
            a [] []


nextIcon : Html msg
nextIcon =
    i [ class "material-icons right" ] [ text "navigate_next" ]


previousIcon : Html msg
previousIcon =
    i [ class "material-icons left" ] [ text "navigate_before" ]
