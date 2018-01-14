module Components exposing (..)

import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (Draft, Menu, Msg(ClickCreateDraft, ClickDeleteDraft, ClickRefreshPublicDrafts, ClickUpdateDraft, WhenMenuChanges), User, Visibility(PRIVATE, PUBLIC), isMenuVisible, menuDeleteDraft, menuPublicDraft)
import RemoteData exposing (RemoteData(Loading), WebData)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


icon : String -> Html msg
icon str =
    i [ class "material-icons prefix" ] [ text str ]


empty : Html msg
empty =
    div [] []


layout : Menu -> Html msg -> Html msg -> Html msg
layout menu head main =
    div [ class "layout" ]
        [ header [] [ head ]
        , main_ [] [ main ]
        , div [ class "overlay", classList [ ( "overlay-visible", isMenuVisible menu ) ] ] []
        ]


withLoader : Html msg -> Html msg
withLoader view =
    div [ class "loader" ] [ view, loader ]


loaderPart : String -> Html msg
loaderPart color =
    div [ class ("spinner-layer spinner-" ++ color) ]
        [ div [ class "circle-clipper left" ]
            [ div [ class "circle" ] []
            ]
        , div [ class "gap-patch" ]
            [ div [ class "circle" ] []
            ]
        , div [ class "circle-clipper right" ]
            [ div [ class "circle" ] []
            ]
        ]


loader : Html msg
loader =
    div [ class "dg-loading-wrapper" ]
        [ div [ class "dg-loader" ]
            [ div [ class "preloader-wrapper active" ] <|
                List.map
                    loaderPart
                    [ "blue", "red", "yellow", "green" ]
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


getVisibilityIcon : User -> Menu -> Draft -> Html Msg
getVisibilityIcon user menu draft =
    case draft.visibility of
        PRIVATE ->
            div [ class "relative" ]
                [ span [ class "tooltip " ]
                    [ i [ class "material-icons private", publicDraftMenuEvent draft.id ] [ text "public" ]
                    , small [ class "tooltip-text tooltip-bottom" ] [ text "Make public" ]
                    ]
                , div
                    [ class "card card dg-public-draft"
                    , publicDraftMenuEvent draft.id
                    , classList [ ( "show-public-draft-menu", menu.publicDraft.display && menu.publicDraft.id == draft.id ) ]
                    ]
                    [ div [ class "card-content" ]
                        [ p [] [ text "Are you sure you want to make it public?" ]
                        ]
                    , div [ class "card-action" ]
                        [ case user.username == draft.owner.username of
                            True -> a [ class "right", onClick <| ClickUpdateDraft { draft | visibility = PUBLIC } ] [ text "Public" ]
                            False -> a [ class "right"] [ text "Public" ]

                        ]
                    ]
                ]

        PUBLIC -> case user.username == draft.owner.username of
            True -> span [ class "tooltip " ]
                [ i [ class "material-icons public", onClick <| ClickUpdateDraft { draft | visibility = PRIVATE } ] [ text "public" ]
                , small [ class "tooltip-text tooltip-bottom" ] [ text "Make private" ]
                ]
            False -> i [ class "material-icons public"] [ text "public" ]

formatDate : Date -> String
formatDate date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)


draftCard : Menu -> User -> Draft -> Html Msg
draftCard menu user draft =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card draft-card small" ]
            [ div [ class "card-content header valign-wrapper" ]
                [ ul []
                    [ li [] [ getVisibilityIcon user menu draft ] ]
                ]
            , div [ class "divider" ] []
            , div [ class "card-content" ]
                [ span [ class "card-title" ] [ text <| (String.left 50 draft.title) ++ "..." ]
                , p [ class "text-black" ] [ text <| (String.left 150 draft.content) ++ "..." ]
                ]
            , div [ class "card-action valign-wrapper" ]
                [ div [ class "valign-wrapper profile" ]
                    [ img [ class "circle not-implemented", src draft.owner.picture ] []
                    , div []
                        [ a [href <| path <| ProfileRoute draft.owner.username , class "name" ] [ text draft.owner.username ]
                        , small [ class "updated-at" ] [ text <| formatDate draft.updatedAt ]
                        ]
                    ]
                , ul [ class "draft-card-actions right" ]
                    [ case user.username == draft.owner.username of
                        True ->
                            li [] [ a [ class "tooltip", href <| path <| DraftRoute draft.id ]
                                [ i [ class "material-icons" ] [ text "create" ]
                                , small [ class "tooltip-text" ] [ text "Edit" ]
                                ] ]
                        False ->
                            li [] []
                    , li []
                        [ a [ class "tooltip",classList [("no-margin-right", user.username /= draft.owner.username)], onClick <| ClickCreateDraft draft ]

                            [ i [ class "material-icons" ] [ text "content_copy" ]
                            , small [ class "tooltip-text" ] [ text "Duplicate" ]
                            ]
                        ]
                    , case user.username == draft.owner.username of
                        True->
                           li []
                               [ div [ class "draft-card-relative" ]
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
                                           [ a [ class "right", onClick <| ClickDeleteDraft draft ] [ text "delete" ] ]
                                       ]
                                   ]
                               ]
                        False -> li [][]
                    ]
                ]
            ]
        ]

