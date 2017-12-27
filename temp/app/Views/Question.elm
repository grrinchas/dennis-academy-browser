module Views.Question exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown
import Messages exposing (Msg)
import Model exposing (Question, Topic, View)
import Routes exposing (Route(QuestionRoute, TopicRoute, TopicsRoute), toPath)
import Slug exposing (Slug)
import Views.Text as Text


view : Topic -> Question -> View Msg
view topic question =
    { mobile = mobile topic question
    , tablet = tablet topic question
    }


questionHeader : Topic -> Question -> Html Msg
questionHeader topic question =
    section [ class "section", style [ ( "background-color", topic.colour ) ] ]
        [ div [ class "container" ]
            [ h1 [ class "dg-text-white center-align" ]
                [ img [ class "dg-topic-img", src topic.icon ] []
                , text <| question.title ++ "?"
                ]
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
    div [ class "dg-question" ]
        [ questionHeader topic question
        , answer
        , questionNavigation topic question
        ]


tablet : Topic -> Question -> Html Msg
tablet topic question =
    questionsPage
        (section [ class "section", style [ ( "background-color", topic.colour ) ] ]
            [ div [ class "container" ]
                [ Markdown.toHtml
                    []
                    question.answer
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
                [ Markdown.toHtml [] question.answer
                ]
            ]
        )
        topic
        question


toTopicsPage : Html msg
toTopicsPage =
    a [ class "btn dg-primary-colour dg-topic-nav-btn", href <| Routes.toPath TopicsRoute ] [ appsIcon ]


toQuestionsPage : Topic -> Html msg
toQuestionsPage topic =
    a [ class "btn dg-primary-colour dg-topic-nav-btn", href <| Routes.toPath <| TopicRoute topic.slug ] [ upIcon ]


toNextQuestion : Topic -> Question -> Html msg
toNextQuestion topic question =
    mapSlug (navLink [ Text.next, nextIcon ] topic.slug) question.next


toPreviousQuestion : Topic -> Question -> Html msg
toPreviousQuestion topic question =
    mapSlug (navLink [ Text.previous, previousIcon ] topic.slug) question.previous


navLink : List (Html msg) -> Slug -> Slug -> Html msg
navLink content topic question =
    a [ href <| Routes.toPath <| QuestionRoute topic question, class "btn dg-topic-nav-btn dg-primary-colour" ]
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
