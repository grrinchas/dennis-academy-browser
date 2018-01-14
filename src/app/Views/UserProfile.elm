module Views.UserProfile exposing (..)

import Components exposing (draftCard)
import Date
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Models exposing (Draft, Menu, Msg(ClickCreateDraft, ClickDeleteDraft), User, UserProfile)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


view :  Menu -> User -> UserProfile -> Html Msg
view menu user profile =
    div [class "container user-profile"]
        [ div [class "row section"] []
          , header [class "row valign-wrapper "]
                [ img [class "circle", src profile.picture ] []
                , div []
                    [ h1 [class ""] [text profile.username]
                    , input [placeholder "Enter your bio..", type_ "text"] []
                    ]
                ]

          , div [class "row section"] []
          , div [class "row section"]
            [ ul [ class "tabs" ]
                   [ li [ class "tab" ] [ a [ ] [ text "Drafts" ] ]
                  -- , li [ class "tab not-implemented" ] [ a [ ] [ text "Latest" ] ]
                   ]
            ]
          , div [class "row "]
                (List.sortBy (\date -> Date.toTime <| .createdAt date) profile.drafts
                                |> List.reverse
                                |> List.map (draftCard menu user)
                            )

        ]


