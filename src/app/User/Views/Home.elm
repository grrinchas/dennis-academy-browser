module User.Views.Home exposing (..)

import Common.Model exposing (View)
import Html exposing (..)
import Html.Attributes exposing (..)
import User.Model exposing (User)


view : User -> View msg
view user =
    { mobile = tablet user, tablet = tablet user }


tablet : User -> Html msg
tablet user =
    div []
        [ p [] [ text user.id ]
        , p [] [ text user.username ]
        , p [] [ text user.email ]
        , p [] []
        ]
