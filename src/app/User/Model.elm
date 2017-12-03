module User.Model exposing (..)

import Common.Model exposing (..)

type alias SignUpForm =
    { username: Maybe String
    , password: Maybe String
    , repeat: Maybe String
    , email: Maybe String
    }

type alias User =
    { id: Id
    , username: String
    , email: String
    , email_verified: Bool
    }


