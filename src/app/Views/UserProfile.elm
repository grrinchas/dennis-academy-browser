module Views.UserProfile exposing (..)

import Components exposing (draftCard)
import Date
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Models exposing (Draft, Form, Menu, Msg(ClickCreateDraft, ClickDeleteDraft, ClickUpdateProfile, WhenFormChanges), User, UserProfile)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


view : Form -> Menu -> User -> UserProfile -> Html Msg
view form menu user profile =
    div [class "container user-profile"]
        [ div [class "row section"] []
          , header [class "row"]
                [ div [class "col s6 valign-wrapper"]
                   [ img [class "circle", src profile.picture ] []
                   , div []
                       [ h1 [class ""] [text profile.username]
                       , case user.username == profile.username of

                           True ->
                               input [ onInput <| (\bio -> WhenFormChanges {form| userBio = bio})
                                     , placeholder "Enter your bio.."
                                     , type_ "text"
                                     , value form.userBio
                                     ] []
                           False -> input [readonly True, type_ "text", value profile.bio] []
                       ]
                   ]
                , div [class "col s6"]
                    [ div [class "row"] []
                    , a [class "btn z-depth-0 right", onClick ClickUpdateProfile] [text "Update"]
                    ]

                ]

          , div [class "row section"] []
          , div [class "row "]
            [ div [class "col s12"]
                [ ul [ class "tabs" ]
                   [ li [ class "tab" ] [ a [ ] [ text "Drafts" ] ] ]
                ]
            ]
          , div [class "row "]
                (List.sortBy (\date -> Date.toTime <| .createdAt date) profile.drafts
                                |> List.reverse
                                |> List.map (draftCard menu user)
                            )

        ]


