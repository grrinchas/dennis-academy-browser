module Views exposing (..)

import Brand exposing (Brand)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Markdown exposing (toHtml)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(HomeRoute, LoginRoute, SignUpRoute, TopicRoute, TopicsRoute), toPath)
import Slug exposing (Slug)
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
                        [ a [ class "btn grey darken-3" ]
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
        [ link "Already have account?" LoginRoute
        ]


loginPage : Html Msg
loginPage =
    registration "Login"
        "Login with"
        [ inputField "email" "Email" "email"
        , inputField "lock" "Password" "password"
        ]
        [ link "Don't have account?" SignUpRoute
        , linkWith "right" "Forgot password?" HomeRoute
        ]


inputField : String -> String -> String -> Html Msg
inputField icon holder t =
    div [ class "input-field" ]
        [ i [ class "material-icons prefix" ] [ text icon ]
        , input [ placeholder holder, type_ t ] []
        ]


topicPage_ : Topic -> Html Msg
topicPage_ topic =
    main_ [ style [ ( "background-color", topic.colour ) ] ]
        [ header [ class "section" ]
            [ h1 [ class "dg-text-white center-align" ]
                [ img [ class "dg-topic-img", src topic.icon ] []
                , text
                    topic.title
                ]
            ]
        , section [ class "card z-depth-2 dg-topic-content" ]
            [ div [ class "card-content", onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
                [ toHtml [ class "" ] "ne" ]
            , div [ class "valign-wrapper card-action grey darken-3" ]
                [ mapSlug prevTopic topic.previous
                , mapSlug nextTopic topic.next
                ]
            ]
        ]


topicPageMobile : Topic -> Html Msg
topicPageMobile topic =
    main_ [ style [ ( "background-color", topic.colour ) ] ]
        [ header [ class "section" ]
            [ h1 [ class "dg-text-white center-align" ]
                [ img [ class "dg-topic-img", src topic.icon ] []
                , text
                    topic.title
                ]
            ]
        , div [ class " collection dg-topic-list " ]
            (List.map questionListItem topic.questions)
        , section [ class "section container valign-wrapper dg-center" ]
            [ mapSlug prevTopic topic.previous
            , a [ href <| toPath TopicsRoute, class "btn grey darken-3" ] [ icon "apps" ]
            , mapSlug nextTopic topic.next
            ]
        ]


topicPageTablet : Topic -> Html Msg
topicPageTablet topic =
    main_ [ style [ ( "background-color", topic.colour ) ] ]
        [ header [ class "section" ]
            [ h1 [ class "dg-text-white center-align" ]
                [ img [ class "dg-topic-img", src topic.icon ] []
                , text
                    topic.title
                ]
            ]
        , section [ class "section container" ]
            [ div [ class "row" ]
                (List.map questionListCard topic.questions)
            ]
        , section [ class "section container valign-wrapper dg-center" ]
            [ mapSlug prevTopic topic.previous
            , a [ href <| toPath TopicsRoute, class "btn grey darken-3" ] [ icon "apps" ]
            , mapSlug nextTopic topic.next
            ]
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


questionListItem : Question -> Html msg
questionListItem question =
    a [ class "collection-item text-black " ]
        [ span [ class " dg-topic-a" ] [ text <| question.title ++ "?" ]
        ]


prevTopic : Slug -> Html msg
prevTopic slug =
    a [ href <| toPath <| TopicRoute slug, class "btn dg-slug-topic grey darken-3" ]
        [ iconWith "left" "navigate_before"
        , text "Prev"
        ]


nextTopic : Slug -> Html msg
nextTopic slug =
    a [ href <| toPath <| TopicRoute slug, class "btn dg-slug-topic grey darken-3" ]
        [ iconWith "right" "navigate_next "
        , text "Next"
        ]


mapSlug : (Slug -> Html msg) -> Maybe Slug -> Html msg
mapSlug view maybeSlug =
    case maybeSlug of
        Just slug ->
            view slug

        Nothing ->
            div [] []


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
                [ img [ src topic.icon, class "dg-topic-img" ] []
                ]
            , div [ class "card-content", onClick <| UpdateRoute <| TopicRoute <| topic.slugTitle ]
                [ span [ class "card-title" ] [ text topic.title ]
                , p [ class "text-black" ] [ text topic.description ]
                ]
            , div [ class "card-action" ]
                [ link "Let's go" (TopicRoute topic.slugTitle) ]
            ]
        ]


topicListItem : Topic -> Html msg
topicListItem topic =
    a [ href <| toPath (TopicRoute topic.slugTitle), class "collection-item avatar text-black " ]
        [ img [ src topic.icon, class "circle medium dg-topic-a", style [ ( "background-color", topic.colour ) ] ] []
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
                , img [ src brand.logo, class "dg-logo", onClick <| UpdateRoute HomeRoute ] []
                , ul [ class "dg-navbar-links" ]
                    [ li [] [ link "Login" LoginRoute ]
                    , li [] [ span [ class "dg-login-or-signup" ] [ text "or" ] ]
                    , li [] [ a [ class "btn", href <| toPath SignUpRoute, style [ ( "background-color", brand.primaryColour ) ] ] [ text "Sign Up" ] ]
                    ]
                ]
            ]
        ]


linkWith : String -> String -> Route -> Html Msg
linkWith class_ text_ route =
    a [ class class_, href <| toPath route ] [ text text_ ]


link : String -> Route -> Html Msg
link text route =
    linkWith "" text route


icon : String -> Html msg
icon name =
    i [ class "material-icons" ] [ text name ]


iconWith : String -> String -> Html msg
iconWith cl name =
    i [ class <| "material-icons " ++ cl ] [ text name ]


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


footer_ : Html Msg
footer_ =
    footer [ class "page-footer" ]
        [ div [ class "container" ]
            [ div [ class "row" ]
                [ div [ class "col s12 l6" ]
                    [ h5 [ class "white-text" ]
                        [ text "This is a footer" ]
                    , p
                        [ class "grey-text text-lighten-4" ]
                        [ text "Some more information in the footer" ]
                    ]
                ]
            ]
        , div [ class "footer-copyright" ]
            [ div [ class "container" ] [ text "© 2017 Copyright Dennis Grinch" ]
            ]
        ]
