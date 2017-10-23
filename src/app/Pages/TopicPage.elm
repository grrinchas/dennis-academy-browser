module TopicPage exposing (..)

import Html exposing (Html, h1, text)
import Models exposing (Model)
import Msgs exposing (Msg(OnMaterialChange))
import NotFoundPage exposing (notFoundPage)
import RemoteData
import TopicModel exposing (TopicId)
import Markdown exposing (Options)
import Material.Options as Options exposing (center)
import Material.Spinner as Loading
import Material.Button as Button
import Material.Color as Color exposing (background, primary, white)


topicPage : Model -> TopicId -> Html Msg
topicPage model topicId =
    case model.topics of
        RemoteData.NotAsked ->
            text ""

        RemoteData.Loading ->
            Options.div [ Options.center, Options.css "height" "100vh" ]
                [ Loading.spinner
                    [ Loading.active True ]
                ]

        RemoteData.Success topics ->
            let
                maybeTopic =
                    topics
                        |> List.filter (\topic -> topic.id == topicId)
                        |> List.head
            in
                case maybeTopic of
                    Just topic ->
                        Options.div [ center, Options.css "flex-direction" "column" ]
                            [ Options.styled h1 [ Color.text primary ] [ text "Description" ]
                            , Options.div [] []
                            , Options.styled Markdown.toHtml
                                [ background white
                                , Options.css "padding" "20px"
                                , Options.css "max-width" "500px"
                                ]
                                topic.description
                            , Options.div [ Options.css "height" "20px" ] []
                            , Options.div [ Options.css "display" "flex", Options.css "width" "540px" ]
                                [ Button.render OnMaterialChange
                                    [ 9, 0, 0, 1 ]
                                    model.mdl
                                    [ Button.ripple
                                    , Button.colored
                                    , Button.raised
                                    , Button.link ""
                                    , Options.css "align-self" "start"
                                    ]
                                    [ text "No thanks!" ]
                                , Button.render OnMaterialChange
                                    [ 9, 0, 0, 1 ]
                                    model.mdl
                                    [ Button.ripple
                                    , Button.colored
                                    , Button.raised
                                    , Button.link ""
                                    , Options.css "margin-left" "auto"
                                    ]
                                    [ text "Let's do it!" ]
                                ]
                            ]

                    Nothing ->
                        notFoundPage

        RemoteData.Failure err ->
            text (toString err)
