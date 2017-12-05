module User.Views.Registration exposing (..)

import Common.Model exposing (View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Messages exposing (..)
import Routes exposing (Route(LoginRoute, SignUpRoute), toPath)
import Common.Views.Text as Text
import User.Model exposing (SignUpForm, User)


user : User -> Html msg
user user =
    div []
        [ p [] [ text user.id ]
        , p [] [ text user.username ]
        , p [] [ text user.email ]
        , p [] []
        ]


userView : User -> View msg
userView u =
    { mobile = user u, tablet = user u }


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
    div [ class "dg-center dg-nav-height card-title dg-reg-header" ]
        [ span [] [ text text_ ]
        ]


registration : Html Msg -> String -> List (Html Msg) -> List (Html Msg) -> Html Msg
registration btn header body actions =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ regHeader header
            , div [ class "divider" ] []
            , div [ class "card-content" ] <|
                List.append
                    (List.append
                        [ thirdParty
                        , span [ class "dg-text-grey dg-text-bold card-title center-align" ] [ Text.or ]
                        ]
                        body
                    )
                    ([ div
                        [ class "right-align" ]
                        [ btn
                        ]
                     ]
                    )
            , div [ class "card-action" ]
                actions
            ]
        ]

loginView : View Msg
loginView =
    { mobile = loginPage, tablet = loginPage }


loginPage : Html Msg
loginPage =
    registration (a [ class "btn dg-primary-colour" ] [ text "Login" ])
        "Login with"
        [ inputField "email" <| input [ placeholder "Email", type_ "email" ] []
        , inputField "lock" <| input [ placeholder "Repeat Password", type_ "password" ] []
        ]
        [ a [ href <| toPath SignUpRoute ]
            [ Text.doNotHaveAccount ]
        , a
            [ href "#", class "right right-align dg-no-margins" ]
            [ Text.forgotPassword ]
        ]


inputField : String -> Html Msg -> Html Msg
inputField icon input =
    div [ class "input-field" ]
        [ i [ class "material-icons prefix" ] [ text icon ]
        , input
        ]


