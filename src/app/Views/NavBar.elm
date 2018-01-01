module Views.NavBar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (on, onClick, onWithOptions)
import Json.Decode
import Messages exposing (Msg(Logout, OnMenuChange))
import Models exposing (Menu, User)
import Routes exposing (Route(DashboardRoute, EditorRoute, HomeRoute, LoginRoute, SignUpRoute), path)


logoImg : String
logoImg =
    "https://rawgit.com/grrinchas/c31f4363437c79172181ca944ed1c5d5/raw/4d19f3af564947d168a0ebfc15b3c013bd48e975/Logo.svg"


wrapper : Html Msg -> Html Msg -> Html Msg -> Html Msg
wrapper start center end =
    nav [ class "row  dg-nav-bar valign-wrapper" ]
        [ div [ class "dg-start col s4" ] [ start ]
        , div [ class "dg-center col s4" ] [ center ]
        , div [ class "dg-end col s4" ] [ end ]
        ]


withEditor : Menu -> Html Msg
withEditor menu =
    div [ class "dg-publish" ]
        [ a
            [ class "btn valign-wrapper "
            , classList [ ( "dg-disabled", menu.publish ) ]
            , publishMenuEvent menu True
            ]
            [ text "publish" ]
        , publishMenu menu
        ]


publishMenuEvent : Menu -> Bool -> Attribute Msg
publishMenuEvent menu bool =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            OnMenuChange { menu | publish = bool }


userMenuEvent : Menu -> Bool -> Attribute Msg
userMenuEvent menu bool =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            OnMenuChange { menu | user = bool }


logo : Html Msg
logo =
    a [ href <| path HomeRoute ]
        [ img [ src logoImg ] []
        ]


withSignUp : Html Msg
withSignUp =
    ul [ class "user-end" ]
        [ li [] [ a [ href <| path LoginRoute ] [ text "Login" ] ]
        , li [] [ span [ class "dg-text-grey" ] [ text "or" ] ]
        , li [] [ a [ class "btn", href <| path SignUpRoute, style [] ] [ text "Sign Up" ] ]
        ]


withDashboard : Html msg
withDashboard =
    a [ class "btn", href <| path DashboardRoute ]
        [ text "Dashboard" ]


withUserMenu : User -> Menu -> Html Msg
withUserMenu user menu =
    div
        [ class "valign-wrapper user-end" ]
        [ a [ class "dg-notifications" ] [ i [ class "material-icons" ] [ text "notifications" ] ]
        , div
            [ class "valign-wrapper dg-user-img"
            , userMenuEvent menu True
            , classList [ ( "dg-disabled", menu.user ) ]
            ]
            [ img [ src user.picture, class " dg-user-img circle" ] []
            , i [ class "material-icons drop" ] [ text "arrow_drop_down" ]
            , userMenu user menu
            ]
        ]


userMenu : User -> Menu -> Html Msg
userMenu user menu =
    ul [ userMenuEvent menu True, class "dropdown-content", classList [ ( "dg-user-menu", menu.user ) ] ]
        [ li [] [ a [ href <| path <| EditorRoute "1" ] [ i [ class "material-icons" ] [ text "add" ], text "Create Tutorial" ] ]
        , li [] [ a [] [ i [ class "material-icons" ] [ text "apps" ], text "Tutorials" ] ]
        , li [ class "divider" ] []
        , li [ class "valign-wrapper" ]
            [ img [ class "circle", src user.picture ] []
            , span [ class "dg-profile title" ] [ text "View Profile" ]
            ]
        , li [] [ a [] [ i [ class "material-icons" ] [ text "settings" ], text "Settings" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ onClick Logout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ] ]
        ]


publishMenu : Menu -> Html Msg
publishMenu menu =
    div [ publishMenuEvent menu True, class "card dg-card", classList [ ( "dg-publish-menu", menu.publish ) ] ]
        [ div [ class "card-content" ]
            [ span [ class "card-title" ] [ text "Ready to publish?" ]
            ]
        , div [ class "divider" ] []
        , div [ class "card-content" ]
            [ p [] [ text "Add some tags (no more than 5) to make tutorial descriptive:" ]
            ]
        , div [ class "card-content" ]
            [ div [ class "chip" ] [ text "elm", i [ class "close material-icons" ] [ text "close" ] ]
            , div [ class "chip" ] [ text "java", i [ class "material-icons close " ] [ text "close" ] ]
            , div [ class "chip" ] [ text "haskell", i [ class "material-icons close " ] [ text "close" ] ]
            , div [ class "chip" ] [ text "web-development", i [ class "close material-icons" ] [ text "close" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "card-content" ]
            [ p [] [ text "Select or upload an image, so that tutorial would stand out" ]
            ]
        , div [ class "card-content" ]
            [ div [ class "tutorial-img-wrapper" ]
                [ div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                ]
            ]
        , div [ class "card-action" ]
            [ a [ class "btn grey darken-3" ] [ text "upload" ]
            , a [ class "btn right" ] [ text "publish" ]
            ]
        ]
