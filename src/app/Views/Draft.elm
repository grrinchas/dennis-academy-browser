module Views.Draft exposing (..)

import Components exposing (loader, newLoader, withLoader)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Markdown
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Time exposing (Time)


view : Model -> Maybe Draft -> Html Msg
view model draft =
    div [ class "draft-editor " ] <|
        case ( model.remote.user, draft ) of
            ( Success user, Just draft ) ->
                display model draft

            _ ->
                [div [class "loader-wrapper"] [ newLoader [] ]]



display : Model -> Draft -> List (Html Msg)
display model draft =
    [ div [ class "row reset-margin-bottom title" ]
        [ input
            [ class "col no-style"
            , placeholder "Enter new title..."
            , value draft.title
            , onInput (\title -> WhenDraftChanges { draft | title = title })
            ]
            []
        ]
    , div [ class "row header-row reset-margin-bottom" ]
        [ div [ class "col s6 header-md " ]
            [ small [] [ strong [] [ text "CREATED: " ], span [] [ text <| formatUpdated (Date.toTime draft.createdAt) model.now ] ]
            , save model.remote.savedDraft draft
            ]
        , div
            [ class "col s6 " ]
            [ small [] [ text "HTML" ]
            , a [ class "right " ] [ small [] [ text "PREVIEW" ] ]
            ]
        ]
    , div [ class "row editor-row" ]
        [ div [ class "col s6 editor-ta" ]
            [ textarea [ onInput (\content -> WhenDraftChanges { draft | content = content }) ] [ text draft.content ] ]
        , div [ class "col s6 dg-preview" ]
            [ Markdown.toHtml [] draft.content ]
        ]
    ]


save : WebData Draft -> Draft -> Html Msg
save webDraft draft =
    case webDraft of
        NotAsked ->
            a [ class "right clickable block", onClick <| ClickUpdateDraft draft ] [ small [] [ text "SAVE" ] ]

        Loading ->
            div [ class "right" ] [ newLoader [class "tiny"]]

        Success savedDraft ->
            case savedDraft.content == draft.content && savedDraft.title == draft.title of
                True ->
                    div [ class "right" ] [ small [] [ text "Saved successfully!" ] ]

                False ->
                    a [ class "right clickable block", onClick <| ClickUpdateDraft draft ] [ small [] [ text "SAVE" ] ]

        Failure err ->
            div [ class "fg-error-color right" ] [ small [] [ text "Can't save!" ] ]


formatCreated : Date -> String
formatCreated date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)


formatUpdated : Time -> Time -> String
formatUpdated created updated =
    let
        diff =
            updated - created
    in
        if (diff < 60000) then
            (toString <| round (Time.inSeconds diff)) ++ " seconds ago"
        else if (diff < 3600000) then
            (toString <| round (Time.inMinutes diff)) ++ " minutes ago"
        else if (diff < 86400000) then
            (toString <| round (Time.inHours diff)) ++ " hours ago"
        else
            (toString <| (%) (round (Time.inHours diff)) 24) ++ " days ago"
