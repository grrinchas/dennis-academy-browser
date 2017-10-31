module Registration exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)
import Routes exposing (Route(LoginRoute, SignUpRoute), toPath)
import Text


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
    div [ class "dg-primary-colour dg-center dg-text-white dg-nav-height card-title" ]
        [ span [] [ text text_ ]
        ]


registration : String -> String -> List (Html Msg) -> List (Html Msg) -> Html Msg
registration btn header body actions =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ regHeader header
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
                        [ a [ class "btn dg-primary-colour" ]
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
        [ a [ href <| toPath LoginRoute ] [ Text.alreadyHaveAccount ]
        ]


loginPage : Html Msg
loginPage =
    registration "Login"
        "Login with"
        [ inputField "email" "Email" "email"
        , inputField "lock" "Password" "password"
        ]
        [ a [ href <| toPath SignUpRoute ]
            [ Text.doNotHaveAccount ]
        , a
            [ href "#", class "right right-align dg-no-margins" ]
            [ Text.forgotPassword ]
        ]


inputField : String -> String -> String -> Html Msg
inputField icon holder t =
    div [ class "input-field" ]
        [ i [ class "material-icons prefix" ] [ text icon ]
        , input [ placeholder holder, type_ t ] []
        ]
