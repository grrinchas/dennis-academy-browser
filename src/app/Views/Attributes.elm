module Views.Attributes exposing (..)

import Html exposing (Attribute, Html)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)
import Routes exposing (Route(DraftRoute), path)


---------------------------------------------------------------------------
----------------------------------COLORS-----------------------------------
---------------------------------------------------------------------------

type Color
    = PrimaryColor
    | SecondaryColor
    | ErrorColor
    | TextColor
    | GreyColor


colorToString: Color -> String
colorToString color =
    case color of
        PrimaryColor -> "primary"
        SecondaryColor -> "secondary"
        ErrorColor -> "error"
        TextColor -> "text"
        GreyColor -> "grey"


background: Color -> Attribute msg
background color = class ( "bg-" ++ (colorToString color) ++ "-color")

foreground: Color -> Attribute msg
foreground color = class ("fg-" ++ (colorToString color) ++ "-color")

---------------------------------------------------------------------------
---------------------------------OPACITY-----------------------------------
---------------------------------------------------------------------------


type Intensity
    = Zero
    | Quarter
    | Half
    | ThreeQuarters
    | Full

intensityToString: Intensity -> String
intensityToString intensity =
    case intensity of
        Zero -> "zero"
        Quarter -> "quarter"
        Half -> "half"
        ThreeQuarters -> "three-quarters"
        Full -> "full"

opacity: Intensity -> Attribute msg
opacity intensity = class ("opacity-" ++ (intensityToString intensity ))


---------------------------------------------------------------------------
--------------------------------POSITION-----------------------------------
---------------------------------------------------------------------------

topLeft: Int -> Int -> Attribute msg
topLeft top left = class <| "top-" ++ toString top ++ "-" ++ toString left

topRight: Int -> Int -> Attribute msg
topRight top right = class <| "top-" ++ toString top ++ "-" ++ toString right

bottomLeft: Int -> Int -> Attribute msg
bottomLeft bottom left = class <| "top-" ++ toString bottom ++ "-" ++ toString left

bottomRight: Int -> Int -> Attribute msg
bottomRight bottom right = class <| "top-" ++ toString bottom ++ "-" ++ toString right


---------------------------------------------------------------------------
--------------------------------TOOLTIP------------------------------------
---------------------------------------------------------------------------



tooltipWrapper: Attribute msg
tooltipWrapper  = class "tooltip-wrapper"

tooltip: Attribute msg
tooltip  = class "tooltip"

materialIcons : Attribute msg
materialIcons = class "material-icons"

clickable: Attribute msg
clickable = class "clickable"


floatRight: Attribute msg
floatRight = class "right"

block: Attribute msg
block = class "block"


---------------------------------------------------------------------------
--------------------------------ON-CLICK------------------------------------
---------------------------------------------------------------------------


--Routing

toDraftPage: Draft -> Attribute Msg
toDraftPage draft = href <| path <| DraftRoute draft.id


-- Draft

onClickCreateDraft: Draft -> Attribute Msg
onClickCreateDraft draft = onClick <| ClickCreateDraft draft

onClickDeleteDraft: Draft -> Attribute Msg
onClickDeleteDraft draft = onClick <| ClickDeleteDraft draft

onClickLikeDraft: Draft -> Attribute Msg
onClickLikeDraft draft = onClick <| ClickLikeDraft draft

onClickLikePublication: Publication -> Attribute Msg
onClickLikePublication pub = onClick <| ClickLikePublication pub

onClickUnLikeDraft: Draft -> Attribute Msg
onClickUnLikeDraft draft = onClick <| ClickUnLikeDraft draft

onClickUnLikePublication: Publication -> Attribute Msg
onClickUnLikePublication pub = onClick <| ClickUnLikePublication pub

onClickMakeDraftPublic: Draft -> Attribute Msg
onClickMakeDraftPublic draft = onClick <| ClickUpdateDraft { draft | visibility = PUBLIC }

onClickMakeDraftPrivate: Draft -> Attribute Msg
onClickMakeDraftPrivate draft = onClick <| ClickUpdateDraft { draft | visibility = PRIVATE }


---------------------------------------------------------------------------
---------------------------ON-CLICK-WITHOUT-PROP---------------------------
---------------------------------------------------------------------------


onClickWithoutProp: Msg -> Attribute Msg
onClickWithoutProp msg =
        Json.Decode.succeed msg
            |> onWithOptions "click" { stopPropagation = True, preventDefault = False }


onClickChangeMenu: DisplayMenu -> Attribute Msg
onClickChangeMenu menu = onClickWithoutProp <| WhenMenuChanges menu


onClickDeleteMenu: String -> DisplayMenu -> Attribute Msg
onClickDeleteMenu id menu =
    case reset menu of
        newMenu ->
            onClickChangeMenu { newMenu | delete = { display = True, id = id }}


onClickPublicDraftMenu : Draft-> DisplayMenu -> Attribute Msg
onClickPublicDraftMenu draft menu =
    case reset menu of
        newMenu ->
            onClickChangeMenu { newMenu | publicDraft = { display = True, id = draft.id }}


onClickFilterPrivateDrafts: Bool -> DisplayMenu -> Attribute Msg
onClickFilterPrivateDrafts bool menu =
    case ( menu.filterDraft, menu.filterDraft.localDraftsPage) of
        ( filter, page) ->
            onClickChangeMenu  { menu | filterDraft = {filter | localDraftsPage = {page | local = bool}}}


onClickFilterDrafts : DisplayMenu -> Attribute Msg
onClickFilterDrafts menu =
    case (reset menu, menu.filterDraft) of
        (newMenu, filter) ->
            onClickChangeMenu { newMenu | filterDraft = {filter | display = True}}


onClickNotifications: DisplayMenu -> Attribute Msg
onClickNotifications  menu =
    case reset menu of
        newMenu -> onClickChangeMenu { newMenu | notifications = True}

