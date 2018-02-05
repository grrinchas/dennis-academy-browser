module Components exposing (..)

import Date exposing (Date)
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Markdown
import Models exposing (..)
import RemoteData exposing (RemoteData(Loading), WebData)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)
import Views.Attributes exposing (..)


empty : Html msg
empty =
    div [] []


divider: Html msg
divider = div [class "divider"] []



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


newLoader : List (Attribute msg)->Html msg
newLoader attr = div (attr ++[ class "preloader-wrapper active" ]) <| List.map loaderPart [ "blue", "red", "yellow", "green" ]




getVisibilityIcon : User -> DisplayMenu -> Draft -> Html Msg
getVisibilityIcon user menu draft =
    case draft.visibility of
        PRIVATE ->
            publicDraft user menu draft

        PUBLIC ->
            case user.username == draft.owner.username of
                True -> div [ tooltipWrapper ]
                        [ i [materialIcons, clickable, onClickMakeDraftPrivate draft] [ text "public" ]
                        , small [tooltip, class "-top-35-right-0 " ] [ text "Make private" ]
                        ]

                False ->
                    i [materialIcons] [ text "public" ]


formatDate : Date -> String
formatDate date =
    toString (Date.year date)
        |> (++) ", "
        |> (++) (toString <| Date.day date)
        |> (++) " "
        |> (++) (toString <| Date.month date)


getLikes : Draft -> User -> Html Msg
getLikes draft user =
    div [class "valign-wrapper"]
        [ case (user.username /= draft.owner.username, Dict.member draft.id user.likedDrafts ) of
               (True, False) ->
                div [ tooltipWrapper]
                      [ i [materialIcons, clickable, foreground ErrorColor, onClickLikeDraft draft] [ text "favorite_border" ]
                      , small [tooltip, class "-top-35-right-0 " ] [ text "Like" ]
                      ]

               (True, True) ->
                div [ tooltipWrapper]
                      [ i [materialIcons, clickable, foreground ErrorColor, onClickUnLikeDraft draft] [ text "favorite" ]
                      , small [tooltip, class "-top-35-right-0 " ] [ text "Unlike" ]
                      ]

               (False, _) ->
                      i [ materialIcons, foreground ErrorColor, opacity Quarter ] [ text "favorite_border" ]

        , if draft.likes == 0 then
            span [][]
          else
            if user.username == draft.owner.username then
                span [opacity Quarter, foreground ErrorColor, class "likes "] [text <| toString draft.likes]
            else
                span [ foreground ErrorColor,class "likes"] [text <| toString draft.likes]
        ]



draftCard : DisplayMenu -> User -> Draft -> Html Msg
draftCard menu user draft =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card very-small" ]
            [
            div [ class "card-content reset-top-bottom flex-space-between" ]
                [ getLikes draft user
                , getVisibilityIcon user menu draft
                ]
            , divider
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
                                [ a [tooltipWrapper, toDraftPage draft ]
                                    [ i [ materialIcons, clickable] [ text "create" ]
                                    , small [tooltip, class "no-transform -top-50-right-0" ] [ text "Edit" ]
                                    ]
                                ]

                        False ->
                            li [] []
                , li []
                        [ a [ tooltipWrapper, onClickCreateDraft draft]
                            [ i [materialIcons, clickable]
                                [text "content_copy" ]
                            , small [tooltip, class "no-transform -top-50-right-0" ]
                                [ text "Duplicate" ]
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
        [ a [tooltipWrapper, onClickDeleteMenu draft.id menu]
            [ i [clickable, materialIcons][text "delete"]
            , small [tooltip, class "no-transform -top-50-right-0" ] [ text "Delete" ]
            ]
        , div [ class "card dropdown-content  width-200 top-40-right-0 "
            , onClickDeleteMenu draft.id menu
            , classList [ ( "active", menu.delete.display && menu.delete.id == draft.id ) ]
            ]
            [ div [ class "card-content fg-text-color" ] [ p [] [ text "Are you sure you want to delete?" ] ]
            , div [ class "card-action" ] [ a [clickable, floatRight, onClickDeleteDraft draft ] [ text "delete" ] ]
            ]
        ]


publicDraft : User -> DisplayMenu -> Draft -> Html Msg
publicDraft user menu draft =
    div [ class "dropdown-wrapper" ]
        [ div [ class "tooltip-wrapper" ]
            [ i [ class "material-icons clickable opacity-quarter ", onClickPublicDraftMenu draft menu] [ text "public" ]
            , small [ class "tooltip -top-35-right-0 width-100" ] [ text "Make public" ]
            ]
        , div [ class "card dropdown-content width-200 top-40-right-0"
              , onClickPublicDraftMenu draft menu
              , classList [ ( "active" , menu.publicDraft.display && menu.publicDraft.id == draft.id ) ]
              ]
         [ div [ class "card-content fg-text-color"] [ span [] [ text "Are you sure you want to make it public?" ] ]
       , div [ class "card-action" ]
           [
           case isUserDraftOwner user draft of
               True ->
                   a [ clickable, floatRight, onClickMakeDraftPublic draft] [ text "Public" ]

               False ->
                   a [clickable, floatRight] [text "Public"]
           ]
       ]

        ]




