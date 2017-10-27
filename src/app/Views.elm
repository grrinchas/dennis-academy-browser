module Views exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Markdown exposing (toHtml)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(TopicRoute))
import Topic exposing (..)


notFoundPage : Html msg
notFoundPage =
    div []
        [ text "Page is not found" ]


signUpPage : Html msg
signUpPage =
    div [ class "container valign-wrapper", style [ ( "justify-content", "center" ) ] ]
        [ Html.form [ class "card ", style [ ( "min-width", "500px" ), ( "width", "500px" ) ] ]
            [ div [ class "grey darken-3 valign-wrapper center-align", style [ ( "height", "75px" ), ( "justify-content", "center" ) ] ]
                [ span [ class "card-title dg-login-title" ] [ text "Sign up with" ]
                ]
            , div [ class "card-content" ]
                [ div [ class "section row" ]
                    [ div [ class "col s12 center-align" ]
                        [ a [ class "btn-large red" ]
                            [ text "G"
                            ]
                        , a [ class "btn-large blue", style [ ( "margin", "0 20px" ) ] ]
                            [ text "F"
                            ]
                        , a [ class "btn-large cyan" ]
                            [ text "T"
                            ]
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "col s12" ]
                        [ span [ class "card-title center-align", style [ ( "font-weight", "bold" ), ( "color", "grey" ) ] ] [ text "or" ]
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "person" ]
                        , input [ placeholder "Username" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "email" ]
                        , input [ placeholder "Email", id "email", type_ "email" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "lock" ]
                        , input [ placeholder "Password", id "password", type_ "password" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "lock" ]
                        , input [ placeholder "Repeat Password", id "password", type_ "password" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "col s12 right-align" ]
                        [ a [ class "btn" ]
                            [ text "Sign Up"
                            ]
                        ]
                    ]
                ]
            , div [ class "card-action" ]
                [ span [] [ text "" ]
                , a [ href <| Routes.loginUrl ] [ text "Already have account?" ]
                ]
            ]
        ]


loginPage : Html msg
loginPage =
    div [ class "container valign-wrapper", style [ ( "justify-content", "center" ) ] ]
        [ Html.form [ class "card ", style [ ( "min-width", "500px" ), ( "width", "500px" ) ] ]
            [ div [ class "grey darken-3 valign-wrapper center-align", style [ ( "height", "75px" ), ( "justify-content", "center" ) ] ]
                [ span [ class "card-title dg-login-title" ] [ text "Login with" ]
                ]
            , div [ class "card-content" ]
                [ div [ class "section row" ]
                    [ div [ class "col s12 center-align" ]
                        [ a [ class "btn-large red" ]
                            [ text "G"
                            ]
                        , a [ class "btn-large blue", style [ ( "margin", "0 20px" ) ] ]
                            [ text "F"
                            ]
                        , a [ class "btn-large cyan" ]
                            [ text "T"
                            ]
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "col s12" ]
                        [ span [ class "card-title center-align", style [ ( "font-weight", "bold" ), ( "color", "grey" ) ] ] [ text "or" ]
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "email" ]
                        , input [ placeholder "Email", id "email", type_ "email" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "input-field col s12" ]
                        [ i [ class "material-icons prefix" ] [ text "lock" ]
                        , input [ placeholder "Password", id "password", type_ "password" ] []
                        ]
                    ]
                , div [ class "row" ]
                    [ div [ class "col s12 right-align" ]
                        [ a [ class "btn" ]
                            [ text "Login"
                            ]
                        ]
                    ]
                ]
            , div [ class "card-action" ]
                [ span [] [ text "" ]
                , a [ href <| Routes.signUpUrl ] [ text "Don't have account?" ]
                , a [ href "#", class "right" ] [ text "Forgot password?" ]
                ]
            ]
        ]


topicPage : Topic -> Html msg
topicPage topic =
    toHtml [] topic.content


topicsPage : List Topic -> Html Msg
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


topicListCard : Topic -> Html Msg
topicListCard topic =
    div [ class "col m6 xl4" ]
        [ div [ class "card medium hoverable" ]
            [ div [ class "card-image", style [ ( "background-color", topic.colour ) ], onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
                [ img [ src topic.icon.url, class "dg-topic-img" ] []
                ]
            , div [ class "card-content", onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
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


withHeader : Html msg -> Html msg
withHeader main =
    div []
        [ navBar
        , main
        ]


mainHeader : Html msg
mainHeader =
    navBar


navBar : Html msg
navBar =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper" ]
                [ a [ class "button-collapse show-on-large", href "#" ] [ i [ class "material-icons" ] [ text "apps" ] ]
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
