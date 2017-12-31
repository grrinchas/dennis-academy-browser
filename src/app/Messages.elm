module Messages exposing (..)

import Models exposing (Account, Auth0Token, AuthGraphCool, Form, Menu, Tokens, User)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Validator exposing (ValidUser)
import Window exposing (Size)


type Msg
    = OnLocationChange Location
    | OnWindowChange Size
    | OnFormChange Form
    | OnMenuChange Menu
    | CreateAccount (Maybe ValidUser)
    | Login (Maybe ValidUser)
    | OnFetchAccount (WebData Account)
    | OnFetchAuth0Token (WebData Auth0Token)
    | OnFetchGraphCoolToken (WebData AuthGraphCool)
    | OnFetchUser (WebData User)
    | OnLoadTokens (Maybe Tokens)
    | Logout
