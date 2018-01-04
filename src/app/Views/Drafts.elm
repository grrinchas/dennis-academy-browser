module Views.Drafts exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Models exposing (Draft, Msg(UpdateRoute))
import Routes exposing (Route(DraftRoute, HomeRoute))


view : List Draft -> Html Msg
view drafts =
    div [ class "dg-draft container" ]
        [ div [ class "row section" ] []
        , div [ class "row" ]
            [ h1 [] [ text "Your drafts:" ] ]
        , div [ class "row " ]
            (List.map listCard drafts)
        ]


listCard : Draft -> Html Msg
listCard draft =
    div [ class "col s12 xl6" ]
        [ div [ class "card small" ]
            [ div [ class "card-content" ]
                [ span [ class "card-title" ] [ text draft.title ]
                , p [ class "text-black" ] [ text draft.content ]
                ]
            , div [ class "card-action" ]
                [ small [] [ text <| "ID: " ++ draft.id ]
                , a [ class "right delete-draft" ] [ i [ class "material-icons" ] [ text "delete" ] ]
                , a [ class "right", onClick <| UpdateRoute <| DraftRoute draft.id ] [ i [ class "material-icons" ] [ text "create" ] ]
                ]
            ]
        ]
