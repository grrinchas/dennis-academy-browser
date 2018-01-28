module Views.Publication exposing (..)

import Components exposing (newLoader)
import Html exposing (..)
import Html.Attributes exposing (class)
import Models exposing (..)
import RemoteData exposing (RemoteData(Success))


view : Model -> Maybe Publication -> Html Msg
view model pub =
    div [ class " " ] <|
        case ( model.remote.user, pub ) of
            ( Success user, Just p ) ->
                [text p.title]
                --display model draft

            _ ->
                [div [class "loader-wrapper"] [ newLoader [] ]]
