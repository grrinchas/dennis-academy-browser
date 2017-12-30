module Models exposing (..)

import Err exposing (Oops)
import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(NotAsked), WebData)
import Routes exposing (Auth0Token, GraphCoolToken, Route(HomeRoute), RouteError)
import Slug exposing (Slug)
import Window exposing (Size)


type alias UserData =
    { username : String
    , email : String
    , picture : String
    }


type alias Tokens =
    { auth0 : WebData Auth0Token
    , graphCool : WebData GraphCoolToken
    }


type alias User =
    { tokens : Tokens
    , data : WebData UserData
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
    , user : User

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
    , user =
        { tokens =
            { auth0 = RemoteData.NotAsked
            , graphCool = RemoteData.NotAsked
            }
        , data = NotAsked
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


initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    }
