module User.Views.SignUp exposing (..)

import Char
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


signUpHeader : Html msg
signUpHeader =
    div [ class "dg-center dg-nav-height card-title dg-reg-header" ] [ span [] [ text "Sign up with" ] ]


inputIcon : String -> Html msg
inputIcon str =
    i [ class "material-icons prefix" ] [ text str ]


errorResponse : String -> Html msg
errorResponse response =
    div [ class "dg-response-error" ] [ i [ class "material-icons prefix " ] [ text "error_outline" ], div [] [ text response ] ]


validStyle : Bool -> Attribute msg
validStyle bool =
    classList [ ( "dg-valid", bool ), ( "dg-not-valid", not bool ) ]


validMsg : String -> Html msg
validMsg msg =
    div [ class "dg-data-error" ] [ text msg ]


signUpPage : SignUpForm -> Maybe String -> Html Msg
signUpPage form response =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ signUpHeader
            , Maybe.map errorResponse response |> Maybe.withDefault (div [ class "divider" ] [])
            , div [ class "card-content" ]
                [ thirdParty
                , span [ class "dg-text-grey dg-text-bold card-title center-align" ] [ Text.or ]
                , div [ class "input-field" ]
                    [ inputIcon "person"
                    , input
                        [ type_ "text"
                        , placeholder "Username"
                        , value form.username
                        , maxlength 30
                        , onInput (\x -> OnSignUpForm <| Username x)
                        , username form.username |> isValid |> validStyle
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
                        , value form.email
                        , onInput (\x -> OnSignUpForm <| Email x)
                        , email form.email |> isValid |> validStyle
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
                        , value form.password
                        , onInput (\x -> OnSignUpForm <| Password x)
                        , password form.password |> isValid |> validStyle
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
                        , value form.repeat
                        , onInput (\x -> OnSignUpForm <| Repeat x)
                        , (form.password == form.repeat && isValid (password form.repeat)) |> validStyle
                        , class "dg-input"
                        ]
                        []
                    , validMsg <| validateRepeat form.password form.repeat
                    ]
                , div [ class "valign-wrapper" ]
                    [ a
                        [ class "btn dg-primary-colour dg-right "
                        , classList [ ( "disabled", not <| validForm form ) ]
                        , onClick <| OnSignUpForm <| Submit <| validUser form
                        ]
                        [ text "SignUp" ]
                    ]
                ]
            , div [ class "card-action" ]
                [ a [ href <| toPath LoginRoute ] [ Text.alreadyHaveAccount ]
                ]
            ]
        ]


validUser : SignUpForm -> Maybe ValidUser
validUser form =
    Result.map3 ValidUser (username form.username) (email form.email) (password form.password)
        |> Result.toMaybe


isValid : Result a b -> Bool
isValid result =
    Result.toMaybe result |> (==) Nothing |> not


validInputs : SignUpForm -> Bool
validInputs form =
    [ username form.username, email form.email, password form.password, password form.repeat ]
        |> List.map isValid
        |> List.all ((==) True)


validForm : SignUpForm -> Bool
validForm form =
    form.password == form.repeat && validInputs form


validatePassword : String -> String
validatePassword pass =
    case password pass of
        Err Empty ->
            "Please enter."

        Err WrongSize ->
            "Must have at least 6 characters."

        Err DoNotMatch ->
            "Must have at least 1 digit."

        _ ->
            String.fromChar (Char.fromCode 96)


validateRepeat : String -> String -> String
validateRepeat pass repeat =
    case password repeat |> isValid of
        True ->
            if pass /= repeat then
                "Do not match."
            else
                String.fromChar (Char.fromCode 96)

        False ->
            validatePassword repeat


validateEmail : String -> String
validateEmail e =
    case email e of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Is not valid."

        _ ->
            String.fromChar (Char.fromCode 96)


validateUsername : String -> String
validateUsername name =
    case username name of
        Err Empty ->
            "Please enter."

        Err DoNotMatch ->
            "Must contain only alphanumeric symbols."

        Err WrongSize ->
            "Is too long."

        _ ->
            String.fromChar (Char.fromCode 96)


signUpView : SignUpForm -> Maybe String -> View Msg
signUpView form response =
    { mobile = signUpPage form response, tablet = signUpPage form response }


errorView : Response String -> SignUpForm -> View Msg
errorView response form =
    if response.status.code == 400 then
        case Json.Decode.decodeString User.Decoders.decodeError response.body of
            Ok result ->
                case result.code of
                    UsernameTaken ->
                        signUpView form <| Just "Username is taken."

                    EmailTaken ->
                        signUpView form <| Just "Email is taken."

                    _ ->
                        ErrorPage.userError response

            Err msg ->
                ErrorPage.userError response
    else
        ErrorPage.userError response
