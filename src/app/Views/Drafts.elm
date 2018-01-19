module Views.Drafts exposing (..)

import Components exposing (draftCard, loader, newLoader)
import Date
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
        [div [ class "valign-wrapper" ]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]

            , ul [ class "tabs right flex-flex-end" ]
                [li [class "left-padding tab"] [ sortDraft model.menu ]
                , li [class "left-padding tab"] [ filterLocal model.menu ]
                ]
            ]
        , div [ class "divider"] []
        , div [ class "row section container " ] <|
            case model.remote.user of
                  Success user ->
                    let drafts = Dict.values user.drafts in
                      case (model.menu.filterDraft.localDraftsPage.local, model.menu.filterDraft.localDraftsPage.public) of
                          (True,True) ->
                              List.map (draftCard model.menu user) (sortBy drafts model.menu.sortDraft.sortBy)

                          (True, False) ->
                              List.filter (\d-> d.visibility == PRIVATE)  (sortBy drafts model.menu.sortDraft.sortBy)
                                  |> List.map (draftCard model.menu user)
                          (False, True) ->
                              List.filter (\d-> d.visibility == PUBLIC) (sortBy drafts model.menu.sortDraft.sortBy)
                                  |> List.map (draftCard model.menu user)

                          (False, False)-> List.map (draftCard model.menu user) []

                  _ -> [div [class "loader-wrapper"] [ newLoader [] ]]
        ]



sortBy: List Draft -> SortDraftBy -> List Draft
sortBy drafts sort =
    case sort of
        CreatedAt Ascending ->
            List.sortBy (\d-> Date.toTime d.createdAt) drafts
        CreatedAt Descending->
            List.reverse <| List.sortBy (\d-> Date.toTime d.createdAt) drafts
        UpdatedAt Ascending ->
             List.sortBy (\d-> Date.toTime d.updatedAt) drafts
        UpdatedAt Descending->
           List.reverse <| List.sortBy (\d-> Date.toTime d.updatedAt) drafts
        Title Ascending ->
            List.reverse <| List.sortBy .title drafts
        Title Descending->
            List.sortBy .title drafts
        Owner Ascending ->
           List.reverse <| List.sortBy (\d-> d.owner.username) drafts
        Owner Descending->
             List.sortBy (\d-> d.owner.username) drafts



publicView : Bool -> Model -> Html Msg
publicView bool model =
    div [ class "" ]
        [ div [ class "valign-wrapper" ]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]

            , ul [ class "tabs right flex-flex-end" ]
                [li [class "left-padding tab"] [ sortDraft model.menu ]
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
                            List.map (draftCard model.menu user)(sortBy drafts model.menu.sortDraft.sortBy)

                        (True, False) ->
                            List.filter (\d-> d.owner.username == user.username) (sortBy drafts model.menu.sortDraft.sortBy)
                                |> List.map (draftCard model.menu user)
                        (False, True) ->
                            List.filter (\d-> d.owner.username /= user.username) (sortBy drafts model.menu.sortDraft.sortBy)
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


filterLocalPublicMenuEvent : Bool -> DisplayMenu -> Attribute Msg
filterLocalPublicMenuEvent bool menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuFilterLocalDraftPublic bool menu)

filterLocalLocalMenuEvent : Bool -> DisplayMenu -> Attribute Msg
filterLocalLocalMenuEvent bool menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuFilterLocalDraftLocal bool menu)


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


filterLocalMenu : DisplayMenu -> Html Msg
filterLocalMenu menu =
    ul [  class "dropdown-content top-55-right-0", classList [ ( "active", menu.filterDraft.display ) ] ]
        [
        case menu.filterDraft.localDraftsPage.public of
            True ->
                li [] [ a [ class "block", filterLocalPublicMenuEvent False menu]
                 [ i [ class "material-icons", classList [("visible", True)] ] [ text "done" ], text "Public" ] ]
            False ->
                li [] [ a [ class "block", filterLocalPublicMenuEvent True menu]
                 [ i [ class "material-icons",  classList [("not-visible", True)] ] [ text "done" ], text "Public" ] ]
        ,
        case menu.filterDraft.localDraftsPage.local of
            True ->
                li [] [ a [ class "block", filterLocalLocalMenuEvent False menu]
                 [ i [ class "material-icons", classList [("visible", True)] ] [ text "done" ], text "Private" ] ]
            False ->
                li [] [ a [ class "block", filterLocalLocalMenuEvent True menu]
                 [ i [ class "material-icons",  classList [("not-visible", True)] ] [ text "done" ], text "Private" ] ]

        ]


filterPublic : DisplayMenu -> Html Msg
filterPublic menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", filterMenuEvent menu] [ text "FILTER" ]
        , i [ class "material-icons clickable", filterMenuEvent menu] [ text "arrow_drop_down" ]
        , filterPublicMenu menu
        ]


filterLocal : DisplayMenu -> Html Msg
filterLocal menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", filterMenuEvent menu] [ text "FILTER" ]
        , i [ class "material-icons clickable", filterMenuEvent menu] [ text "arrow_drop_down" ]
        , filterLocalMenu menu
        ]




sortMenuEvent : DisplayMenu -> Attribute Msg
sortMenuEvent menu =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges (menuSortDraft menu)



sortDraft : DisplayMenu -> Html Msg
sortDraft menu =
    div [ class "valign-wrapper dropdown-wrapper" ]
        [ span [ class "clickable", sortMenuEvent menu] [ text "Sort by" ]
        , i [ class "material-icons clickable", sortMenuEvent menu] [ text "arrow_drop_down" ]
        , sortDraftMenu menu
        ]


sortedMenuEvent : SortDraftBy -> DisplayMenu -> Attribute Msg
sortedMenuEvent new menu =
    let old = menu.sortDraft.sortBy in
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            case old == new of
                True -> WhenMenuChanges (menuSortedDraft (flipDirection old) menu)
                False -> WhenMenuChanges (menuSortedDraft new menu)




getSortText : SortDraftBy -> Html Msg
getSortText sort =
    case sort of
        CreatedAt _ -> text "Created at"
        UpdatedAt _ -> text "Updated at"
        Title _ -> text "Ttitle"
        Owner _ -> text "Owner"


getSortTick: SortDraftBy -> DisplayMenu -> Html Msg
getSortTick sort menu =
    if (isCreated sort && isCreated menu.sortDraft.sortBy)
       ||  (isUpdated sort && isUpdated menu.sortDraft.sortBy)
       ||  (isTitle sort && isTitle  menu.sortDraft.sortBy)
       ||  (isOwner sort && isOwner menu.sortDraft.sortBy)
    then
       i [ class "material-icons", classList [("visible", True)] ] [ text "done" ]
    else
       i [ class "material-icons", classList [("not-visible", True)] ] [ text "done" ]

getSortDirection : SortDraftBy -> DisplayMenu -> Html Msg
getSortDirection sort menu =
    if (isCreated sort && isCreated menu.sortDraft.sortBy)
       ||  (isUpdated sort && isUpdated menu.sortDraft.sortBy)
       ||  (isTitle sort && isTitle  menu.sortDraft.sortBy)
       ||  (isOwner sort && isOwner menu.sortDraft.sortBy)
    then
    case direction menu.sortDraft.sortBy of
      Ascending -> i [ class "material-icons right reset-margin-right", classList [("visible", True)] ] [ text "arrow_drop_up" ]
      Descending -> i [ class "material-icons right reset-margin-right" , classList [("visible", True)] ] [ text "arrow_drop_down" ]
    else
      i [ class "material-icons right reset-margin-right" , classList [("not-visible", True)] ] [ text "arrow_drop_down" ]



sortDraftMenu : DisplayMenu -> Html Msg
sortDraftMenu menu =
    ul [  class "dropdown-content top-55-right-0 width-200", classList [ ( "active", menu.sortDraft.display ) ] ]
        [ li [] [ a [ class "block", sortedMenuEvent (CreatedAt Descending) menu]
            [ getSortTick (CreatedAt Descending) menu
            , getSortText (CreatedAt Descending)
            , getSortDirection (CreatedAt Descending) menu
            ] ]
        , li [] [ a [ class "block", sortedMenuEvent (UpdatedAt Descending) menu]
            [ getSortTick (UpdatedAt Descending) menu
            , getSortText (UpdatedAt Descending)
            , getSortDirection (UpdatedAt Descending) menu
            ] ]
        , li [] [ a [ class "block", sortedMenuEvent (Title Descending) menu]
            [ getSortTick (Title Descending) menu
            , getSortText (Title Descending)
            , getSortDirection  (Title Descending) menu
            ] ]
        , li [] [ a [ class "block", sortedMenuEvent (Owner Descending) menu]
            [ getSortTick (Owner Descending) menu
            , getSortText (Owner Descending)
            , getSortDirection  (Owner Descending) menu
            ] ]

        ]



