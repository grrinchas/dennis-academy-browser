module Messages exposing (..)

import Models exposing (Account, Form)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Validator exposing (ValidUser)
import Window exposing (Size)


type Msg
    = OnLocationChange Location
    | OnWindowChange Size
    | OnFormChange Form
    | CreateAccount (Maybe ValidUser)
    | OnFetchAccount (WebData Account)
