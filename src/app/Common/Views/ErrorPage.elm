module Common.Views.ErrorPage exposing (..)

import Common.Model exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Http exposing (Response)
import Messages exposing (Msg)
import Routes exposing (Route(HomeRoute), toPath)


userError : Response a -> View msg
userError response =
    { mobile = common <| ue response, tablet = common <| ue response }


networkError : View msg
networkError =
    { mobile = common ne, tablet = common ne }


notFound : View Msg
notFound =
    { mobile = common nf, tablet = common nf }


ue : Response a -> List (Html msg)
ue response =
    [ section [ class "section" ]
        [ h1 []
            [ (if response.status.code == 200 then
                400
               else
                response.status.code
              )
                |> toString
                |> text
            ]
        , span [] [ text "Something went wrong" ]
        , h5 [] [ text response.url ]
        , p []
            [ text "Looks like there was an error on this page. Click the link below and try again."
            ]
        , a [ href <| toPath HomeRoute ] [ text "Go back to home page" ]
        ]
    , section [ class "card" ]
        [ div [ class "card-content" ]
            [ text <| toString response.body
            ]
        ]
    ]


ne : List (Html msg)
ne =
    [ section [ class "section" ]
        [ h1 [] [ text "Oops!" ]
        , span [] [ text "Something went wrong" ]
        , p []
            [ text "Looks like there was an error on this page. Click the link below and try again."
            ]
        , a [ href <| toPath HomeRoute ] [ text "Go back to home page" ]
        ]
    ]


common : List (Html msg) -> Html msg
common view =
    div [ class "dg-error-page" ]
        [ div [ class "container" ]
            [ section [ class "row section" ]
                [ div [ class "col s12 xl8 offset-xl2" ]
                    view
                ]
            ]
        ]


nf : List (Html Msg)
nf =
    [ section [ class "section" ]
        [ h1 [] [ text "404" ]
        , span [] [ text "Page Not Found" ]
        , p []
            [ text "The page you are looking for is not available. Please check the URL and try again." ]
        , a [ href <| toPath HomeRoute ] [ text "Go back to home page" ]
        ]
    ]
