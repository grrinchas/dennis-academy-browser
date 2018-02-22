module Views.Dashboard exposing (..)

import Dict
import Html exposing (..)
import Html.Attributes exposing (..)
import Models exposing (..)
import RemoteData exposing (RemoteData(Loading, Success))






view: Model -> Html Msg
view model =
    div [class "row"]
     [ totalLikes model
     , totalDrafts model
     , totalPublications model
     ]


totalDrafts : Model -> Html msg
totalDrafts model =
    case model.remote.user of
        Success user ->
            div [class "col "]
            [ div [class "card statistics"]
                [div [class "card-content header valign-wrapper"]
                    [ i [class "material-icons f"] [text "apps"]
                    , span [class ""] [text "Total drafts"]
                    ]
                , div [class "divider"][]
                , div [class "card-content body"]
                    [ span [] [text <| toString <| Dict.size user.drafts]
                    ]
                ]

            ]
        _ -> div [] []



totalPublications : Model -> Html msg
totalPublications model =
    case model.remote.user of
        Success user ->
            div [class "col wider"]
            [ div [class "card statistics"]
                [div [class "card-content header  valign-wrapper"]
                    [ i [class "material-icons" ] [text "apps"]
                    , span [class ""] [text "Total Publications"]
                    ]
                , div [class "divider"][]
                , div [class "card-content body"]
                    [ span [] [text <| toString <| Dict.size user.publications]
                    ]
                ]
            ]
        _ -> div [] []




totalLikes : Model -> Html msg
totalLikes model =
    case model.remote.user of
        Success user ->
            div [class "col "]
            [ div [class "card statistics"]
                [div [class "card-content header  valign-wrapper"]
                    [ i [class "material-icons fg-error-color "] [text "favorite"]
                    , span [class ""] [text "Total likes"]
                    ]
                , div [class "divider"][]
                , div [class "card-content body"]
                    [ span [] [text <| toString <| countLikes user]
                    ]
                ]

            ]
        _ -> div [] []


countLikes: User -> Int
countLikes user =
    List.foldr (\d count -> d.likes + count)  0 (Dict.values user.drafts)
    + List.foldr (\p count -> p.likes + count) 0 (Dict.values user.publications)


