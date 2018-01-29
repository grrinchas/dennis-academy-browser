module Views.Publication exposing (..)

import Components exposing (newLoader)
import Html exposing (..)
import Html.Attributes exposing (class, src)
import Markdown
import Models exposing (..)
import RemoteData exposing (RemoteData(Success))


view : Model -> Maybe Publication -> Html Msg
view model pub =
    div [ class "publication" ]
        [ div [class "row section"] []
        , case ( model.remote.user, pub ) of
            ( Success user, Just p ) ->
                div []
                    [ div [ class "col s12 valign-wrapper profile" ]
                         [ img [ class "circle", src p.owner.picture ] []
                         , div [ class "bio" ]
                             [ div [ class "row col s12 reset-margin-bottom" ]
                                 [ h1 [ class " reset-margin-bottom reset-margin-top" ] [ text p.owner.username ] ]
                             , div [ class "row col s12 reset-margin-bottom" ] [ span [ class "bio-other" ] [ text p.owner.bio ] ]
                             ]
                         ]
                    , h1 [] [text  p.title]
                    , Markdown.toHtml [] p.content
                    ]
            _ ->
                 div [class "loader-wrapper"] [ newLoader [] ]

        ]

