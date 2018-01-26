module Views.Landing exposing (..)

import Components exposing (newLoader, publicationCard)
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Markdown
import Models exposing (..)
import RemoteData exposing (RemoteData(Loading, Success))


view : Model -> Html Msg
view model =
    div [ class "" ]
        [

       {-  div [ class "valign-wrapper" ]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]

            , ul [ class "tabs right flex-flex-end" ]
                [li [class "left-padding tab"] [ sortDraft model.menu ]
                , li [class "left-padding tab"] [ filterPublic model.menu ]
                , li [class "left-padding tab"] [ refresh model.remote.refreshedPublicDrafts ]
                ]
            ]
        , div [ class "divider" ] []

        -}

         div [ class "row container section" ] <|
            case model.remote.publications of
                Success pubs ->
                    List.map (publicationCard model.menu ) <| Dict.values pubs
                    --(sortBy (draftFilter model.menu user <| Dict.values drafts) model.menu.sortDraft.sortBy)
                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]
        ]
