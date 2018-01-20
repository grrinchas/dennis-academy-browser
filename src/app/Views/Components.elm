module Components exposing (..)

import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Loading), WebData)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


icon : String -> Html msg
icon str =
    i [ class "material-icons" ] [ text str ]


empty : Html msg
empty =
    div [] []


layout : Model -> Html Msg -> Html Msg -> Html Msg
layout model head main =
    div [ class "layout" ]
        [ header [] [ head ]
        , main_ [] [ main ]
        , div [class "snackbar"
            , classList [("show", model.snackBar.display), ("hide", model.snackBar.display == False)]
            ] [ text model.snackBar.message
             , case model.snackBar.action of
                Just {msg, string} ->
                    span [ class "toast-action", onClick msg] [text string]
                Nothing ->
                    div [] []

            ]
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

newLoader : List (Attribute msg)->Html msg
newLoader attr = div (attr ++[ class "preloader-wrapper active" ]) <| List.map loaderPart [ "blue", "red", "yellow", "green" ]



deleteDraftMenuEvent : String -> DisplayMenu -> Attribute Msg
deleteDraftMenuEvent id menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges <|
                menuDeleteDraft id menu


publicDraftMenuEvent : String -> DisplayMenu -> Attribute Msg
publicDraftMenuEvent id menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges <|
                menuPublicDraft id menu


getVisibilityIcon : User -> DisplayMenu -> Draft -> Html Msg
getVisibilityIcon user menu draft =
    case draft.visibility of
        PRIVATE ->
            publicDraft user menu draft

        PUBLIC ->
            case user.username == draft.owner.username of
                True -> div [ class "tooltip-wrapper" ]
                        [ i [ class "material-icons clickable", onClick <| ClickUpdateDraft { draft | visibility = PRIVATE } ] [ text "public" ]
                        , small [ class "tooltip -top-35-right-0 " ] [ text "Make private" ]
                        ]

                False ->
                    i [ class "material-icons public " ] [ text "public" ]


formatDate : Date -> String
formatDate date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)


draftCard : DisplayMenu -> User -> Draft -> Html Msg
draftCard menu user draft =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card very-small" ]
            [div [ class "card-content reset-top-bottom flex-flex-end" ]
                [ ul [class "margin-half"] [ li [class ""] [ getVisibilityIcon user menu draft ] ] ]


            , div [ class "divider" ] []
            , div [ class "card-content hidden" ]
                [ span [ class "card-title" ] [ text <| (String.left 50 draft.title) ++ "..." ]
                , p [ class "text-black" ] [ text <| (String.left 150 draft.content) ++ "..." ]
                ]
            , div [ class "card-action flex-space-between" ]
                [ div [ class "valign-wrapper" ]
                    [ img [ class "circle medium", src draft.owner.picture ] []
                    , div []
                        [ a [ href <| path <| ProfileRoute draft.owner.username, class "fg-link-color no-transform " ] [ text draft.owner.username ]
                        , small [ class "block fg-grey-color no-transform"] [ text <| formatDate draft.createdAt ]
                        ]
                    ]
                , ul [class "right inline reset-margin-top reset-margin-bottom"]
                 [
                    case user.username == draft.owner.username of
                        True -> li []
                                [ a [ class "tooltip-wrapper", href <| path <| DraftRoute draft.id ]
                                    [ i [ class "material-icons clickable" ] [ text "create" ]
                                    , small [ class "tooltip  no-transform -top-50-right-0" ] [ text "Edit" ]
                                    ]
                                ]

                        False ->
                            li [] []
                , li []
                        [ a [ class "tooltip-wrapper", onClick <| ClickCreateDraft draft ]
                            [ i [ class "material-icons clickable" ] [ text "content_copy" ]
                            , small [ class "tooltip no-transform -top-50-right-0" ] [ text "Duplicate" ]
                            ]
                        ]

                    , case user.username == draft.owner.username of
                        True ->
                            li [] [ deleteDraft menu draft ]

                        False ->
                            li [] []
                ]
                ]
            ]
        ]


deleteDraft : DisplayMenu -> Draft -> Html Msg
deleteDraft menu draft =
    div [ class "dropdown-wrapper" ]
        [ a [ class "tooltip-wrapper", deleteDraftMenuEvent draft.id menu ]
            [ i [ class "material-icons clickable" ] [ text "delete" ]
            , small [ class "tooltip no-transform -top-50-right-0" ] [ text "Delete" ]
            ]
        , deleteDraftMenu menu draft
        ]


publicDraft : User -> DisplayMenu -> Draft -> Html Msg
publicDraft user menu draft =
    div [ class "dropdown-wrapper" ]
        [ div [ class "tooltip-wrapper" ]
            [ i [ class "material-icons clickable opacity-quarter ", publicDraftMenuEvent draft.id menu ] [ text "public" ]
           , small [ class "tooltip -top-35-right-0 width-100" ] [ text "Make public" ]
            ]
        , publicDraftMenu menu user draft
        ]


deleteDraftMenu : DisplayMenu -> Draft -> Html Msg
deleteDraftMenu menu draft =
    div [ class "card dropdown-content  width-200 top-40-right-0 ", deleteDraftMenuEvent draft.id menu , classList [ ( "active", menu.deleteDraft.display && menu.deleteDraft.id == draft.id ) ] ]
        [ div [ class "card-content fg-text-color" ] [ p [] [ text "Are you sure you want to delete?" ] ]
        , div [ class "card-action" ] [ a [ class "right clickable", onClick <| ClickDeleteDraft draft ] [ text "delete" ] ]
        ]



publicDraftMenu : DisplayMenu -> User -> Draft -> Html Msg
publicDraftMenu menu user draft =
    div [ class "card dropdown-content width-200 top-40-right-0", publicDraftMenuEvent draft.id menu, classList [ ( "active", menu.publicDraft.display && menu.publicDraft.id == draft.id ) ] ]
        [ div [ class "card-content fg-text-color"] [ span [] [ text "Are you sure you want to make it public?" ] ]
        , div [ class "card-action" ]
            [ case user.username == draft.owner.username of
                True ->
                    a [ class "clickable right", onClick <| ClickUpdateDraft { draft | visibility = PUBLIC } ] [ text "Public" ]

                False ->
                    a [ class "clickable right" ] [ text "Public" ]
            ]

        ]
