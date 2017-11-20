module QuestionPage exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)
import Routes exposing (Route(QuestionRoute, TopicRoute, TopicsRoute), toPath)
import Slug exposing (Slug)
import Text
import Topic exposing (Question, Topic)


questionHeader : Topic -> Question -> Html Msg
questionHeader topic question =
    section [ class "section", style [ ( "background-color", topic.colour ) ] ]
        [ h1 [ class "dg-text-white center-align" ]
            [ img [ class "dg-topic-img", src topic.icon ] []
            , text <| question.title ++ "?"
            ]
        ]


questionNavigation : Topic -> Question -> Html msg
questionNavigation topic question =
    section [ class "section dg-center", style [ ( "background-color", topic.colour ) ] ]
        [ toPreviousQuestion topic question
        , toTopicsPage
        , toQuestionsPage topic
        , toNextQuestion topic question
        ]


questionsPage : Html Msg -> Topic -> Question -> Html Msg
questionsPage answer topic question =
    div [ class "dg-question", style [ ( "background-color", topic.colour ) ] ]
        [ questionHeader topic question
        , answer
        , questionNavigation topic question
        ]


tablet : Topic -> Question -> Html Msg
tablet topic question =
    questionsPage
        (section [ class "section" ]
            [ div [ class "container" ]
                [ div [ class "card  z-depth-0" ]
                    [ text question.answer
                    ]
                ]
            ]
        )
        topic
        question


mobile : Topic -> Question -> Html Msg
mobile topic question =
    questionsPage
        (section [ class "section" ]
            [ div [ class "container" ]
                [ div [ class "card  z-depth-0" ]
                    [ text question.answer
                    ]
                ]
            ]
        )
        topic
        question


toTopicsPage : Html msg
toTopicsPage =
    a [ class "btn dg-primary-colour dg-topic-nav-btn", href <| toPath TopicsRoute ] [ appsIcon ]


toQuestionsPage : Topic -> Html msg
toQuestionsPage topic =
    a [ class "btn dg-primary-colour dg-topic-nav-btn", href <| toPath <| TopicRoute topic.slugTitle ] [ upIcon ]


toNextQuestion : Topic -> Question -> Html msg
toNextQuestion topic question =
    mapSlug (navLink [ Text.next, nextIcon ] topic.slugTitle) question.next


toPreviousQuestion : Topic -> Question -> Html msg
toPreviousQuestion topic question =
    mapSlug (navLink [ Text.previous, previousIcon ] topic.slugTitle) question.previous


navLink : List (Html msg) -> Slug -> Slug -> Html msg
navLink content topic question =
    a [ href <| toPath <| QuestionRoute topic question, class "btn dg-topic-nav-btn dg-primary-colour" ]
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


upIcon : Html msg
upIcon =
    i [ class "material-icons" ] [ text "menu" ]


nextIcon : Html msg
nextIcon =
    i [ class "material-icons right" ] [ text "navigate_next" ]


previousIcon : Html msg
previousIcon =
    i [ class "material-icons left" ] [ text "navigate_before" ]
