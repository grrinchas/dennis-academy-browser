module Views exposing (..)

import Brand exposing (Brand)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Markdown exposing (toHtml)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(HomeRoute, LoginRoute, SignUpRoute, TopicRoute, TopicsRoute), toPath)
import Topic exposing (..)
import Window exposing (Size)


notFoundPage : Html Msg
notFoundPage =
    div []
        [ text "Page is not found" ]


landingPage : Html Msg
landingPage =
    text "landing page"


thirdParty : Html Msg
thirdParty =
    div [ class "row" ]
        [ div [ class "col s12 center-align" ]
            [ a [ class "btn-floating btn-large red " ]
                [ text "G"
                ]
            , a [ class "btn-floating btn-large blue", style [ ( "margin", "0 20px" ) ] ]
                [ text "F"
                ]
            , a [ class "btn-floating btn-large cyan" ]
                [ text "T"
                ]
            ]
        ]


regHeader : String -> Html Msg
regHeader text_ =
    div [ class "dg-reg-header" ]
        [ span [ class "dg-reg-title" ] [ text text_ ]
        ]


registration : String -> String -> List (Html Msg) -> List (Html Msg) -> Html Msg
registration btn header body actions =
    div [ class "dg-registration" ]
        [ Html.form []
            [ regHeader header
            , div [ class "card-content" ] <|
                List.append
                    (List.append
                        [ thirdParty
                        , span [ class "dg-reg-or" ] [ text "or" ]
                        ]
                        body
                    )
                    ([ div
                        [ class "right-align" ]
                        [ a [ class "btn" ]
                            [ text btn
                            ]
                        ]
                     ]
                    )
            , div [ class "card-action" ]
                actions
            ]
        ]


signUpPage : Html Msg
signUpPage =
    registration "Sign Up"
        "Sign up with"
        [ inputField "person" "Username" "text"
        , inputField "email" "Email" "email"
        , inputField "lock" "Password" "password"
        , inputField "lock" "Repeat Password" "password"
        ]
        [ link LoginRoute "Already have account?"
        ]


loginPage : Html Msg
loginPage =
    registration "Login"
        "Login with"
        [ inputField "email" "Email" "email"
        , inputField "lock" "Password" "password"
        ]
        [ link SignUpRoute "Don't have account?"
        , linkWith "right" HomeRoute "Forgot password?"
        ]


inputField : String -> String -> String -> Html Msg
inputField icon holder t =
    div [ class "input-field" ]
        [ i [ class "material-icons prefix" ] [ text icon ]
        , input [ placeholder holder, type_ t ] []
        ]


topicPage : Topic -> Html msg
topicPage topic =
    main_ []
        [ header [ style [ ( "background-color", topic.colour ) ] ]
            [ div [ class "container" ]
                [ div [ class "row" ]
                    [ div [ class "col s12" ]
                        [ h1 [ class "section dg-text-white center-align" ]
                            [ img [ class "dg-topic-img", src topic.icon.url ] []
                            , text
                                topic.title
                            ]
                        ]
                    ]
                ]
            ]
        , section []
            [ div [ class "container" ]
                [ toHtml [] topic.content
                ]
            ]
        ]


topicsPageMobile : List Topic -> Html Msg
topicsPageMobile topics =
    div [ class " collection dg-topic-list " ]
        (List.map
            topicListItem
            topics
        )


topicsPageTablet : List Topic -> Html Msg
topicsPageTablet topics =
    div [ class "container" ]
        [ div [ class "row" ]
            (List.map topicListCard topics)
        ]


container : List (Html msg) -> Html msg
container main =
    div [ class "container" ] main


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
                [ link (TopicRoute topic.slugTitle) "Let's go" ]
            ]
        ]


topicListItem : Topic -> Html msg
topicListItem topic =
    a [ href <| toPath (TopicRoute topic.slugTitle), class "collection-item avatar text-black " ]
        [ img [ src topic.icon.url, class "circle medium dg-topic-a", style [ ( "background-color", topic.colour ) ] ] []
        , span [ class "title dg-topic-a" ] [ text topic.title ]
        , p [ class "dg-topic-a" ] [ text topic.description ]
        ]


withHeader : Html Msg -> Brand -> Html Msg
withHeader main brand =
    div []
        [ navBar brand
        , main
        ]


navBar : Brand -> Html Msg
navBar brand =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper valign-wrapper" ]
                [ a [ href <| toPath TopicsRoute, class "button-collapse show-on-large" ] [ icon "apps" ]
                , img [ src brand.logo.url, class "dg-logo", onClick <| UpdateRoute HomeRoute ] []
                , ul [ class "dg-navbar-links" ]
                    [ li [] [ link LoginRoute "Login" ]
                    , li [] [ span [ class "dg-login-or-signup" ] [ text "or" ] ]
                    , li [] [ linkWith "btn" SignUpRoute "Sign Up" ]
                    ]
                ]
            ]
        ]


linkWith : String -> Route -> String -> Html Msg
linkWith class_ route text_ =
    a [ class class_, href <| toPath route ] [ text text_ ]


link : Route -> String -> Html Msg
link route text =
    linkWith "" route text


icon : String -> Html msg
icon name =
    i [ class "material-icons" ] [ text name ]


loaderPart : String -> Html msg
loaderPart color =
    div [ class ("spinner-layer spinner-" ++ color) ]
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


loading : Html msg
loading =
    div [ class "dg-loading" ]
        [ div [ class "preloader-wrapper active" ] <|
            List.map
                loaderPart
                [ "blue", "red", "yellow", "green" ]
        ]
