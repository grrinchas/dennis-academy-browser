module Views.NavBar exposing (..)

import Components exposing (formatDate, newLoader)
import Date
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (on, onClick, onInput, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))
import Routes exposing (..)
import Views.Attributes exposing (onClickNotifications, onClickWithoutProp)


logoImg : String
logoImg =
    "https://rawgit.com/grrinchas/c31f4363437c79172181ca944ed1c5d5/raw/4d19f3af564947d168a0ebfc15b3c013bd48e975/Logo.svg"


wrapper :  Html Msg -> Html Msg
wrapper  end =
    div [ class "navbar-fixed" ]
        [ nav []
            [ div [ class "nav-wrapper" ]
                [ a [ class "brand-logo left", href <| path HomeRoute ] [ img [ src logoImg ] [] ]
                , end
                ]
            ]
        ]


withButtons : List (Html Msg) -> Html Msg
withButtons list =
    ul [ class "right" ] <| List.map (\btn -> li [] [ btn ]) list



signUp : Html msg
signUp =
    a [ class "btn", href <| path SignUpRoute, style [] ] [ text "Sign Up" ]


login : Html msg
login =
    a [ class "btn cyan darken-3", href <| path LoginRoute ] [ text "Login" ]



notifications : DisplayMenu -> Maybe User -> Html Msg
notifications menu user =
    div [class "dropdown-wrapper"]
        [ a [ class "bg-transparent ", onClickNotifications menu]
            [ case user of
                Just u -> case Dict.isEmpty u.receivedNotifications of
                    True -> i [ class "material-icons " ] [ text "notifications_none" ]
                    False -> i [ class "material-icons " ] [ text "notifications_active" ]
                Nothing->
                    i [ class "material-icons " ] [ text "notifications_none" ]
            ]
        , notificationsMenu menu user
        ]



notificationsMenu: DisplayMenu -> Maybe User -> Html Msg
notificationsMenu menu u =
    case u of
        Just user ->
              let listItem =
              \note -> case (note.notificationType, Dict.get note.message user.drafts) of
                      (LIKED_DRAFT, Just draft) ->
                          li [class "collection-item avatar"]
                              [ img [src note.sender.picture,class "circle"] []
                              , a [href <| path (ProfileRoute note.sender.username), class "title "] [text note.sender.username]
                              , i [class "material-icons"] [text "favorite"]
                              , span [class "title"] [text "your draft "]
                              , div [class "subtitle"] [a [href <| path (DraftRoute draft.id)]
                                [text <| if String.length draft.title <= 50 then draft.title else (String.left 50 draft.title) ++ "..."]
                                ]
                              , p [] [text <| formatDate note.createdAt]
                              , i [onClick <| ClickDeleteNotification note,class "clickable secondary-content material-icons"] [text "clear"]
                              ]

                      (UNLIKED_DRAFT, Just draft) ->
                          li [class "collection-item avatar"]
                              [ img [src note.sender.picture,class "circle"] []
                              , a [href <| path (ProfileRoute note.sender.username), class "title "] [text note.sender.username]
                              , i [class "material-icons"] [text "favorite_border"]
                              , span [class "title"] [text "your draft "]
                              , div [class "subtitle"] [a [href <| path (DraftRoute draft.id)]
                                [text <| if String.length draft.title <= 60 then draft.title else (String.left 60 draft.title) ++ "..."]
                                ]
                              , p [] [text <| formatDate note.createdAt]
                              , i [onClick <| ClickDeleteNotification note,class "clickable secondary-content material-icons"] [text "clear"]
                              ]
                      _ -> li [class "collection-item avatar"]
                              [ img [src note.sender.picture,class "circle"] []
                              , a [href <| path (ProfileRoute note.sender.username), class "title "] [text note.sender.username]
                              , i [class "material-icons"] [text "favorite_border"]
                              , span [class "title"] [text "your draft "]
                              , div [class "subtitle fg-error-color"] [ text "Draft has been deleted" ]
                              , p [] [text <| formatDate note.createdAt]
                              , i [onClick <| ClickDeleteNotification note,class "clickable secondary-content material-icons"] [text "clear"]

                              ]
                 in
         ul [onClickNotifications menu, class "dropdown-content top-70-right-0 collection width-450", classList [ ( "active ", menu.notifications) ] ]
       <| List.map listItem (List.reverse <| List.sortBy (\n -> Date.toTime n.createdAt) <| Dict.values user.receivedNotifications)
        Nothing -> div [] []



publish : Draft -> Form -> DisplayMenu -> Html Msg
publish draft form menu =
    div [class "dropdown-wrapper"]
        [ a [ class "btn z-depth-0  reset-margin-right", onClickWithoutProp <|  WhenMenuChanges (menuPublish menu)] [ text "publish" ]
        , publishMenu draft form menu
        ]



userMenu : User -> DisplayMenu -> Html Msg
userMenu user menu =
    ul [ onClickWithoutProp <|  WhenMenuChanges (menuUser menu), class "dropdown-content top-70-right-0", classList [ ( "active ", menu.user) ] ]
        [ li [] [ a [ href <| path DraftsRoute ] [ i [ class "material-icons" ] [ text "apps" ], text "Drafts" ] ]
        , li [] [ a [ href <| path DashboardRoute ] [ i [ class "material-icons" ] [ text "dashboard" ], text "Dashboard" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ href <| path <| ProfileRoute user.username, class "valign-wrapper fg-link-color" ]
                    [ img [ class "circle medium", src user.picture ] []
                    , text "View Profile"
                    ]
                ]
        , li [] [ a [] [ i [ class "material-icons" ] [ text "settings" ], text "Settings" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ onClick ClickLogout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ] ]
        ]


publishMenu : Draft -> Form -> DisplayMenu -> Html Msg
publishMenu draft form menu =
    div [onClickWithoutProp <|  WhenMenuChanges (menuPublish menu) , class "width-450 card dropdown-content top-70-right-15", classList [ ( "active", True) ] ]
        [  div [ class "card-content reset-bottom " ]
            [ p [] [ text "Please enter URL for the image, so that publication would stand out." ]
            , input [ class "no-style", placeholder "Enter image url...", onInput (\url -> WhenFormChanges { form | publishUrl = url }) ] []
            ]
        , div [class "card-content reset-top reset-bottom"]
            [ img [src form.publishUrl, class "width-400"] []
            ]
        , div [ class "card-action reset-top" ]
            [ a [ class "right ", onClick <| ClickCreatePublication <| fromDraft form draft] [ text "OK" ]
            ]
        ]

fromDraft: Form -> Draft -> Publication
fromDraft form draft =
    { id = draft.id
    , updatedAt = draft.updatedAt
    , createdAt = draft.createdAt
    , content=  draft.content
    , title = draft.title
    , owner= draft.owner
    , image = form.publishUrl
    }

newDraft : Form -> DisplayMenu -> Html Msg
newDraft form menu =
    div [ class "dropdown-wrapper" ]
        [ a [ class "btn z-depth-0 reset-margin-right", onClickWithoutProp <| WhenMenuChanges (menuNewDraft menu)] [ text "New " ]
        , newDraftMenu form menu
        ]



newDraftMenu : Form -> DisplayMenu -> Html Msg
newDraftMenu form menu =
    div [onClickWithoutProp <| WhenMenuChanges (menuNewDraft menu), class "card dropdown-content top-70-right-0 width-350", classList [ ( "active", menu.newDraft) ] ]
        [ div [ class "card-content reset-bottom" ]
            [ p [] [ text "What is your draft about?" ]
            , input [ class "no-style", placeholder form.draftTitleNew, maxlength 100, onInput (\title -> WhenFormChanges { form | draftTitleNew = title }) ] []
            ]
        , div [ class "card-action reset-top" ]
            [ a [ class "right", onClick <| ClickCreateDraft { initialDraft | title = form.draftTitleNew } ] [ text "create" ]
            ]
        ]


draft : Maybe Draft -> Model -> Html Msg
draft draft model =
    case (model.remote.user, draft) of
        (Success user, Just d) ->
            withButtons [ publish d model.form model.menu, notifications model.menu (Just user), profile (Just user) model.menu ] |> wrapper

        _ ->
            withButtons [notifications model.menu Nothing, profile Nothing model.menu ] |> wrapper


drafts : Model -> Html Msg
drafts model =
    case model.remote.user of
        Success user ->
            withButtons [ newDraft model.form model.menu, notifications model.menu (Just user), profile (Just user) model.menu ] |> wrapper

        _ ->
            withButtons [ notifications model.menu Nothing, profile Nothing model.menu ] |> wrapper


landing : Model -> Html Msg
landing model =
    case model.remote.user of
        Success _ ->
            withButtons [ a [ class "btn z-depth-0", href <| path DashboardRoute ] [ text "Dashboard" ] ] |> wrapper

        _ ->
            withButtons [ login, span [] [ text "or" ], signUp ] |> wrapper


dashboard : Model -> Html Msg
dashboard model =
    case model.remote.user of
        Success user ->
            withButtons [ notifications model.menu (Just user), profile (Just user) model.menu ] |> wrapper

        _ ->
            withButtons [ notifications model.menu Nothing, profile Nothing model.menu ] |> wrapper



profile : Maybe User -> DisplayMenu -> Html Msg
profile user menu =
    div [ class "valign-wrapper dropdown-wrapper clickable",  onClickWithoutProp <|  WhenMenuChanges (menuUser menu)] <|
        case user of
            Just u ->
                [ img [class "medium", src u.picture, class "circle" ] []
                , i [ class "material-icons" ] [ text "arrow_drop_down" ]
                , userMenu u menu
                ]

            Nothing ->
                [ newLoader [class "img"]
                , i [ class "material-icons" ] [ text "arrow_drop_down" ]
                ]
