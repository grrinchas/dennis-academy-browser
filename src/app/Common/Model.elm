module Common.Model exposing (..)

import Either exposing (Either)
import Html exposing (Html)
import Slug exposing (Slug)


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

type alias SlugTitle = Slug

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


