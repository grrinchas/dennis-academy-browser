module Views.Drafts exposing (..)

import Date exposing (Date)
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (Draft, Menu, Msg(CreateDraft, DeleteDraft, OnMenuChange, UpdateRoute), User, initialMenu, menuDeleteDraft)
import Routes exposing (Route(DraftRoute, HomeRoute), path)


view : Menu -> User -> Html Msg
view menu user =
    div [ class "dg-draft " ]
        [ ul [ class "tabs" ]
            [ li [ class "tab" ] [ a [ class "not-implemented" ] [ text "Mine" ] ]
            , li [ class "tab" ] [ a [ class "not-implemented" ] [ text "Community" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            (Dict.values user.drafts
                |> List.sortBy (\date -> Date.toTime <| .updatedAt date)
                |> List.reverse
                |> List.map (listCard menu user)
            )
        ]


listCard : Menu -> User -> Draft -> Html Msg
listCard menu user draft =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card small" ]
            [ div [ class "card-content header valign-wrapper" ]
                [ ul []
                    [ li []
                        [ span [ class "tooltip " ]
                            [ i [ class "material-icons public" ] [ text "public" ]
                            , small [ class "tooltip-text tooltip-bottom" ] [ text "Make public" ]
                            ]
                        ]
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
                        [ a [ class "tooltip", onClick <| CreateDraft draft ]
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
                                    [ a [ class "right", onClick <| DeleteDraft draft ] [ text "delete" ]
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
            OnMenuChange <|
                menuDeleteDraft id


formatDate : Date -> String
formatDate date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)
