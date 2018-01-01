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
    { user : Bool
    , publish : Bool
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
    , editor : String
    }


initialModel : Model
initialModel =
    { route = Ok HomeRoute
    , window = Size 0 0
    , form = initialForm
    , menu =
        { user = False
        , publish = False
        }
    , remote =
        { auth0 = RemoteData.NotAsked
        , graphCool = RemoteData.NotAsked
        , account = RemoteData.NotAsked
        , user = RemoteData.NotAsked
        }
    , editor = mdText
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


mdText : String
mdText =
    "# Ius manus Phoebeius nec iuris amantis\n\n## Corpore regni\n\nLorem markdownum arceat, derepta ferarum loquuntur fratres; vocant circumsonat\nexplorant totumque claudit volat maternaque. Crura fuerat, per committi homo\neadem pede contraria cava tu excutit. Ardor habere, paterque sepulcri, nec\nconcipit suam at sede amicior illius bracchia! Sternuntur Themin, ut siste,\ndixerat auras ego ungula!\n\n## Aureus ambiguus vitulos quondam\n\nIn ad mane, deus quae fatetur adiere avis obliquaque oculis. Est eras una lues clamantia ignea, est et neque caelobracchia festa truncoque\n\n? Celer sacrata abdit\nultima, carinas, malis proles sonat, in quod qui; ipsa. Lateri te vela motu\ninter Delon numinis expositum iubemur, manus. Quae si vero uritur ut nati matris\nferi, versata gravem abdiderat ales contigerant.\n\nSpes diu quibus terram, viro et exhorruit occiderat gestare adspexit! In quam,\nsolo perpessi nepotibus: nec currum senserit flagrant dea sublime perde hanc\nconiecto frontem legit? Forsitan frontis unda patria victrix corpore, mea\nadmissa mihi iuverat in illud. Frondem maternas iactantem vultum; nisi Argus,\nharundine, rogum malo. Adeo aurea videoque verba, est solita, tollor in.\n\n\n## Ingreditur temperie meus credidit\n\nInvidiosa corpora rogos miserrima versus, orbe, nec turbatum ait ecce Phoebique\nlunae, et. Manibus avidus. Silentum qui centauri victa cum cum flere?\n\n- In simul confido\n- A tenuisse Aeson veros\n- More luna imago et mallem exierat carpere\n\n## Ulvam optima\n\nNudumque quoque sumus inhonorati exercita virago? Dum ait, vulnera Oete subruit\net, tacita vulnusque terra freta Ereboque germanae curvarique si porrexit magnis\nne armenti. Lambit lucoque unus eventuque nexilibus nectar me mihi amor fuerat\nquia perpetuum fugit, densa. Adspexit nostro insidiisque Pylios; mota pereat\nconiuge nec carmina triplicis retinere cuspide nollem; percaluit lacerum!\n\n- Criminis fusum sucus spectas\n- Densa delphines aratro\n- Sua virgine pudore iamdudum\n- Repetisse dixerat eodem flammae\n- Thalamo iuxta unum ictus\n\nSi conubia formatus induitur dicere et iaculum flammas pariter illa magnis\nperque esse. Pietas fuit vanum dederam, canes Caucasiumque nulla. Sub hamos\nmedioque adsidua alimentaque. Cephisias animal tarda, Indis! Pastor omnis,\ndicit, Ionio Phoce, passim, Corythi."
