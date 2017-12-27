module Model exposing (..)

import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route(HomeRoute, UserHomeRoute), UserRoute)
import Slug exposing (Slug)
import Window exposing (Size)


type alias View msg =
    { mobile : Html msg
    , tablet : Html msg
    }


type alias Brand =
    { logo : String
    , primaryColour : String
    , secondaryColour : String
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


type alias Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }


type alias UserForm =
    { username : Maybe String
    , password : Maybe String
    , repeat : Maybe String
    , email : Maybe String
    }


type alias SignUp =
    { id : String
    , username : String
    , email : String
    , emailVerified : Bool
    }


type alias User =
    { username : String
    , email : String
    , picture : String
    , emailVerified : Bool
    , menu: Bool
    }


initialUserForm : UserForm
initialUserForm =
    UserForm Nothing (Just "nezinau1") Nothing (Just "dg4675dg@gmail.com")


type alias Answer =
    String


type alias Question =
    { id : String
    , title : String
    , slug : Slug
    , answer : Answer
    , next : Maybe Slug
    , previous : Maybe Slug
    }


type alias Model =
    { topics : WebData (List Topic)
    , brand : WebData Brand
    , route : Route
    , window : Window.Size
    , userForm : UserForm
    , signUp : WebData SignUp
    , token : WebData Token
    , user : WebData User
    }


initialModel : Model
initialModel =
    { topics = RemoteData.Loading
    , brand = RemoteData.Loading
    , route = HomeRoute
    , window = Size 0 0
    , userForm = initialUserForm
    , signUp = RemoteData.NotAsked
    , token = RemoteData.NotAsked
    , user = RemoteData.Loading
    }


isLoggedIn : Model -> Bool
isLoggedIn model =
    RemoteData.isSuccess model.user


isLoggedOut : Model -> Bool
isLoggedOut model =
    not <| isLoggedIn model
