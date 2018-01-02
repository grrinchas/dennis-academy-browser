module Views.Draft exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Markdown
import Models exposing (..)
import Views.NavBar exposing (publishMenu)


view : Draft -> Html Msg
view draft =
    div [ class "dg-editor " ]
        [ div [ class "row header-row " ]
            [ div [ class "col s6 header-md " ]
                [ small [] [ text <| "ID: " ++ draft.id ]
                , a [ class "right dg-save-draft", onClick <| SaveDraft draft ] [ small [] [ text "SAVE" ] ]
                ]
            , div
                [ class "col s6 " ]
                [ small [] [ text "HTML" ]
                , a [ class "right" ] [ small [] [ text "PREVIEW" ] ]
                ]
            ]
        , div [ class "row editor-row" ]
            [ div [ class "col s6 editor-ta" ]
                [ textarea [ onInput (\content -> OnDraftChange { draft | content = content }) ] [ text draft.content ] ]
            , div [ class "col s6 dg-preview" ]
                [ Markdown.toHtml [] draft.content ]
            ]
        ]
