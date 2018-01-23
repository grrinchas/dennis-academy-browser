module Views.Attributes exposing (..)

import Html exposing (Attribute, Html)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)


topLeft: Int -> Int -> Attribute msg
topLeft top left = class <| "top-" ++ toString top ++ "-" ++ toString left

topRight: Int -> Int -> Attribute msg
topRight top right = class <| "top-" ++ toString top ++ "-" ++ toString right

bottomLeft: Int -> Int -> Attribute msg
bottomLeft bottom left = class <| "top-" ++ toString bottom ++ "-" ++ toString left

bottomRight: Int -> Int -> Attribute msg
bottomRight bottom right = class <| "top-" ++ toString bottom ++ "-" ++ toString right

tooltipWrapper: Attribute msg
tooltipWrapper  = class "tooltip-wrapper"

tooltip: Attribute msg
tooltip  = class "tooltip"

onClickWithoutProp: Msg -> Attribute Msg
onClickWithoutProp msg =
        Json.Decode.succeed msg
            |> onWithOptions "click" { stopPropagation = True, preventDefault = False }


materialIcons : Attribute msg
materialIcons = class "material-icons"

clickable: Attribute msg
clickable = class "clickable"


floatRight: Attribute msg
floatRight = class "right"

block: Attribute msg
block = class "block"


onClickMakeDraftPublic: Draft -> Attribute Msg
onClickMakeDraftPublic draft = onClick <| ClickUpdateDraft { draft | visibility = PUBLIC }

onClickMakeDraftPrivate: Draft -> Attribute Msg
onClickMakeDraftPrivate draft = onClick <| ClickUpdateDraft { draft | visibility = PRIVATE }


onClickChangeMenu: DisplayMenu -> Attribute Msg
onClickChangeMenu menu = onClickWithoutProp <| WhenMenuChanges menu


onClickDeleteDraft: Draft -> DisplayMenu -> Attribute Msg
onClickDeleteDraft draft menu =
    case reset menu of
        newMenu -> onClickChangeMenu { newMenu | deleteDraft = { display = True, id = draft.id }}


onClickFilterPrivateDrafts: Bool -> DisplayMenu -> Attribute Msg
onClickFilterPrivateDrafts bool menu =
    case ( menu.filterDraft, menu.filterDraft.localDraftsPage) of
        ( filter, page) ->
            onClickChangeMenu  { menu | filterDraft = {filter | localDraftsPage = {page | local = bool}}}


onClickFilterDrafts : DisplayMenu -> Attribute Msg
onClickFilterDrafts menu =
    case (reset menu, menu.filterDraft) of
        (newMenu, filter) -> onClickChangeMenu { newMenu | filterDraft = {filter | display = True}}


onClickNotifications: DisplayMenu -> Attribute Msg
onClickNotifications  menu =
    case reset menu of
        newMenu -> onClickChangeMenu { newMenu | notifications = True}

