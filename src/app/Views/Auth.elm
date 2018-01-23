module Views.Auth exposing (..)

import Components exposing (loader, newLoader)
import Err exposing (InputError(DoNotMatch, Empty, WrongSize))
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Models exposing (..)
import RemoteData exposing (RemoteData(Loading), WebData)
import Routes exposing (Route(LoginRoute, SignUpRoute), path)
import Validator exposing (isValid)


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
    div [ class " card-title " ]
        [ span [] [ text text_ ]
        ]


emailInput : Form -> Html Msg
emailInput form =
    div [ class "input-field" ]
        [
        div [class "input"]
        [ i [class "material-icons"] [text "email"]
        , input
            [ type_ "email"
            , placeholder "Email"
            , value <| Maybe.withDefault "" form.email
            , maxlength 30
            , onInput (\email -> WhenFormChanges { form | email = Just email })
            , validStyle Validator.email form.email
            ]
            []
        ]
        , validMsg <| validateEmail form.email
        ]


passwordInput : Form -> Html Msg
passwordInput form =
    div [ class "input-field" ]
        [ div [class "input"]
            [
        i [class "material-icons"] [text "lock"]
        , input
            [ type_ "password"
            , placeholder "Password"
            , value <| Maybe.withDefault "" form.password
            , onInput (\pass -> WhenFormChanges { form | password = Just pass })
            , validStyle Validator.password form.password
            ]
            []
            ]
        , validMsg <| validatePassword form.password
        ]


usernameInput : Form -> Html Msg
usernameInput form =
    div [ class "input-field" ]
        [ div [class "input"] [
        i [class "material-icons"] [text "person"]
        , input
            [ type_ "text"
            , placeholder "Username"
            , value <| Maybe.withDefault "" form.username
            , maxlength 30
            , onInput (\username -> WhenFormChanges { form | username = Just username })
            , validStyle Validator.username form.username
            ]
            []]
        , validMsg <| validateUsername form.username
        ]


repeatInput : Form -> Html Msg
repeatInput form =
    div [ class "input-field" ]
        [  div [class "input"]
            [
        i [class "material-icons"] [text "lock"]
        , input
            [ type_ "password"
            , placeholder "Password Repeat"
            , value <| Maybe.withDefault "" form.repeatPass
            , onInput (\repeat -> WhenFormChanges { form | repeatPass = Just repeat })
            , validRepeatStyle form.password form.repeatPass
            ]
            []
            ]
        , validMsg <| validateRepeat form.password form.repeatPass
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


failureResponse : String -> Html msg
failureResponse response =
    div [ class "dg-response-error" ] [ i [ class "material-icons prefix " ] [ text "error_outline" ], div [] [ text response ] ]


successResponse : Account -> Html msg
successResponse account =
    div [ class "dg-response-success" ]
        [ i [ class "material-icons prefix " ] [ text "done" ]
        , div []
            [ text ("Account for " ++ account.email ++ " has been created. Please ")
            , a [ href <| path LoginRoute ] [ text "login" ]
            , text "."
            ]
        ]


wrapper : Html Msg -> Html Msg
wrapper view =
    div [ class " dg-registration" ]
        [ view]


signUpForm : Form -> Html Msg -> Html Msg
signUpForm form response =
    Html.form []
        [ regHeader "Sign Up"
        , response
        , div [ class "card-content reset-padding-top" ]
            [ usernameInput form
            , emailInput form
            , passwordInput form
            , repeatInput form
            , div [ class "flex-flex-end" ]
                [ a
                    [ class "btn dg-right "
                    , classList [ ( "disabled", not <| Validator.validSignUpInputs form ) ]
                    , onClick <| ClickCreateAccount <| Validator.validSignUpUser form
                    ]
                    [ text "Sign Up" ]
                ]
            ]
        , div [ class "card-action" ]
            [ a [href <| path LoginRoute ] [ text "Already have an account" ]
            ]
        ]


loginForm : Form -> Html Msg -> Html Msg
loginForm form response =
    Html.form []
        [ regHeader "Login"
        , response
        , div [ class "card-content reset-padding-top" ]
            [ emailInput form
            , passwordInput form
            , div [ class "flex-flex-end" ]
                [ a
                    [ class "btn "
                    , classList [ ( "disabled", not <| Validator.validLoginInputs form ) ]
                    , onClick <| ClickLogin <| Validator.validLoginUser form
                    ]
                    [ text "Login" ]
                ]
            ]
        , div [ class "card-action" ]
            [ a [ href <| path SignUpRoute ]
                [ text "Do not have an account" ]
            ]
        ]


loader:  Html Msg -> Html Msg
loader  view = div [class "loader"] [div [class "load"] [ newLoader []], view]






