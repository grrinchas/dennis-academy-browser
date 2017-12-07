module User.Model exposing (Token, UserForm, User,  initialUserForm )

import Common.Model exposing (..)
import Regex exposing (Regex)


type alias Token =
    { accessToken : String
    , token_type : String
    , expires_in : Int
    }

type alias UserForm =
    { username : Maybe String
    , password : Maybe String
    , repeat : Maybe String
    , email : Maybe String
    }


type alias User =
    { id : Id
    , username : String
    , email : String
    , email_verified : Bool
    }



initialUserForm : UserForm
initialUserForm =
    UserForm Nothing Nothing Nothing Nothing

