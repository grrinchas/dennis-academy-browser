module Views.Text exposing (..)

import Html exposing (Html, text)


next : Html msg
next =
    text "next"


previous : Html msg
previous =
    text "prev"


or : Html msg
or =
    text "or"


login : Html msg
login =
    text "Login"


signUp : Html msg
signUp =
    text "Sign Up"


readMore : Html msg
readMore =
    text "Read more"


forgotPassword : Html msg
forgotPassword =
    text "Forgot password?"


doNotHaveAccount : Html msg
doNotHaveAccount =
    text "Don't have an account?"


alreadyHaveAccount : Html msg
alreadyHaveAccount =
    text "Already have an account?"

