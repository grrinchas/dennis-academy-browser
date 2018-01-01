module Views.Editor exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Markdown
import Messages exposing (Msg(OnEditorChange))
import Models exposing (..)
import Views.NavBar exposing (publishMenu)


view : String -> Html Msg
view editor =
    div [ class "dg-editor " ]
        [ div [ class "row header-row " ]
            [ div [ class "col s6 header-md " ]
                [ small [] [ text "MARKDOWN" ]
                , a [ class "right" ] [ small [] [ text "SAVE" ] ]
                ]
            , div
                [ class "col s6 " ]
                [ small [] [ text "HTML" ]
                , a [ class "right" ] [ small [] [ text "PREVIEW" ] ]
                ]
            ]
        , div [ class "row editor-row" ]
            [ div [ class "col s6 editor-ta" ]
                [ textarea [ onInput OnEditorChange ] [ text editor ] ]
            , div [ class "col s6 dg-preview" ]
                [ Markdown.toHtml [] editor ]
            ]
        ]
