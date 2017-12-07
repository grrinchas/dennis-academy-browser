module User.Views.Registration exposing (..)

import User.Validator exposing (..)
import Common.Model exposing (View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http exposing (Response)
import Json.Decode
import Messages exposing (..)
import Routes exposing (Route(LoginRoute, SignUpRoute), toPath)
import Common.Views.Text as Text
import User.Decoders
import User.Model exposing (..)
import Common.Views.ErrorPage as ErrorPage


signUpView : UserForm -> Maybe String -> View Msg
signUpView form response =
    { mobile = signUpPage form response, tablet = signUpPage form response }


loginView : UserForm -> Maybe String -> View Msg
loginView form response =
    { mobile = loginPage form response, tablet = loginPage form response }


errorResponse : String -> Html msg
errorResponse response =
    div [ class "dg-response-error" ] [ i [ class "material-icons prefix " ] [ text "error_outline" ], div [] [ text response ] ]


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


validClass : Bool -> Attribute msg
validClass bool =
    classList [ ( "dg-valid", bool ), ( "dg-not-valid", not bool ) ]


validStyle : (Maybe String -> Result Error Valid) -> Maybe String -> Attribute msg
validStyle f m =
    case m of
        Just _ ->
            f m |> isValid |> validClass

        Nothing ->
            classList []


validRepeatStyle : Maybe String -> Maybe String -> Attribute msg
validRepeatStyle pass repeat =
    case repeat of
        Just _ ->
            validClass <| (isValid <| password repeat) && pass == repeat

        Nothing ->
            classList []


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


regHeader : String -> Html Msg
regHeader text_ =
    div [ class "dg-center dg-nav-height card-title dg-reg-header" ]
        [ span [] [ text text_ ]
        ]


inputIcon : String -> Html msg
inputIcon str =
    i [ class "material-icons prefix" ] [ text str ]


loginPage : UserForm -> Maybe String -> Html Msg
loginPage form response =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ regHeader "Login with"
            , Maybe.map errorResponse response |> Maybe.withDefault (div [] [])
            , div [ class "card-content login" ]
                [ thirdParty
                , span [ class "card-title or" ] [ Text.or ]
                , div [ class "input-field col s8" ]
                    [ inputIcon "email"
                    , input
                        [ type_ "email"
                        , placeholder "Email"
                        , value <| Maybe.withDefault "" form.email
                        , maxlength 30
                        , onInput (\x -> OnLoginForm <| Email x)
                        , validStyle email form.email
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validateEmail form.email
                    ]
                , div [ class "input-field" ]
                    [ inputIcon "lock"
                    , input
                        [ type_ "password"
                        , placeholder "Password"
                        , value <| Maybe.withDefault "" form.password
                        , onInput (\x -> OnLoginForm <| Password x)
                        , validStyle password form.password
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validatePassword form.password
                    ]
                , div [ class "valign-wrapper" ]
                    [ a
                        [ class "btn dg-right "
                        , classList [ ( "disabled", not <| validLoginInputs form ) ]
                        , onClick <| OnLoginForm <| Submit <| validLoginUser form
                        ]
                        [ text "Login" ]
                    ]
                ]
            , div [ class "card-action" ]
                [ a [ href <| toPath SignUpRoute ]
                    [ Text.doNotHaveAccount ]
                , a [ href "#", class "right right-align dg-no-margins" ]
                    [ Text.forgotPassword ]
                ]
            ]
        ]


signUpPage : UserForm -> Maybe String -> Html Msg
signUpPage form response =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ regHeader "Sign Up"
            , Maybe.map errorResponse response |> Maybe.withDefault (div [] [])
            , div [ class "card-content" ]
                [ div [ class "input-field" ]
                    [ inputIcon "person"
                    , input
                        [ type_ "text"
                        , placeholder "Username"
                        , value <| Maybe.withDefault "" form.username
                        , maxlength 30
                        , onInput (\x -> OnSignUpForm <| Username x)
                        , validStyle username form.username
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validateUsername form.username
                    ]
                , div [ class "input-field" ]
                    [ inputIcon "email"
                    , input
                        [ type_ "email"
                        , placeholder "Email"
                        , value <| Maybe.withDefault "" form.email
                        , onInput (\x -> OnSignUpForm <| Email x)
                        , validStyle email form.email
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validateEmail form.email
                    ]
                , div [ class "input-field" ]
                    [ inputIcon "lock"
                    , input
                        [ type_ "password"
                        , placeholder "Password"
                        , value <| Maybe.withDefault "" form.password
                        , onInput (\x -> OnSignUpForm <| Password x)
                        , validStyle password form.password
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validatePassword form.password
                    ]
                , div [ class "input-field" ]
                    [ inputIcon "lock"
                    , input
                        [ type_ "password"
                        , placeholder "Password Repeat"
                        , value <| Maybe.withDefault "" form.repeat
                        , onInput (\x -> OnSignUpForm <| Repeat x)
                        , validRepeatStyle form.password form.repeat
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validateRepeat form.password form.repeat
                    ]
                , div [ class "valign-wrapper" ]
                    [ a
                        [ class "btn dg-right "
                        , classList [ ( "disabled", not <| ((form.password == form.repeat) && validSignUpInputs form) ) ]
                        , onClick <| OnSignUpForm <| Submit <| validSignUpUser form
                        ]
                        [ text "Sign Up" ]
                    ]
                ]
            , div [ class "card-action" ]
                [ a [ href <| toPath LoginRoute ] [ Text.alreadyHaveAccount ]
                ]
            ]
        ]


validateRepeat : Maybe String -> Maybe String -> String
validateRepeat pass repeat =
    case password repeat |> isValid of
        True ->
            if pass /= repeat then
                "Do not match."
            else
                "-"

        False ->
            validatePassword repeat


validateEmail : Maybe String -> String
validateEmail e =
    case email e of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Is not valid."

        _ ->
            "-"


validatePassword : Maybe String -> String
validatePassword pass =
    case password pass of
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
    case username name of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Must contain only alphanumeric symbols."

        Err WrongSize ->
            "Is too long."

        _ ->
            "-"
