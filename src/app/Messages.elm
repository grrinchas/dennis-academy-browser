module Messages exposing (..)

import Models exposing (Account, Auth0Token, AuthGraphCool, Form, Menu, Tokens, User)
import Mouse
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Validator exposing (ValidUser)
import Window exposing (Size)


type Web
    = Account (WebData Account)
    | Auth0Token (WebData Auth0Token)
    | GraphCoolToken (WebData AuthGraphCool)
    | User (WebData User)


type Msg
    = OnLocationChange Location
    | OnWindowChange Size
    | OnFormChange Form
    | OnMenuChange Menu
    | CreateAccount (Maybe ValidUser)
    | Login (Maybe ValidUser)
    | OnLoadTokens (Maybe Tokens)
    | OnFetch Web
    | OnEditorChange String
    | MouseClicked Mouse.Position
    | Logout
