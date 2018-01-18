module Views.Drafts exposing (..)

import Components exposing (draftCard, loader, newLoader)
import Date exposing (Date)
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (Route(DraftRoute, DraftsRoute, HomeRoute, ProfileRoute, PublicDraftsRoute), path)


view : Bool -> Model -> Html Msg
view bool model =
    div [ class "" ]
        [ ul [ class "tabs" ]
            [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
            , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
            ]
        , div [ class "divider"] []
        , div [ class "row section container " ] <|
            case model.remote.user of
                Success user ->
                    (List.sortBy (\date -> Date.toTime <| .createdAt date) (Dict.values user.drafts)
                        |> List.reverse
                        |> List.map (draftCard model.menu user)
                    )

                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]
        ]


publicView : Bool -> Model -> Html Msg
publicView bool model =
    div [ class "" ]
        [ div [ class "valign-wrapper" ]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]

            , ul [ class "tabs right flex-flex-end" ]
                [ li [class "left-padding tab"] [ display model.menu ]
                , li [class "left-padding tab"] [ filterPublic model.menu ]
                , li [class "left-padding tab"] [ refresh model.remote.refreshedPublicDrafts ]
                ]
            ]
        , div [ class "divider" ] []
        , div [ class "row container section" ] <|
            case RemoteData.append model.remote.publicDrafts model.remote.user of
                Success ( drafts, user ) ->
                    case (model.menu.filterDraft.publicDraftsPage.mine, model.menu.filterDraft.publicDraftsPage.others) of
                        (True,True) ->
                            List.map (draftCard model.menu user) drafts

                        (True, False) ->
                            List.filter (\d-> d.owner.username == user.username) drafts
                                |> List.map (draftCard model.menu user)
                        (False, True) ->
                            List.filter (\d-> d.owner.username /= user.username) drafts
                                |> List.map (draftCard model.menu user)

                        (False, False)-> List.map (draftCard model.menu user) []

                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]
        ]


refresh : WebData () -> Html Msg
refresh web =
    case web of
        Loading ->
            div [ class "" ] [ newLoader [class "tiny"]]

        _ ->
             span [ class "tooltip-wrapper clickable" ]
            [ i [ class "material-icons", onClick ClickRefreshPublicDrafts ] [ text "autorenew" ]
            , small [ class "tooltip top-30-right-0 no-transform" ] [ text "Refresh" ]
            ]



filterMenuEvent : DisplayMenu -> Attribute Msg
filterMenuEvent menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuFilterDraft menu)

displayMenuEvent : Attribute Msg
displayMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuDisplayDraft


filterPublicMineMenuEvent : Bool -> DisplayMenu -> Attribute Msg
filterPublicMineMenuEvent bool menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuFilterPublicDraftMine bool menu)

filterPublicOthersMenuEvent : Bool -> DisplayMenu -> Attribute Msg
filterPublicOthersMenuEvent bool menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuFilterPublicDraftOthers bool menu)




filterPublicMenu : DisplayMenu -> Html Msg
filterPublicMenu menu =
    ul [  class "dropdown-content top-55-right-0", classList [ ( "active", menu.filterDraft.display ) ] ]
        [
        case menu.filterDraft.publicDraftsPage.mine of
            True ->
                li [] [ a [ class "block", filterPublicMineMenuEvent False menu]
                 [ i [ class "material-icons", classList [("visible", True)] ] [ text "done" ], text "Mine" ] ]
            False ->
                li [] [ a [ class "block", filterPublicMineMenuEvent True menu]
                 [ i [ class "material-icons",  classList [("not-visible", True)] ] [ text "done" ], text "Mine" ] ]
        ,
        case menu.filterDraft.publicDraftsPage.others of
            True ->
                li [] [ a [ class "block", filterPublicOthersMenuEvent False menu]
                 [ i [ class "material-icons", classList [("visible", True)] ] [ text "done" ], text "Others" ] ]
            False ->
                li [] [ a [ class "block", filterPublicOthersMenuEvent True menu]
                 [ i [ class "material-icons",  classList [("not-visible", True)] ] [ text "done" ], text "Others" ] ]

        ]



filterPublic : DisplayMenu -> Html Msg
filterPublic menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", filterMenuEvent menu] [ text "FILTER" ]
        , i [ class "material-icons clickable", filterMenuEvent menu] [ text "arrow_drop_down" ]
        , filterPublicMenu menu
        ]






display : DisplayMenu -> Html Msg
display menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", displayMenuEvent ] [ text "DISPLAY" ]
        , i [ class "material-icons clickable", displayMenuEvent ] [ text "arrow_drop_down" ]
        , displayMenu menu
        ]

displayMenu : DisplayMenu -> Html Msg
displayMenu menu =
    ul [ displayMenuEvent, class "dropdown-content top-55-right-0", classList [ ( "active", menu.displayDraft ) ] ]
        [ li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Show all" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Mine" ] ]
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Others" ] ]
        ]

