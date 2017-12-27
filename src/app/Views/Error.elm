module Views.Error exposing (..)

import Err exposing (InputError, Oops(Input, NotFound))
import Html exposing (..)
import Html.Attributes exposing (..)
import Http exposing (Error(BadPayload), Response)
import Messages exposing (Msg)
import Models exposing (..)
import Routes exposing (Route(HomeRoute), path)


view : Err.Oops -> Html Msg
view err =
    case err of
        Err.Http response ->
            case response of
                Http.BadStatus response ->
                    common <| ue response

                BadPayload _ response ->
                    common <| ue response

                _ ->
                    common ne

        NotFound ->
            common nf

        Input e ->
            common ne


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
        , a [ href <| path <| HomeRoute Nothing ] [ text "Go back to home page" ]
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
        , a [ href <| path <| HomeRoute Nothing ] [ text "Go back to home page" ]
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
        , a [ href <| path <| HomeRoute Nothing ] [ text "Go back to home page" ]
        ]
    ]
