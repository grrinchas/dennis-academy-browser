module Views.UserProfile exposing (..)

import Components exposing (draftCard, loader)
import Date
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


view : Form -> Menu -> User -> UserProfile -> WebData UserProfile -> Html Msg
view form menu user profile profileWeb =
    div [class "container user-profile"]
        [ div [class "row section"] []
          , header [class "row"]
          [ case user.username == profile.username of
                True ->
                     div [class "col s12 valign-wrapper"]
                        [ img [class "circle", src profile.picture ] []
                        , div [class "bio-full"]
                            [ div [class "row "] [ h1 [class "col s12"] [text profile.username]]
                            , div [class "row valign-wrapper"]
                                [ div [class "col s9"]
                                    [ input [ onInput <| (\bio -> WhenFormChanges {form| userBio = bio})
                                        , placeholder "Enter your bio.."
                                        , type_ "text"
                                        , value form.userBio
                                        , maxlength 150
                                        ] []
                                    ]
                                , div [class "col s3 save right-align"] [ save profileWeb form ]

                                ]
                            ]
                        ]

                False ->
                     div [class "col s12 valign-wrapper"]
                        [ img [class "circle", src profile.picture ] []
                        , div [class "bio-full"]
                            [ div [class "row "] [ h1 [class "col s12"] [text profile.username]]
                            , div [class "row "] [ span [class "bio-other"] [text profile.bio]]
                            ]
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


save : WebData UserProfile -> Form -> Html Msg
save webDraft form =
    case webDraft of
        NotAsked ->
            a [ class "right dg-save-draft", onClick <| ClickUpdateProfile] [ small [] [ text "SAVE " ] ]

        Loading ->
            div [ class "right draft-loader valign-wrapper" ] [ loader ]

        Success profile ->
            case profile.bio == form.userBio of
                True ->
                    div [ class "save" ] [ small [] [ text "SAVED" ] ]

                False ->
                    a [ class "right dg-save-draft", onClick <| ClickUpdateProfile ] [ small [] [ text "SAVE " ] ]

        Failure err ->
            div [ class "error-save save" ] [ small [] [ text "Can't save!" ] ]
