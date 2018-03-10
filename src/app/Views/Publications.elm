module Views.Publications exposing (..)

import Components exposing (formatDate, newLoader)
import Dict
import Html exposing (..)
import Html.Attributes exposing (class, classList, href, src, style)
import Html.Events exposing (onClick)
import Models exposing (DisplayMenu, Model, Msg(ClickDeletePublication), Publication, User)
import RemoteData exposing (RemoteData(Success))
import Routes exposing (Route(ProfileRoute, PublicationRoute), path)
import Views.Attributes exposing (..)



view : Model -> Html Msg
view model =
         div [ class "row container section" ] <|
            case RemoteData.append model.remote.publications model.remote.user of
                Success (pubs, user) ->
                    List.map (publicationCard model.menu user ) <| Dict.values pubs
                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]



publicationCard : DisplayMenu -> User -> Publication -> Html Msg
publicationCard menu user pub =
    div [ class "col s12 m6 xl4 pub-card" ]
        [ div [ class "card small" ]
            [ div [ class "card-content reset-top-bottom flex-space-between" ]
                [ getLikes pub user
                ]
            , a [href <| path <| PublicationRoute pub.id] [ div [class "card-image"]
                [img [src pub.image] []
                ]]
            , div [ class "card-content hidden" ]
                [ span [ class "card-title" ] [text <| if String.length pub.title >= 75 then String.left 75 pub.title ++ "..." else pub.title]
                ]

            , div [ class "card-action flex-space-between" ]
                [ div [ class "valign-wrapper" ]
                    [ img [ class "circle medium", src pub.owner.picture ] []
                    , div []
                        [ a [ href <| path <| ProfileRoute pub.owner.username, class "fg-link-color no-transform " ] [ text pub.owner.username ]
                        , small [ class "block fg-grey-color no-transform"] [ text <| formatDate pub.createdAt ]
                        ]
                    ]
                    , ul [class "right inline reset-margin-top reset-margin-bottom"]
                      [ case user.username == pub.owner.username of
                             True ->
                                 li []
                                    [ div [ class "dropdown-wrapper" ]
                                          [ a [tooltipWrapper, onClickDeleteMenu pub.id menu ]
                                              [ i [clickable, materialIcons][text "delete"]
                                              , small [tooltip, class "no-transform -top-50-right-0" ] [ text "Delete" ]
                                              ]
                                          , div [ class "card dropdown-content  width-200 top-40-right-0 "
                                               , onClickDeleteMenu pub.id menu
                                              , classList [ ( "active", menu.delete.display && menu.delete.id == pub.id ) ]
                                              ]
                                              [ div [ class "card-content fg-text-color" ] [ p [] [ text "Are you sure you want to delete?" ] ]
                                              , div [ class "card-action" ] [ a [clickable, floatRight, onClick <| ClickDeletePublication pub] [ text "delete" ] ]
                                              ]
                                          ]

                                   ]

                             False ->
                                 li [] []
                                ]
                ]
            ]
        ]


getLikes : Publication -> User -> Html Msg
getLikes pub user =
    let _ = Debug.log "" user.likedPublications in
    div [class "valign-wrapper"]
        [ case (user.username /= pub.owner.username, Dict.member pub.id user.likedPublications ) of
               (True, False) ->
                div [ tooltipWrapper]
                      [ i [materialIcons, clickable, foreground ErrorColor , onClickLikePublication pub] [ text "favorite_border" ]
                      , small [tooltip, class "-top-35-right-0 " ] [ text "Like" ]
                      ]

               (True, True) ->
                div [ tooltipWrapper]
                      [ i [materialIcons, clickable, foreground ErrorColor, onClickUnLikePublication pub] [ text "favorite" ]
                      , small [tooltip, class "-top-35-right-0 " ] [ text "Unlike" ]
                      ]

               (False, _) ->
                      i [ materialIcons, foreground ErrorColor, opacity Quarter ] [ text "favorite_border" ]

        , if pub.likes == 0 then
            span [][]
          else
            if user.username == pub.owner.username then
                span [opacity Quarter, foreground ErrorColor, class "likes "] [text <| toString pub.likes]
            else
                span [ foreground ErrorColor,class "likes"] [text <| toString pub.likes]
        ]
