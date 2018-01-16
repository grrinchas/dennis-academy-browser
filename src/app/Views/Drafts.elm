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


view : Bool -> Model -> Html Msg
view bool model =
    div [ class "dg-draft " ]
        [ ul [ class "tabs" ]
            [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
            , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
            ]
        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            <| case model.remote.user of
                Success user ->
                    (List.sortBy (\date -> Date.toTime <| .createdAt date) (Dict.values user.drafts)
                         |> List.reverse
                         |> List.map (draftCard model.menu user )
                    )

                _ -> [loader]
        ]



publicView : Bool -> Model -> Html Msg
publicView bool model =
    div [ class "dg-draft" ]
        [ div [class "dg-tabs valign-wrapper"]
            [ ul [ class "tabs" ]
                [ li [ class "tab" ] [ a [ href <| path DraftsRoute, classList [ ( "active", not bool ) ] ] [ text "Mine" ] ]
                , li [ class "tab" ] [ a [ href <| path PublicDraftsRoute, classList [ ( "active", bool ) ] ] [ text "Community" ] ]
                ]
            , div [class "refresh"]
                [ refresh model.remote.refreshedPublicDrafts
                ]
            ]

        , div [ class "divider" ] []
        , div [ class "row cards section" ]
            <| case RemoteData.append model.remote.publicDrafts model.remote.user of
                 Success (drafts, user) ->
                  (drafts
                        |> List.sortBy (\draft -> Date.toTime <| .createdAt draft)
                        |> List.reverse
                        |> List.map (draftCard model.menu user)
                    )

                 _ -> [loader]
        ]

refresh : WebData () -> Html Msg
refresh web =
    case web of
        Loading ->
            div [ class "right draft-loader valign-wrapper" ] [ loader ]
        _ ->
             i [class "material-icons", onClick ClickRefreshPublicDrafts] [text "autorenew"]



