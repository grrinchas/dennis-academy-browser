module Views.NavBar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(Logout, UpdateRoute, UserMenu))
import Routes exposing (Route(HomeRoute, LoginRoute, SignUpRoute, TopicsRoute, UserHomeRoute), toPath)
import Views.Text as Text
import Model exposing (Brand, User, View)


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


dashboard : Brand -> Html msg
dashboard brand =
    a [ class "btn dg-left dg-nav-bar", href <| toPath UserHomeRoute, style [ ( "background-color", brand.primaryColour ) ] ]
        [ text "Dashboard" ]


signUp : Brand -> Html Msg
signUp brand =
    ul [ class "dg-left dg-nav-bar" ]
        [ li [] [ a [ href <| toPath <| LoginRoute ] [ Text.login ] ]
        , li [] [ span [ class "dg-text-grey" ] [ Text.or ] ]
        , li [] [ a [ class "btn", href <| toPath SignUpRoute, style [ ( "background-color", brand.primaryColour ) ] ] [ Text.signUp ] ]
        ]


navBar : Brand -> Html Msg -> Html Msg
navBar brand view =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper valign-wrapper" ]
                [ toTopicsPage
                , img [ src brand.logo, class "dg-logo", onClick <| UpdateRoute HomeRoute ] []
                , view
                ]
            ]
        ]


toTopicsPage : Html msg
toTopicsPage =
    a [ class "button-collapse show-on-large", href <| Routes.toPath TopicsRoute ]
        [ i [ class "material-icons" ] [ text "apps" ]
        ]


userMenu : User -> Html Msg
userMenu user =
    ul [ class "dropdown-content", classList [ ( "dg-user-menu", user.menu ) ] ]
        [ li [] [ a [] [ i [ class "material-icons" ] [ text "person" ], text "Profile" ] ]
        , li [ class "divider" ] []
        , li []
            [ a [ onClick Logout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ]
            ]
        ]
