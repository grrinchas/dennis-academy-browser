module Views.Home exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Model exposing (User, View)


view : User -> View msg
view user =
    { mobile = tablet user, tablet = tablet user }


tablet : User -> Html msg
tablet user =
    div []
        [ p [] [ text user.username ]
        , p [] [ text user.picture ]
        , p [] [ text user.email ]
        , p [] []
        ]
