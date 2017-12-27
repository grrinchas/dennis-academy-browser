module Models exposing (..)

import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(NotAsked), WebData)
import Routes exposing (Route(HomeRoute))
import Slug exposing (Slug)
import Window exposing (Size)


type alias User =
    {}


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


type alias Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
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
      route : Maybe Route
    , window : Window.Size
    , form : Form
    , account : WebData Account

    --    , userForm : UserForm
    --    , signUp : WebData SignUp
    --    , token : WebData Token
    --    , user : WebData User
    }


initialModel : Model
initialModel =
    { -- topics = RemoteData.Loading
      --  , brand = RemoteData.Loading
      route = Just HomeRoute
    , window = Size 0 0
    , form = initialForm
    , account = NotAsked

    --  , signUp = RemoteData.NotAsked
    --  , token = RemoteData.NotAsked
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
