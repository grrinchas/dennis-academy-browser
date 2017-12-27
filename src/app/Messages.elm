module Messages exposing (..)

import Models exposing (Account, Form)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Token)
import Validator exposing (ValidUser)
import Window exposing (Size)


type IdProvider
    = Google
    | Facebook
    | Github
    | Database (Maybe ValidUser)

type Msg
    = OnLocationChange Location
    | OnWindowChange Size
    | OnFormChange Form
    | CreateAccount (Maybe ValidUser)
    | Login IdProvider
    | OnFetchAccount (WebData Account)
    | OnFetchToken (WebData Token)
