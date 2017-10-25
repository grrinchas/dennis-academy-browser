module TopicPage exposing (..)

import Html exposing (Html, h1, text)
import Model exposing (Model)
import Messages exposing (Msg(OnMaterialChange))
import RemoteData
import TopicModel exposing (Topic, TopicId)
import Markdown exposing (Options)
import Material.Options as Options exposing (center)
import Material.Spinner as Loading
import Material.Button as Button
import Material.Color as Color exposing (background, primary, white)


topicPage : Topic -> Html Msg
topicPage topic =
    text topic.description
