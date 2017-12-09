module Messages exposing (..)

import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route)
import Window exposing (Size)
import Model exposing (..)
import Validator exposing (ValidUser)


type Form
    = Username String
    | Email String
    | Password String
    | Repeat String
    | Submit (Maybe ValidUser)


type Msg
    = OnFetchTopics (WebData (List Topic))
    | OnFetchBrand (WebData Brand)
    | OnFetchUserInfo (WebData User)
    | OnWindowChange Size
    | UpdateRoute Route
    | OnLocationChange Location
    | OnUserSignUp (WebData SignUp)
    | OnUserLogin (WebData Token)
    | OnSignUpForm Form
    | OnLoginForm Form
