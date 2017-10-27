module Views exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown exposing (toHtml)
import Routes
import Topic exposing (..)


notFoundPage : Html msg
notFoundPage =
    div []
        [ text "Page is not found" ]


signUpPage : Html msg
signUpPage =
    text "sign up page"


loginPage : Html msg
loginPage =
    text "login page"


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
                [ a [ href <| Routes.topicUrl topic.slugTitle ] [ text "Let's go" ]
                ]
            ]
        ]


topicListItem : Topic -> Html msg
topicListItem topic =
    a [ href <| Routes.topicUrl topic.slugTitle, class "collection-item avatar text-black " ]
        [ img [ src topic.icon.url, class "circle medium dg-topic-a", style [ ( "background-color", topic.colour ) ] ] []
        , span [ class "title dg-topic-a" ] [ text topic.title ]
        , p [ class "dg-topic-a" ] [ text topic.description ]
        ]


mainHeader : Html msg
mainHeader =
    navBar


navBar : Html msg
navBar =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper" ]
                [ a [ class "button-collapse show-on-large", href "#" ] [ i [ class "material-icons" ] [ text "menu" ] ]
                , ul [ id "nav-mobile", class "right" ]
                    [ li [] [ a [ href <| Routes.loginUrl ] [ text "Login" ] ]
                    , li [] [ span [ class "dg-or" ] [ text "or" ] ]
                    , li [] [ a [ href <| Routes.signUpUrl, class "waves-effect waves-light btn" ] [ text "Sign Up" ] ]
                    ]
                ]
            ]
        ]


loading : Html msg
loading =
    div [ class "loading" ]
        [ div
            [ class "preloader-wrapper active" ]
            [ div [ class "spinner-layer spinner-blue" ]
                [ div [ class "circle-clipper left" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "gap-patch" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "circle-clipper right" ]
                    [ div [ class "circle" ] []
                    ]
                ]
            , div [ class "spinner-layer spinner-red" ]
                [ div [ class "circle-clipper left" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "gap-patch" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "circle-clipper right" ]
                    [ div [ class "circle" ] []
                    ]
                ]
            , div [ class "spinner-layer spinner-yellow" ]
                [ div [ class "circle-clipper left" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "gap-patch" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "circle-clipper right" ]
                    [ div [ class "circle" ] []
                    ]
                ]
            , div [ class "spinner-layer spinner-green" ]
                [ div [ class "circle-clipper left" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "gap-patch" ]
                    [ div [ class "circle" ] []
                    ]
                , div [ class "circle-clipper right" ]
                    [ div [ class "circle" ] []
                    ]
                ]
            ]
        ]
