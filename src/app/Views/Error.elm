module Views.Error exposing (..)

import Err exposing (InputError, Oops(Input, Routing))
import Html exposing (..)
import Html.Attributes exposing (..)
import Http exposing (Error(BadPayload), Response)
import Models exposing (Msg)
import Routes exposing (Route(HomeRoute), RouteError(NotAllowed, NotFound), path)


view : Err.Oops -> Html Msg
view err =
    case err of
        Err.Http response ->
            case response of
                Http.BadStatus response ->
                    common <| ue response.url (toString err)

                BadPayload _ response ->
                    common <| ue response.url (toString err)

                _ ->
                    common ne

        Routing NotFound ->
            common nf

        Routing (NotAllowed old new) ->
            common <| internal (path old) <| "Navigation is not allowed: " ++ (path old) ++ " -> " ++ (path new)

        Input e ->
            common ne


internal : String -> String -> List (Html msg)
internal route msg =
    [ section [ class "section" ]
        [ h1 []
            [ text "500" ]
        , span [] [ text "Something went wrong" ]
        , h5 [] [ text route ]
        , p []
            [ text "Looks like there was an error on this page. Click the link below and try again."
            ]
        , a [ href <| path HomeRoute ] [ text "Go back to home page" ]
        ]
    , section [ class "card" ]
        [ div [ class "card-content" ]
            [ text msg
            ]
        ]
    ]


ue : String -> String -> List (Html msg)
ue url response =
    [ section [ class "section" ]
        [ h1 []
            [ text <| toString 400 ]
        , span [] [ text "Something went wrong" ]
        , h5 [] [ text url ]
        , p []
            [ text "Looks like there was an error on this page. Click the link below and try again."
            ]
        , a [ href <| path HomeRoute ] [ text "Go back to home page" ]
        ]
    , section [ class "card" ]
        [ div [ class "card-content" ]
            [ text response
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
        , a [ href <| path HomeRoute ] [ text "Go back to home page" ]
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
        , a [ href <| path HomeRoute ] [ text "Go back to home page" ]
        ]
    ]
