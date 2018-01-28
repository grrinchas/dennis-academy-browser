module Views.Publications exposing (..)

import Components exposing (formatDate, newLoader)
import Dict
import Html exposing (..)
import Html.Attributes exposing (class, href, src, style)
import Models exposing (DisplayMenu, Model, Msg, Publication)
import RemoteData exposing (RemoteData(Success))
import Routes exposing (Route(ProfileRoute, PublicationRoute), path)



view : Model -> Html Msg
view model =
         div [ class "row container section" ] <|
            case model.remote.publications of
                Success pubs ->
                    List.map (publicationCard model.menu ) <| Dict.values pubs
                    --(sortBy (draftFilter model.menu user <| Dict.values drafts) model.menu.sortDraft.sortBy)
                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]



publicationCard : DisplayMenu -> Publication -> Html Msg
publicationCard menu pub =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card small" ]
            [a [href <| path <| PublicationRoute pub.id] [ div [class "card-image"]
                [img [src pub.image] []
                ]]
            , div [ class "card-content hidden" ]
                [ span [ class "card-title" ] [text <| if String.length pub.title >= 35 then String.left 35 pub.title ++ "..." else pub.title]
                ]


            , div [ class "card-action flex-space-between" ]
                [ div [ class "valign-wrapper" ]
                    [ img [ class "circle medium", src pub.owner.picture ] []
                    , div []
                        [ a [ href <| path <| ProfileRoute pub.owner.username, class "fg-link-color no-transform " ] [ text pub.owner.username ]
                        , small [ class "block fg-grey-color no-transform"] [ text <| formatDate pub.createdAt ]
                        ]
                    ]
                ]
            ]
        ]
