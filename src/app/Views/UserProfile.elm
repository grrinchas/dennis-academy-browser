module Views.UserProfile exposing (..)

import Components exposing (draftCard, loader, newLoader)
import Date
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import Models exposing (..)
import RemoteData exposing (RemoteData(Failure, Loading, NotAsked, Success), WebData)
import Routes exposing (Route(DraftRoute, ProfileRoute), path)


view : Model -> Html Msg
view model =
    div [ class "container" ]
        [ div [ class "row section" ] []
        , case RemoteData.append model.remote.userProfile model.remote.user of
            Success ( profile, user ) ->
                display model user profile

            _ ->
                div [class "loader-wrapper"] [ newLoader []]
        ]


display : Model -> User -> UserProfile -> Html Msg
display model user profile =
    let
        form =
            model.form
    in
        header [ class "row" ]
            [ case user.username == profile.username of
                True ->
                    div [ class "col s12 valign-wrapper profile" ]
                        [ img [ class "circle ", src profile.picture ] []
                        , div [ class "bio" ]
                            [ div [ class "row reset-margin-bottom" ] [
                                h1 [ class "col  reset-margin-bottom reset-margin-top" ] [ text profile.username ] ]
                            , div [ class "row valign-wrapper reset-margin-bottom" ]
                                [ div [ class "col s9" ]
                                    [ input
                                        [ onInput <| (\bio -> WhenFormChanges { form | userBio = bio })
                                        , placeholder "Enter your bio.."
                                        , type_ "text"
                                        , class "no-style"
                                        , value form.userBio
                                        , maxlength 150
                                        ]
                                        []
                                    ]
                                , div [ class "col s3 save right-align" ] [ save model.remote.userProfile form ]
                                ]
                            ]
                        ]


                False ->
                    div [ class "col s12 valign-wrapper profile" ]
                        [ img [ class "circle", src profile.picture ] []
                        , div [ class "bio" ]
                            [ div [ class "row col s12 reset-margin-bottom" ]
                                [ h1 [ class " reset-margin-bottom reset-margin-top" ] [ text profile.username ] ]
                            , div [ class "row col s12 reset-margin-bottom" ] [ span [ class "bio-other" ] [ text profile.bio ] ]
                            ]
                        ]
            , div [ class "row section" ] []
            , div [ class "row reset-margin-bottom" ]
                [ div [ class "col s12" ]
                    [ ul [ class "tabs bg-text-color reset-padding-left" ]
                        [ li [ class "tab" ] [ a [] [ text <| "Drafts (" ++ (toString <| List.length profile.drafts) ++ ")" ] ] ]
                    ]
                ]
            , div [class "divider"] []
            , div [ class "row section" ]
                (List.sortBy (\date -> Date.toTime <| .createdAt date) profile.drafts
                    |> List.reverse
                    |> List.map (draftCard model.menu user)
                )
            ]


save : WebData UserProfile -> Form -> Html Msg
save webDraft form =
    case webDraft of
        NotAsked ->
            a [ class "right btn pulse", onClick <| ClickUpdateProfile ] [ small [] [ text "SAVE " ] ]

        Loading ->
            div [ class "right " ] [ newLoader [class "tiny"]]

        Success profile ->
            case profile.bio == form.userBio of
                True ->
                    div [ class "right" ] [ small [] [ text "SAVED" ] ]

                False ->
                    a [ class "right btn pulse", onClick <| ClickUpdateProfile ] [ small [] [ text "SAVE " ] ]

        Failure err ->
            div [ class "right fg-error-color" ] [ small [] [ text "Can't save!" ] ]


