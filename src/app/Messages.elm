module Messages exposing (..)

import Models exposing (Account, Form, User)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Auth0Token, GraphCoolToken)
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
    | OnFetchAuth0Token (WebData Auth0Token)
    | OnFetchGraphCoolToken (WebData GraphCoolToken)
    | OnLoadTokens (Maybe { auth0 : Auth0Token, graphCool : GraphCoolToken })
    | Logout
