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
                , li [class "left-padding tab"] [ filter model.menu ]
                , li [class "left-padding tab"] [ refresh model.remote.refreshedPublicDrafts ]
                ]
            ]
        , div [ class "divider" ] []
        , div [ class "row container section" ] <|
            case RemoteData.append model.remote.publicDrafts model.remote.user of
                Success ( drafts, user ) ->
                    (drafts
                        |> List.sortBy (\draft -> Date.toTime <| .createdAt draft)
                        |> List.reverse
                        |> List.map (draftCard model.menu user)
                    )

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



filterMenuEvent : Attribute Msg
filterMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuFilterDraft


displayMenuEvent : Attribute Msg
displayMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuDisplayDraft


filterMenu : Menu -> Html Msg
filterMenu menu =
    ul [ filterMenuEvent, class "dropdown-content top-55-right-0", classList [ ( "active", menu.filterDraft ) ] ]
        [ li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Show all" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Mine" ] ]
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Others" ] ]
        ]



filter : Menu -> Html Msg
filter menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", filterMenuEvent ] [ text "FILTER" ]
        , i [ class "material-icons clickable", filterMenuEvent ] [ text "arrow_drop_down" ]
        , filterMenu menu
        ]


display : Menu -> Html Msg
display menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", displayMenuEvent ] [ text "DISPLAY" ]
        , i [ class "material-icons clickable", displayMenuEvent ] [ text "arrow_drop_down" ]
        , displayMenu menu
        ]

displayMenu : Menu -> Html Msg
displayMenu menu =
    ul [ displayMenuEvent, class "dropdown-content top-55-right-0", classList [ ( "active", menu.displayDraft ) ] ]
        [ li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Show all" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Mine" ] ]
        , li [] [ a [ class "block" ] [ i [ class "material-icons" ] [ text "done" ], text "Others" ] ]
        ]

