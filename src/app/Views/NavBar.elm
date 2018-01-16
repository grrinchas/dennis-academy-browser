module Views.NavBar exposing (..)

import Components exposing (loader)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (on, onClick, onInput, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success))
import Routes exposing (..)


logoImg : String
logoImg =
    "https://rawgit.com/grrinchas/c31f4363437c79172181ca944ed1c5d5/raw/4d19f3af564947d168a0ebfc15b3c013bd48e975/Logo.svg"


wrapper : Html Msg -> Html Msg -> Html Msg
wrapper start end =
    nav [ class "row  dg-nav-bar valign-wrapper" ]
        [ div [ class "dg-start col s6" ] [ start ]
        , div [ class "dg-end col s6" ] [ end ]
        ]


withButtons : List (Html Msg) -> Html Msg
withButtons list =
    ul [ class "right valign-wrapper" ]
        (List.map
            (\btn -> li [] [ btn ])
            list
        )


logo : Html Msg
logo = div [] [ a [ href <| path HomeRoute ] [ img [ src logoImg ] [] ] ]


dashboardBtn : Html msg
dashboardBtn =
    a [ class "btn", href <| path DashboardRoute ]
        [ text "Dashboard" ]


signUp : Html msg
signUp =
    a [ class "btn", href <| path SignUpRoute, style [] ] [ text "Sign Up" ]


login : Html msg
login =
    a [ href <| path LoginRoute ] [ text "Login" ]


or : Html Msg
or =
    span [ class "dg-text-grey" ] [ text "or" ]


notifications : Html Msg
notifications =
    div [] [ a [ class "dg-notifications not-implemented" ] [ i [ class "material-icons" ] [ text "notifications" ] ] ]


profile : User -> Menu -> Html Msg
profile user menu =
    div [ class "valign-wrapper profile-menu-btn", userMenuEvent ]
        [ img [ src user.picture, class "  circle" ] []
        , i [ class "material-icons drop" ] [ text "arrow_drop_down" ]
        , userMenu user menu
        ]



newDraft : Form -> Menu -> Html Msg
newDraft form menu =
    div []
        [ a [ class "new-draft btn z-depth-0", newDraftMenuEvent ] [ text "New " ]
        , newDraftMenu form menu
        ]


publish : Menu -> Html Msg
publish menu =
    div []
        [ a [ class "btn valign-wrapper z-depth-0", publishMenuEvent ] [ text "publish" ]
        , publishMenu menu
        ]


publishMenuEvent : Attribute Msg
publishMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuPublish


userMenuEvent : Attribute Msg
userMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuUser


newDraftMenuEvent : Attribute Msg
newDraftMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            WhenMenuChanges menuNewDraft


userMenu : User -> Menu -> Html Msg
userMenu user menu =
    ul [ userMenuEvent, class "dropdown-content", classList [ ( "dg-user-menu", menu.user ) ] ]
        [ li [] [ a [ href <| path DraftsRoute ] [ i [ class "material-icons" ] [ text "apps" ], text "Drafts" ] ]
        , li [ class "divider" ] []
        , li [ class "valign-wrapper" ]
            [ img [ class "circle", src user.picture ] []
            , a [href <| path <| ProfileRoute user.username, class "dg-profile title"] [ text "View Profile" ]
            ]
        , li [] [ a [ class "not-implemented" ] [ i [ class "material-icons" ] [ text "settings" ], text "Settings" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ onClick ClickLogout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ] ]
        ]


publishMenu : Menu -> Html Msg
publishMenu menu =
    div [ publishMenuEvent, class "card  dg-publish", classList [ ( "dg-publish-menu", menu.publish ) ] ]
        [ div [ class "card-content" ]
            [ span [ class "card-title" ] [ text "Ready to publish?" ]
            ]
        , div [ class "divider" ] []
        , div [ class "card-content" ]
            [ p [] [ text "Add some tags (no more than 5) to make tutorial descriptive:" ]
            ]
        , div [ class "card-content" ]
            [ div [ class "chip" ] [ text "elm", i [ class "close material-icons" ] [ text "close" ] ]
            , div [ class "chip" ] [ text "java", i [ class "material-icons close " ] [ text "close" ] ]
            , div [ class "chip" ] [ text "haskell", i [ class "material-icons close " ] [ text "close" ] ]
            , div [ class "chip" ] [ text "web-development", i [ class "close material-icons" ] [ text "close" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "card-content" ]
            [ p [] [ text "Select or upload an image, so that tutorial would stand out" ]
            ]
        , div [ class "card-content" ]
            [ div [ class "tutorial-img-wrapper" ]
                [ div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                , div [ class "tutorial-img" ] []
                ]
            ]
        , div [ class "card-action" ]
            [ a [ class "btn grey darken-3" ] [ text "upload" ]
            , a [ class "btn right" ] [ text "publish" ]
            ]
        ]


newDraftMenu : Form -> Menu -> Html Msg
newDraftMenu form menu =
    div [ newDraftMenuEvent, class "card dg-new-draft", classList [ ( "dg-new-draft-show", menu.newDraft ) ] ]
        [ div [ class "card-content" ]
            [ p [] [ text "What is your draft about?" ]
            , input [ placeholder form.draftTitleNew, onInput (\title -> WhenFormChanges { form | draftTitleNew = title }) ] []
            ]
        , div [ class "card-action" ]
            [ a [ onClick <| ClickCreateDraft { initialDraft | title = form.draftTitleNew } ] [ text "create" ]
            ]
        ]


draft : Model -> Html Msg
draft model =
    case model.remote.user of
        Success user ->
            withButtons [publish model.menu, notifications, newProfile (Just user) model.menu] |> wrapper logo

        _ -> withButtons [publish model.menu, notifications, newProfile Nothing model.menu] |> wrapper logo



drafts : Model -> Html Msg
drafts model =
    case model.remote.user of
        Success user ->
            withButtons [newDraft model.form model.menu, notifications, newProfile (Just user) model.menu] |> wrapper logo

        _ -> withButtons [notifications, newProfile Nothing model.menu] |> wrapper logo


landing: Model -> Html Msg
landing model =
    case model.remote.user of
        Success _ ->
            withButtons [ dashboardBtn ] |> wrapper logo

        _ ->
            withButtons [ login, or, signUp ] |> wrapper logo



dashboard : Model -> Html Msg
dashboard model =
    case model.remote.user of
        Success user ->
            withButtons [ notifications, newProfile (Just user) model.menu] |> wrapper logo

        _ -> withButtons [ notifications, newProfile Nothing model.menu] |> wrapper logo



newProfile : Maybe User -> Menu -> Html Msg
newProfile user menu =
    div [ class "valign-wrapper profile-menu-btn", userMenuEvent ]
       <|  case user of
            Just u ->
                [ img [ src u.picture, class "circle" ] []
                , i [ class "material-icons drop" ] [ text "arrow_drop_down" ]
                , userMenu u menu
                ]
            Nothing ->
                [loader
                , i [ class "material-icons drop" ] [ text "arrow_drop_down" ]
                ]

