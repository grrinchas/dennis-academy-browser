module User.Views.SignUp exposing (..)

import Char
import Common.Model exposing (View)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Http
import Json.Decode
import Messages exposing (..)
import Routes exposing (Route(LoginRoute, SignUpRoute), toPath)
import Common.Views.Text as Text
import User.Decoders
import User.Model exposing (..)


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


signUpPage : SignUpForm -> Maybe String -> Html Msg
signUpPage form response =
    div [ class "dg-center dg-registration" ]
        [ Html.form []
            [ div [ class "dg-center dg-nav-height card-title dg-reg-header" ]
                [ span [] [ text "Sign up with" ]
                ]
            , if response == Nothing then
                div [ class "divider" ] []
              else
                div [ class "dg-response-error" ] [ i [ class "material-icons prefix " ] [ text "error_outline" ], div [] [ text <| Maybe.withDefault "" response ] ]
            , div [ class "divider" ] []
            , div [ class "card-content" ]
                [ thirdParty
                , span [ class "dg-text-grey dg-text-bold card-title center-align" ] [ Text.or ]
                , div [ class "input-field" ]
                    [ i [ class "material-icons prefix" ] [ text "person" ]
                    , input
                        [ type_ "text"
                        , placeholder "Username"
                        , value form.username
                        , maxlength 30
                        , onInput (\x -> OnSignUpForm <| Username x)
                        , classList [ ( "dg-valid", isValid <| username form.username ), ( "dg-not-valid", not <| isValid <| username form.username ) ]
                        , class "dg-input"
                        ]
                        []
                    , div [ class "dg-data-error" ] [ text <| validateUsername form.username ]
                    ]
                , div [ class "input-field" ]
                    [ i [ class "material-icons prefix" ] [ text "email" ]
                    , input
                        [ type_ "email"
                        , placeholder "Email"
                        , value form.email
                        , onInput (\x -> OnSignUpForm <| Email x)
                        , classList [ ( "dg-valid", isValid <| email form.email ), ( "dg-not-valid", not <| isValid <| email form.email ) ]
                        , class "dg-input"
                        ]
                        []
                    , div [ class "dg-data-error" ] [ text <| validateEmail form.email ]
                    ]
                , div [ class "input-field" ]
                    [ i [ class "material-icons prefix" ] [ text "lock" ]
                    , input
                        [ type_ "password"
                        , placeholder "Password"
                        , value form.password
                        , onInput (\x -> OnSignUpForm <| Password x)
                        , classList [ ( "dg-valid", isValid <| password form.password ), ( "dg-not-valid", not <| isValid <| password form.password ) ]
                        , class "dg-input"
                        ]
                        []
                    , div [ class "dg-data-error" ] [ text <| validatePassword form.password ]
                    ]
                , div [ class "input-field" ]
                    [ i [ class "material-icons prefix" ] [ text "lock" ]
                    , input
                        [ type_ "password"
                        , placeholder "Password Repeat"
                        , value form.repeat
                        , onInput (\x -> OnSignUpForm <| Repeat x)
                        , classList [ ( "dg-valid", isValid <| repeatPassword form.password form.repeat ), ( "dg-not-valid", not <| isValid <| repeatPassword form.password form.repeat ) ]
                        , class "dg-input"
                        ]
                        []
                    , div [ class "dg-data-error" ] [ text <| validateRepeat form.password form.repeat ]
                    ]
                , div [ class "valign-wrapper" ]
                    [ a
                        [ class "btn dg-primary-colour dg-right "
                        , classList [ ( "disabled", allValid form ) ]
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


errorView : Http.Error -> SignUpForm -> View Msg
errorView err form =
    case err of
        Http.BadStatus response ->
            if response.status.code == 400 then
                case Json.Decode.decodeString User.Decoders.decodeError response.body of
                    Ok result ->
                        case result.code of
                            UsernameTaken ->
                                signUpView form <| Just "Username is taken."

                            EmailTaken ->
                                signUpView form <| Just "Email is taken."

                            _ ->
                                signUpView form <| Just ("Response code is not recognised: " ++ response.body)

                    Err msg ->
                        signUpView form <| Just ("Json parsing has failed: " ++ msg)
            else
                signUpView form <| Just ("Response code is not recognised" ++ response.body)

        _ ->
            signUpView form <| Just "Serious error"


validUser : SignUpForm -> Maybe ValidUser
validUser form =
    Result.map3 ValidUser (username form.username) (email form.email) (password form.password)
        |> Result.toMaybe


isValid : Result a b -> Bool
isValid result =
    Result.toMaybe result |> (==) Nothing |> not


allValid : SignUpForm -> Bool
allValid form =
    [ username form.username, email form.email, password form.password, repeatPassword form.password form.repeat ]
        |> List.map isValid
        |> List.any ((==) False)


validateRepeat : String -> String -> String
validateRepeat pass repeat =
    case repeatPassword pass repeat of
        Err Empty ->
            "Please enter."

        Ok _ ->
            String.fromChar (Char.fromCode 96)

        _ ->
            "Do not match."


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
