module Views.Draft exposing (..)

import Components exposing (loader, withLoader)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Markdown
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Views.NavBar exposing (publishMenu)


view : WebData Draft -> Draft -> Html Msg
view webDraft draft =
    div [ class "dg-editor " ]
        [ div [ class "row header-row " ]
            [ div [ class "col s6 header-md" ]
                [ small [] [ text <| "ID: " ++ draft.id ]
                , save webDraft draft
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


save : WebData Draft -> Draft -> Html Msg
save webDraft draft =
    case webDraft of
        NotAsked ->
            a [ class "right dg-save-draft", onClick <| SaveDraft draft ] [ small [] [ text "SAVE" ] ]

        Loading ->
            div [ class "right draft-loader valign-wrapper" ] [ loader ]

        Success savedDraft ->
            case savedDraft.content == draft.content of
                True ->
                    div [ class "save" ] [ small [] [ text "Saved successfully!" ] ]

                False ->
                    a [ class "right dg-save-draft", onClick <| SaveDraft draft ] [ small [] [ text "SAVE" ] ]

        Failure err ->
            div [ class "error-save save" ] [ small [] [ text "Can't save!" ] ]
