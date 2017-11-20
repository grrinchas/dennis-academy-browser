module NavBar exposing (..)

import Brand exposing (Brand)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Messages exposing (Msg(UpdateRoute))
import Routes exposing (Route(HomeRoute, LoginRoute, SignUpRoute, TopicsRoute), toPath)
import Text


navBar : Brand -> Html Msg
navBar brand =
    div [ class "navbar-fixed" ]
        [ nav [ class " dg-primary-colour" ]
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
