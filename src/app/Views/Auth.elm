module Views.Auth exposing (..)

import Components exposing (icon)
import Err exposing (InputError(DoNotMatch, Empty, WrongSize))
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Messages exposing (..)
import Models exposing (Account, Form)
import Validator exposing (Valid, isValid)


thirdParty : Html Msg
thirdParty =
    div [ class "section" ]
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


validClass : Bool -> Attribute msg
validClass bool =
    classList [ ( "dg-valid", bool ), ( "dg-not-valid", not bool ) ]


validStyle : (Maybe String -> Result InputError Valid) -> Maybe String -> Attribute msg
validStyle f m =
    case m of
        Just _ ->
            f m |> isValid |> validClass

        Nothing ->
            classList []


regHeader : String -> Html Msg
regHeader text_ =
    div [ class "dg-center dg-nav-height card-title dg-reg-header" ]
        [ span [] [ text text_ ]
        ]


emailInput : Form -> Html Msg
emailInput form =
    div [ class "input-field col s8" ]
        [ icon "email"
        , input
            [ type_ "email"
            , placeholder "Email"
            , value <| Maybe.withDefault "" form.email
            , maxlength 30
            , onInput (\email -> OnFormChange { form | email = Just email })
            , validStyle Validator.email form.email
            , class "dg-input"
            ]
            []
        , validMsg <| validateEmail form.email
        ]


passwordInput : Form -> Html Msg
passwordInput form =
    div [ class "input-field" ]
        [ icon "lock"
        , input
            [ type_ "password"
            , placeholder "Password"
            , value <| Maybe.withDefault "" form.password
            , onInput (\pass -> OnFormChange { form | password = Just pass })
            , validStyle Validator.password form.password
            , class "dg-input"
            ]
            []
        , validMsg <| validatePassword form.password
        ]


usernameInput : Form -> Html Msg
usernameInput form =
    div [ class "input-field" ]
        [ icon "person"
        , input
            [ type_ "text"
            , placeholder "Username"
            , value <| Maybe.withDefault "" form.username
            , maxlength 30
            , onInput (\username -> OnFormChange { form | username = Just username })
            , validStyle Validator.username form.username
            , class "dg-input"
            ]
            []
        , validMsg <| validateUsername form.username
        ]


repeatInput : Form -> Html Msg
repeatInput form =
    div [ class "input-field" ]
        [ icon "lock"
        , input
            [ type_ "password"
            , placeholder "Password Repeat"
            , value <| Maybe.withDefault "" form.repeatPass
            , onInput (\repeat -> OnFormChange { form | repeatPass = Just repeat })
            , validRepeatStyle form.password form.repeatPass
            , class "dg-input"
            ]
            []
        , validMsg <| validateRepeat form.password form.repeatPass
        ]


signUpPage : Form -> Html Msg -> Html Msg
signUpPage form response =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ regHeader "Sign Up"
            , response
            , div [ class "card-content" ]
                [ usernameInput form
                , emailInput form
                , passwordInput form
                , repeatInput form
                , div [ class "valign-wrapper" ]
                    [ a
                        [ class "btn dg-right "
                        , classList [ ( "disabled", not <| Validator.validSignUpInputs form ) ]
                        , onClick <| CreateAccount <| Validator.validSignUpUser form
                        ]
                        [ text "Sign Up" ]
                    ]
                ]
            , div [ class "card-action" ]
                [ a [ href "" ] [ text "Already have an account" ]
                ]
            ]
        ]


validMsg : String -> Html msg
validMsg msg =
    div
        [ class "dg-data-error"
        , style
            [ ( "visibility"
              , if msg /= "-" then
                    "visible"
                else
                    "hidden"
              )
            ]
        ]
        [ text msg ]


validateEmail : Maybe String -> String
validateEmail e =
    case Validator.email e of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Is not valid."

        _ ->
            "-"


validatePassword : Maybe String -> String
validatePassword pass =
    case Validator.password pass of
        Err Empty ->
            "Please enter."

        Err WrongSize ->
            "Must have at least 6 characters."

        Err DoNotMatch ->
            "Must have at least 1 digit."

        _ ->
            "-"


validateUsername : Maybe String -> String
validateUsername name =
    case Validator.username name of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Must contain only alphanumeric symbols."

        Err WrongSize ->
            "Is too long."

        _ ->
            "-"


validRepeatStyle : Maybe String -> Maybe String -> Attribute msg
validRepeatStyle pass repeat =
    case repeat of
        Just _ ->
            validClass <| (isValid <| Validator.password repeat) && pass == repeat

        Nothing ->
            classList []


validateRepeat : Maybe String -> Maybe String -> String
validateRepeat pass repeat =
    case Validator.password repeat |> isValid of
        True ->
            case pass /= repeat of
                True ->
                    "Do not match."

                False ->
                    "-"

        False ->
            validatePassword repeat


signUpError : String -> Html msg
signUpError response =
    div [ class "dg-response-error" ] [ i [ class "material-icons prefix " ] [ text "error_outline" ], div [] [ text response ] ]


signUpWithError : Form -> String -> Html Msg
signUpWithError form error =
    signUpPage form <| signUpError error


signUpWithSuccess : Form -> Account -> Html Msg
signUpWithSuccess form account =
    signUpPage form <| signUpSuccess account


signUpWithEmpty : Form -> Html Msg
signUpWithEmpty form =
    signUpPage form <| div [] []


signUpSuccess : Account -> Html msg
signUpSuccess account =
    div [ class "dg-response-success" ]
        [ i [ class "material-icons prefix " ] [ text "done" ]
        , div []
            [ text ("Account for " ++ account.email ++ " has been created. Please ")

            -- , a [ href <| toPath LoginRoute ] [ text "login" ]
            , a [] [ text "login" ]
            , text "."
            ]
        ]
