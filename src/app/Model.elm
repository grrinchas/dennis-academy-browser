module Model exposing (..)

import Html exposing (Html)
import Navigation exposing (Location)
import RemoteData exposing (WebData)
import Routes exposing (Route(HomeRoute))
import Slug exposing (Slug)
import Window exposing (Size)


type alias Id =
    String


type alias Title =
    String


type alias Description =
    String


type alias Icon =
    String


type alias Colour =
    String


type alias SlugTitle =
    Slug


type Responsive
    = Mobile
    | Tablet


type alias Mobile msg =
    Html msg


type alias Tablet msg =
    Html msg


type alias View msg =
    { mobile : Mobile msg
    , tablet : Tablet msg
    }


type alias Brand =
    { logo : String
    , primaryColour : String
    , secondaryColour : String
    }


type alias Topic =
    { id : Id
    , title : Title
    , slug : Slug
    , description : String
    , questions : List Question
    , icon : Icon
    , colour : Colour
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
    { id : Id
    , username : String
    , email : String
    , emailVerified : Bool
    }


type alias User =
    { username : String
    , email : String
    , picture : String
    , emailVerified : Bool
    }


initialUserForm : UserForm
initialUserForm =
    UserForm Nothing Nothing Nothing Nothing


type alias Answer =
    String


type alias Question =
    { id : Id
    , title : Title
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
    , responsive : Responsive
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
    , responsive = Mobile
    , userForm = initialUserForm
    , signUp = RemoteData.NotAsked
    , token = RemoteData.NotAsked
    , user = RemoteData.Loading
    }

