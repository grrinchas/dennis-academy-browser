module Views.NavBar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(Logout))
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
                , a [ href <| path <| HomeRoute Nothing, class "valign-wrapper" ] [ img [ src logo, class "dg-logo" ] [] ]
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


withUserMenu : Html Msg
withUserMenu =
    ul [ class "dropdown-content", classList [ ( "dg-user-menu", True ) ] ]
        [ li [] [ a [] [ i [ class "material-icons" ] [ text "person" ], text "Profile" ] ]
        , li [ class "divider" ] []
        , li []
            [ a [ onClick Logout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ]
            ]
        ]



{-

   withSignUp : Brand -> View Msg
   withSignUp brand =
       { mobile = navBar brand <| signUp brand, tablet = navBar brand <| signUp brand }


   withUser : Brand -> User -> View Msg
   withUser brand u =
       { mobile = navBar brand <| user u, tablet = navBar brand <| user u }


   withDashboard : Brand -> View Msg
   withDashboard brand =
       { mobile = navBar brand <| dashboard brand, tablet = navBar brand <| dashboard brand }


   user : User -> Html Msg
   user user =
       div
           [ class "dg-left valign-wrapper dg-user-img dg-nav-bar"
           , onClick <| UserMenu <| not user.menu
           ]
           [ img [ src user.picture, class "" ] []
           , i [ class "material-icons" ] [ text "arrow_drop_down" ]
           , userMenu user
           ]

-}
