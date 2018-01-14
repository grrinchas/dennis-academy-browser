module Views.Drafts exposing (..)

import Components exposing (draftCard, loader)
import Date exposing (Date)
import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onWithOptions)
import Json.Decode
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (Route(DraftRoute, DraftsRoute, HomeRoute, ProfileRoute, PublicDraftsRoute), path)


view : Bool -> Menu -> User -> List Draft -> Html Msg
view bool menu user drafts =
    div [ class "dg-draft " ]
        [ ul [ class "tabs" ]
            [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
            , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            (List.sortBy (\date -> Date.toTime <| .createdAt date) drafts
                |> List.reverse
                |> List.map (draftCard menu user)
            )
        ]



publicView : Bool -> Menu -> User -> List Draft -> WebData ()-> Html Msg
publicView bool menu user drafts webRefresh =
    div [ class "dg-draft" ]
        [ div [class "dg-tabs valign-wrapper"]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]
            , div [class "refresh"]
                [ refresh webRefresh
                ]
            ]

        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            (drafts
                |> List.sortBy (\draft -> Date.toTime <| .createdAt draft)
                |> List.reverse
                |> List.map (draftCard menu user)
            )
        ]

refresh : WebData () -> Html Msg
refresh web =
    case web of
        Loading ->
            div [ class "right draft-loader valign-wrapper" ] [ loader ]
        _ ->
             i [class "material-icons", onClick ClickRefreshPublicDrafts] [text "autorenew"]



