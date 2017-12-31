module Models exposing (..)

import Err exposing (Oops)
import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(NotAsked), WebData)
import Routes exposing (Route(HomeRoute), RouteError)
import Slug exposing (Slug)
import Window exposing (Size)

type alias Auth0Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }

type alias Menu =
    { user: Bool
    }


type alias User =
    { id : String
    , username : String
    , email : String
    , picture : String
    }


type alias Tokens =
    { auth0 : Auth0Token
    , graphCool : AuthGraphCool
    }


type alias AuthGraphCool =
    { id : String
    , token : String
    }


type alias Remote =
    { auth0 : WebData Auth0Token
    , graphCool : WebData AuthGraphCool
    , account : WebData Account
    , user : WebData User
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
    { route : Result RouteError Route
    , window : Window.Size
    , form : Form
    , menu : Menu
    , remote : Remote
    }


initialModel : Model
initialModel =
    { route = Ok HomeRoute
    , window = Size 0 0
    , form = initialForm
    , menu =
        { user = False
        }
    , remote =
        { auth0 = RemoteData.NotAsked
        , graphCool = RemoteData.NotAsked
        , account = RemoteData.NotAsked
        , user = RemoteData.NotAsked
        }
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


isLoggedIn : Model -> Bool
isLoggedIn model =
    RemoteData.isSuccess model.remote.user
