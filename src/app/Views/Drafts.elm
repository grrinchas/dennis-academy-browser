module Views.Drafts exposing (..)

import Components exposing (loader)
import Date exposing (Date)
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (Route(DraftRoute, DraftsRoute, HomeRoute, PublicDraftsRoute), path)


view : Bool -> Menu -> User -> Html Msg
view bool menu user =
    div [ class "dg-draft " ]
        [ ul [ class "tabs" ]
            [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
            , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            (Dict.values user.drafts
                |> List.sortBy (\date -> Date.toTime <| .createdAt date)
                |> List.reverse
                |> List.map (listCard menu user)
            )
        ]


getVisibilityIcon : Menu -> Draft -> Html Msg
getVisibilityIcon menu draft =
    case draft.visibility of
        PRIVATE ->
            div [ class "relative" ]
                [ span [ class "tooltip " ]
                    [ i [ class "material-icons private", publicDraftMenuEvent draft.id ] [ text "public" ]
                    , small [ class "tooltip-text tooltip-bottom" ] [ text "Make public" ]
                    ]
                , div
                    [ class "card dg-public-draft"
                    , publicDraftMenuEvent draft.id
                    , classList [ ( "show-public-draft-menu", menu.publicDraft.display && menu.publicDraft.id == draft.id ) ]
                    ]
                    [ div [ class "card-content" ]
                        [ p [] [ text "Are you sure you want to make it public?" ]
                        ]
                    , div [ class "card-action" ]
                        [ a [ class "right", onClick <| ClickUpdateDraft { draft | visibility = PUBLIC } ] [ text "Public" ]
                        ]
                    ]
                ]

        PUBLIC ->
            span [ class "tooltip " ]
                [ i [ class "material-icons public", onClick <| ClickUpdateDraft { draft | visibility = PRIVATE } ] [ text "public" ]
                , small [ class "tooltip-text tooltip-bottom" ] [ text "Make private" ]
                ]


listCard : Menu -> User -> Draft -> Html Msg
listCard menu user draft =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card small" ]
            [ div [ class "card-content header valign-wrapper" ]
                [ ul []
                    [ li [] [ getVisibilityIcon menu draft ]
                    ]
                ]
            , div [ class "divider" ] []
            , div [ class "card-content" ]
                [ span [ class "card-title" ] [ text <| (String.left 50 draft.title) ++ "..." ]
                , p [ class "text-black" ] [ text <| (String.left 150 draft.content) ++ "..." ]
                ]
            , div [ class "card-action valign-wrapper" ]
                [ div [ class "valign-wrapper profile" ]
                    [ img [ class "circle not-implemented", src user.picture ] []
                    , div []
                        [ a [ class "name not-implemented" ] [ text user.username ]
                        , small [ class "updated-at" ] [ text <| formatDate draft.updatedAt ]
                        ]
                    ]
                , ul [ class "actions right" ]
                    [ li []
                        [ a [ class "tooltip", href <| path <| DraftRoute draft.id ]
                            [ i [ class "material-icons" ] [ text "create" ]
                            , small [ class "tooltip-text" ] [ text "Edit" ]
                            ]
                        ]
                    , li []
                        [ a [ class "tooltip", onClick <| ClickCreateDraft draft ]
                            [ i [ class "material-icons" ] [ text "content_copy" ]
                            , small [ class "tooltip-text" ] [ text "Duplicate" ]
                            ]
                        ]
                    , li []
                        [ div [ class "relative" ]
                            [ a [ class "delete-draft tooltip", deleteDraftMenuEvent draft.id ]
                                [ i [ class "material-icons" ] [ text "delete" ]
                                , small [ class "tooltip-text" ] [ text "Delete" ]
                                ]
                            , div
                                [ class "card dg-delete-draft"
                                , deleteDraftMenuEvent draft.id
                                , classList [ ( "show-delete-draft-menu", menu.deleteDraft.display && menu.deleteDraft.id == draft.id ) ]
                                ]
                                [ div [ class "card-content" ]
                                    [ p [] [ text "Are you sure you want to delete?" ]
                                    ]
                                , div [ class "card-action" ]
                                    [ a [ class "right", onClick <| ClickDeleteDraft draft ] [ text "delete" ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]

            {-
               [ small [] [ text <| "ID: " ++ draft.id ]
               ]
            -}
            ]
        ]


deleteDraftMenuEvent : String -> Attribute Msg
deleteDraftMenuEvent id =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges <|
                menuDeleteDraft id


publicDraftMenuEvent : String -> Attribute Msg
publicDraftMenuEvent id =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges <|
                menuPublicDraft id


formatDate : Date -> String
formatDate date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)


publicView : Bool -> Menu -> List PublicDraft -> WebData ()-> Html Msg
publicView bool menu drafts webRefresh =
    div [ class "dg-draft" ]
        [ div [class "dg-tabs valign-wrapper"]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]
            , div [class "refresh"]
                [ refresh webRefresh
                ]
            ]

        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            (drafts
                |> List.sortBy (\draft -> Date.toTime <| .createdAt draft.draft)
                |> List.reverse
                |> List.map (publicListCard menu)
            )
        ]

refresh : WebData () -> Html Msg
refresh web =
    case web of
        Loading ->
            div [ class "right draft-loader valign-wrapper" ] [ loader ]
        _ ->
             i [class "material-icons", onClick ClickRefreshPublicDrafts] [text "autorenew"]



publicListCard : Menu -> PublicDraft -> Html Msg
publicListCard menu public =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card small" ]
            [ div [ class "card-content" ]
                [ span [ class "card-title" ] [ text <| (String.left 50 public.draft.title) ++ "..." ]
                , p [ class "text-black" ] [ text <| (String.left 150 public.draft.content) ++ "..." ]
                ]
            , div [ class "card-action valign-wrapper" ]
                [ div [ class "valign-wrapper profile" ]
                    [ img [ class "circle not-implemented", src public.owner.picture ] []
                    , div []
                        [ a [ class "name not-implemented" ] [ text public.owner.username ]
                        , small [ class "updated-at" ] [ text <| formatDate public.draft.updatedAt ]
                        ]
                    ]
                , ul [ class "actions right" ]
                    [ li []
                        [ a [ class "tooltip delete-draft", onClick <| ClickCreateDraft public.draft ]
                            [ i [ class "material-icons " ] [ text "content_copy" ]
                            , small [ class "tooltip-text" ] [ text "Copy" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
