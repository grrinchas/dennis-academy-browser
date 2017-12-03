module Common.Views.NavBar exposing (..)

import Common.Model exposing (Brand, View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(HomeRoute, LoginRoute, SignUpRoute, TopicsRoute), toPath)
import Common.Views.Text as Text


view : Brand -> View Msg
view brand =
    { mobile = navBar brand, tablet = navBar brand }


navBar : Brand -> Html Msg
navBar brand =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper valign-wrapper" ]
                [ toTopicsPage
                , img [ src brand.logo, class "dg-logo", onClick <| UpdateRoute HomeRoute ] []
                , ul [ class "dg-left" ]
                    [ li [] [ toLoginPage ]
                    , li [] [ span [ class "dg-text-grey" ] [ Text.or ] ]
                    , li [] [ toSignUpPage brand ]
                    ]
                ]
            ]
        ]


toLoginPage : Html msg
toLoginPage =
    a [ href <| toPath <| LoginRoute ] [ Text.login ]


toSignUpPage : Brand -> Html msg
toSignUpPage brand =
    a [ class "btn", href <| toPath SignUpRoute, style [ ( "background-color", brand.primaryColour ) ] ]
        [ Text.signUp ]


toTopicsPage : Html msg
toTopicsPage =
    a [ class "button-collapse show-on-large", href <| toPath TopicsRoute ] [ appsIcon ]


appsIcon : Html msg
appsIcon =
    i [ class "material-icons" ] [ text "apps" ]
