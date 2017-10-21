module HomePage exposing (..)

import Html exposing (Html)
import Models exposing (Model)
import Msgs exposing (Msg)
import TopicView exposing (maybeTopicTable)


homePage : Model -> Html Msg
homePage model =
    maybeTopicTable model.topics
