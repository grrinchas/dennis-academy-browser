module Views.NavBar exposing (..)

import Date
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (on, onClick, onInput, onWithOptions)
import Json.Decode
import Models exposing (..)
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
    ul [ class " buttons-wrapper right valign-wrapper" ]
        (List.map
            (\btn -> li [] [ btn ])
            list
        )


logo : Html Msg
logo =
    a [ href <| path HomeRoute ]
        [ img [ src logoImg ] []
        ]


dashboard : Html msg
dashboard =
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
            OnMenuChange menuPublish


userMenuEvent : Attribute Msg
userMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            OnMenuChange menuUser


newDraftMenuEvent : Attribute Msg
newDraftMenuEvent =
    onWithOptions "click" { stopPropagation = True, preventDefault = False } <|
        Json.Decode.succeed <|
            OnMenuChange menuNewDraft


userMenu : User -> Menu -> Html Msg
userMenu user menu =
    ul [ userMenuEvent, class "dropdown-content", classList [ ( "dg-user-menu", menu.user ) ] ]
        [ --   li [] [ a [ href <| path <| DraftRoute "1" ] [ i [ class "material-icons" ] [ text "add" ], text "Create Tutorial" ] ]
          li [] [ a [ href <| path DraftsRoute ] [ i [ class "material-icons" ] [ text "apps" ], text "Drafts" ] ]
        , li [ class "divider" ] []
        , li [ class "valign-wrapper" ]
            [ img [ class "circle", src user.picture ] []
            , span [ class "not-implemented dg-profile title" ] [ text "View Profile" ]
            ]
        , li [] [ a [ class "not-implemented" ] [ i [ class "material-icons" ] [ text "settings" ], text "Settings" ] ]
        , li [ class "divider" ] []
        , li [] [ a [ onClick Logout ] [ i [ class "material-icons" ] [ text "arrow_forward" ], text "Logout" ] ]
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
            , input [ placeholder form.draftTitle, onInput (\title -> OnFormChange { form | draftTitle = title }) ] []
            ]
        , div [ class "card-action" ]
            [ a [ onClick <| CreateDraft { initialDraft | title = form.draftTitle } ] [ text "create" ]
            ]
        ]
