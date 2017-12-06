module Common.Views.ErrorPage exposing (..)

import Common.Model exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Messages exposing (Msg)
import Routes exposing (Route(HomeRoute), toPath)


notFound : View Msg
notFound =
    { mobile = nf, tablet = nf }


nf : Html Msg
nf =
    div [ class "dg-error-page" ]
        [ div [ class "container" ]
            [ section [ class "row section" ]
                [ div [ class "col s12 xl8 offset-xl2" ]
                    [ section [ class "section" ]
                        [ h1 [] [ text "404" ]
                        , span [] [ text "Page Not Found" ]
                        , p []
                            [ text "The page you are looking for is not available. Please check the URL and try again, or go back to "
                            , a [ href <| toPath HomeRoute ] [ text "home page" ]
                            , text "."
                            ]
                        ]
                    ]
                ]
            ]
        ]



{- ,
   div [ class "card" ]
      [ div [ class "card-content" ]
          [ div [ class "valign-wrapper" ]
              [ i [ class "material-icons prefix small section" ] [ text "error_outline" ]
              , span [ class "" ] [ text "Page Not Found" ]
              ]
          , p [ class "section" ]
              [ text "The page you are looking for is not available. Please check teh URL and try again, or go back to home page "
              , a [ href <| toPath HomeRoute ] [ text "dennis academy" ]
              , text "."
              ]
          , p [ class "section" ]
              [ text "Error"
              ]
          ]
      ]
-}
