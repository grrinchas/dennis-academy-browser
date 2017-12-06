module Messages exposing (..)

import Common.Model exposing (Brand)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route)
import Topic.Model exposing (Topic)
import User.Model exposing (User, ValidUser)
import Window exposing (Size)


type Form
    = Username String
    | Email String
    | Password String
    | Repeat String
    | Submit (Maybe ValidUser)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnFetchBrand (WebData Brand)
    | OnWindowChange Size
    | UpdateRoute Route
    | OnLocationChange Location
    | OnUserSignUp (WebData User)
    | OnSignUpForm Form
