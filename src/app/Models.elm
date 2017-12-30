module Models exposing (..)

import Err exposing (Oops)
import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(NotAsked), WebData)
import Routes exposing (Auth0Token, GraphCoolToken, Route(HomeRoute), RouteError)
import Slug exposing (Slug)
import Window exposing (Size)


type alias User =
    { username : String
    , email : String
    , picture : String
    }


type alias Topic =
    { id : String
    , title : String
    , slug : Slug
    , description : String
    , questions : List Question
    , icon : String
    , colour : String
    , next : Maybe Slug
    , previous : Maybe Slug
    }


type alias Question =
    { id : String
    , title : String
    , slug : Slug
    , answer : String
    , next : Maybe Slug
    , previous : Maybe Slug
    }


type alias Model =
    { -- topics : WebData (List Topic)
      route : Result RouteError Route
    , window : Window.Size
    , form : Form
    , account : WebData Account
    , tokens :
        { auth0 : WebData Auth0Token
        , graphCool : WebData GraphCoolToken
        }

    --    , user : WebData User
    }


initialModel : Model
initialModel =
    { -- topics = RemoteData.Loading
      --  , brand = RemoteData.Loading
      route = Ok <| HomeRoute Nothing
    , window = Size 0 0
    , form = initialForm
    , account = NotAsked
    , tokens =
        { auth0 = RemoteData.NotAsked
        , graphCool = RemoteData.NotAsked
        }

    --   , user = RemoteData.Loading
    }


type alias Form =
    { username : Maybe String
    , email : Maybe String
    , password : Maybe String
    , repeatPass : Maybe String
    }


type alias Account =
    { id : String
    , email : String
    , emailVerified : Bool
    }


loggedIn : Model -> Bool
loggedIn model =
    RemoteData.isSuccess <| RemoteData.append model.tokens.auth0 model.tokens.graphCool


initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    }
