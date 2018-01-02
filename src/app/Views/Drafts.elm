module Views.Drafts exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Models exposing (Draft, Msg(UpdateRoute))
import Routes exposing (Route(DraftRoute, HomeRoute))


{-

   mobile : List Draft -> Html Msg
   mobile topics =
       div [ class "dg-no-margins collection" ]
           (List.map
               listItem
               topics
           )


   listItem : Draft -> Html msg
   listItem draft =
       --  a [ href <| Routes.toPath <| TopicRoute topic.slug, class "collection-item avatar" ]
       a []
           [ img [ src topic.icon, class "circle", style [ ( "background-color", topic.colour ) ] ] []
           , span [ class "title dg-text-black" ] [ text topic.title ]
           , p [ class "dg-text-black" ] [ text topic.description ]
           ]


   view : List Topic -> View Msg
   view topics =
       { mobile = mobile topics
       , tablet = tablet topics
       }
-}


view : List Draft -> Html Msg
view drafts =
    div [ class "dg-draft container" ]
        [ div [ class "row" ]
            (List.map listCard drafts)
        ]


listCard : Draft -> Html Msg
listCard draft =
    div [ class "col s6 l4 " ]
        [ div [ class "card small hoverable", onClick <| UpdateRoute <| DraftRoute draft.id ]
            [ div [ class "card-content" ]
                [ span [ class "card-title" ] [ text draft.id ]
                , p [ class "text-black" ] [ text draft.content ]
                ]
            , div [ class "card-action" ]
                [ a [] [ text draft.draftType ]
                ]
            ]
        ]
