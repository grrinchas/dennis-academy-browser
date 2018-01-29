module Views.Publications exposing (..)

import Components exposing (formatDate, newLoader)
import Dict
import Html exposing (..)
import Html.Attributes exposing (class, href, src, style)
import Models exposing (DisplayMenu, Model, Msg, Publication, User)
import RemoteData exposing (RemoteData(Success))
import Routes exposing (Route(ProfileRoute, PublicationRoute), path)
import Views.Attributes exposing (..)



view : Model -> Html Msg
view model =
         div [ class "row container section" ] <|
            case RemoteData.append model.remote.publications model.remote.user of
                Success (pubs, user) ->
                    List.map (publicationCard model.menu user ) <| Dict.values pubs
                    --(sortBy (draftFilter model.menu user <| Dict.values drafts) model.menu.sortDraft.sortBy)
                _ ->
                    [div [class "loader-wrapper"] [ newLoader [] ]]



publicationCard : DisplayMenu -> User -> Publication -> Html Msg
publicationCard menu user pub =
    div [ class "col s12 m6 xl4" ]
        [ div [ class "card small" ]
            [ div [ class "card-content reset-top-bottom flex-space-between" ]
                [ getLikes pub user
                ]
            , a [href <| path <| PublicationRoute pub.id] [ div [class "card-image"]
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
