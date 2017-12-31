module Views.NavBar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(Logout, OnMenuChange))
import Models exposing (Menu, User)
import Routes exposing (Route(DashboardRoute, HomeRoute, LoginRoute, SignUpRoute), path)


logo : String
logo =
    "https://rawgit.com/grrinchas/c31f4363437c79172181ca944ed1c5d5/raw/4d19f3af564947d168a0ebfc15b3c013bd48e975/Logo.svg"


wrapper : Html Msg -> Html Msg
wrapper view =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper valign-wrapper" ]
                [ a [ class "button-collapse show-on-large" ] [ i [ class "material-icons" ] [ text "apps" ] ]
                , a [ href <| path HomeRoute, class "valign-wrapper" ] [ img [ src logo, class "dg-logo" ] [] ]
                , view
                ]
            ]
        ]


withSignUp : Html Msg
withSignUp =
    ul [ class "dg-left dg-nav-bar" ]
        [ li [] [ a [ href <| path LoginRoute ] [ text "Login" ] ]
        , li [] [ span [ class "dg-text-grey" ] [ text "or" ] ]
        , li [] [ a [ class "btn", href <| path SignUpRoute, style [] ] [ text "Sign Up" ] ]
        ]


withDashboard : Html msg
withDashboard =
    a [ class "btn dg-left dg-nav-bar", href <| path DashboardRoute ]
        [ text "Dashboard" ]


withUserMenu : User -> Menu -> Html Msg
withUserMenu user menu =
    div
        [ class "dg-left valign-wrapper  dg-nav-bar" ]
        [ span [] [ text user.email ]
        , div [ class "valign-wrapper dg-user-img", onClick <| OnMenuChange { menu | user = not menu.user } ]
            [ img [ src user.picture ] []
            , i [ class "material-icons drop" ] [ text "arrow_drop_down" ]
            , userMenu menu
            ]
        ]


userMenu : Menu -> Html Msg
userMenu menu =
    ul [ class "dropdown-content", classList [ ( "dg-user-menu", menu.user ) ] ]
        [ li [] [ a [] [ i [ class "material-icons" ] [ text "person" ], text "Profile" ] ]
        , li [ class "divider" ] []
        , li []
            [ a [ onClick Logout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ]
            ]
        ]
