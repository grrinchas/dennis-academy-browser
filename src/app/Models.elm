module Models exposing (..)

import Dict exposing (Dict)
import Err exposing (InputError, Oops)
import Html exposing (Html)
import Http
import Mouse
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(Failure, NotAsked), WebData)
import Routes exposing (Route(HomeRoute), RouteError, parseLocation)
import Slug exposing (Slug)
import Window exposing (Size)


type alias Auth0Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }


type alias Draft =
    { id : String
    , content : String
    , draftType : String
    , title : String
    }


type alias Menu =
    { user : Bool
    , publish : Bool
    , newDraft : Bool
    }


type alias User =
    { id : String
    , username : String
    , email : String
    , picture : String
    , drafts : Dict String Draft
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
    , savedDraft : WebData Draft
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
    , form : Form
    , menu : Menu
    , remote : Remote
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


isLoggedIn : Model -> Bool
isLoggedIn model =
    RemoteData.isSuccess model.remote.user


mdText : String
mdText =
    "# Ius manus Phoebeius nec iuris amantis\n\n## Corpore regni\n\nLorem markdownum arceat, derepta ferarum loquuntur fratres; vocant circumsonat\nexplorant totumque claudit volat maternaque. Crura fuerat, per committi homo\neadem pede contraria cava tu excutit. Ardor habere, paterque sepulcri, nec\nconcipit suam at sede amicior illius bracchia! Sternuntur Themin, ut siste,\ndixerat auras ego ungula!\n\n## Aureus ambiguus vitulos quondam\n\nIn ad mane, deus quae fatetur adiere avis obliquaque oculis. Est eras una lues clamantia ignea, est et neque caelobracchia festa truncoque\n\n? Celer sacrata abdit\nultima, carinas, malis proles sonat, in quod qui; ipsa. Lateri te vela motu\ninter Delon numinis expositum iubemur, manus. Quae si vero uritur ut nati matris\nferi, versata gravem abdiderat ales contigerant.\n\nSpes diu quibus terram, viro et exhorruit occiderat gestare adspexit! In quam,\nsolo perpessi nepotibus: nec currum senserit flagrant dea sublime perde hanc\nconiecto frontem legit? Forsitan frontis unda patria victrix corpore, mea\nadmissa mihi iuverat in illud. Frondem maternas iactantem vultum; nisi Argus,\nharundine, rogum malo. Adeo aurea videoque verba, est solita, tollor in.\n\n\n## Ingreditur temperie meus credidit\n\nInvidiosa corpora rogos miserrima versus, orbe, nec turbatum ait ecce Phoebique\nlunae, et. Manibus avidus. Silentum qui centauri victa cum cum flere?\n\n- In simul confido\n- A tenuisse Aeson veros\n- More luna imago et mallem exierat carpere\n\n## Ulvam optima\n\nNudumque quoque sumus inhonorati exercita virago? Dum ait, vulnera Oete subruit\net, tacita vulnusque terra freta Ereboque germanae curvarique si porrexit magnis\nne armenti. Lambit lucoque unus eventuque nexilibus nectar me mihi amor fuerat\nquia perpetuum fugit, densa. Adspexit nostro insidiisque Pylios; mota pereat\nconiuge nec carmina triplicis retinere cuspide nollem; percaluit lacerum!\n\n- Criminis fusum sucus spectas\n- Densa delphines aratro\n- Sua virgine pudore iamdudum\n- Repetisse dixerat eodem flammae\n- Thalamo iuxta unum ictus\n\nSi conubia formatus induitur dicere et iaculum flammas pariter illa magnis\nperque esse. Pietas fuit vanum dederam, canes Caucasiumque nulla. Sub hamos\nmedioque adsidua alimentaque. Cephisias animal tarda, Indis! Pastor omnis,\ndicit, Ionio Phoce, passim, Corythi."


type Web
    = WebAccount (WebData Account)
    | WebAuth0Token (WebData Auth0Token)
    | WebGraphCoolToken (WebData AuthGraphCool)
    | WebUser (WebData User)
    | WebSaveDraft (WebData Draft)
    | WebCreateDraft (WebData Draft)


type Msg
    = NoOperation
    | OnLocationChange Location
    | UpdateRoute Route
    | OnFormChange Form
    | OnMenuChange Menu
    | CreateAccount (Maybe ValidUser)
    | Login (Maybe ValidUser)
    | OnLoadTokens (Maybe Tokens)
    | OnFetch Web
    | SaveDraft Draft
    | CreateDraft Draft
    | OnDraftChange Draft
    | MouseClicked Mouse.Position
    | Logout


type Valid
    = Valid String


type alias ValidUser =
    { username : Valid
    , email : Valid
    , password : Valid
    }


type alias ErrorResponse =
    { name : String
    , descriptor : String
    , code : InputError
    , statusCode : Int
    }


location : Location -> Model -> Model
location location model =
    { model | route = parseLocation location }


route : Result RouteError Route -> Model -> Model
route route model =
    { model | route = route }


routeError : RouteError -> Model -> Model
routeError routeError model =
    route (Err routeError) model


initialRoute : Result RouteError Route
initialRoute =
    Ok HomeRoute


form : Form -> Model -> Model
form form model =
    { model | form = form }


formUsername : Maybe String -> Model -> Model
formUsername maybe model =
    case model.form of
        form ->
            { model | form = { form | username = maybe } }


formEmail : Maybe String -> Model -> Model
formEmail maybe model =
    case model.form of
        form ->
            { model | form = { form | email = maybe } }


formPassword : Maybe String -> Model -> Model
formPassword maybe model =
    case model.form of
        form ->
            { model | form = { form | password = maybe } }


formPasswordRepeat : Maybe String -> Model -> Model
formPasswordRepeat maybe model =
    case model.form of
        form ->
            { model | form = { form | repeatPass = maybe } }


initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    }


resetForm : Model -> Model
resetForm model =
    form initialForm model


menu : Menu -> Model -> Model
menu menu model =
    { model | menu = menu }


menuUser : Bool -> Model -> Model
menuUser bool model =
    case model.menu of
        menu ->
            { model | menu = { menu | user = bool } }


menuPublish : Bool -> Model -> Model
menuPublish bool model =
    case model.menu of
        menu ->
            { model | menu = { menu | publish = bool } }


menuNewDraft : Bool -> Model -> Model
menuNewDraft bool model =
    case model.menu of
        menu ->
            { model | menu = { menu | newDraft = bool } }


initialMenu : Menu
initialMenu =
    { user = False
    , publish = False
    , newDraft = False
    }


resetMenu : Model -> Model
resetMenu model =
    menu initialMenu model


remote : Remote -> Model -> Model
remote remote model =
    { model | remote = remote }


remoteAuth0 : WebData Auth0Token -> Model -> Model
remoteAuth0 web model =
    case model.remote of
        remote ->
            { model | remote = { remote | auth0 = web } }


remoteGraphCool : WebData AuthGraphCool -> Model -> Model
remoteGraphCool web model =
    case model.remote of
        remote ->
            { model | remote = { remote | graphCool = web } }


remoteAccount : WebData Account -> Model -> Model
remoteAccount web model =
    case model.remote of
        remote ->
            { model | remote = { remote | account = web } }


remoteUser : WebData User -> Model -> Model
remoteUser web model =
    case model.remote of
        remote ->
            { model | remote = { remote | user = web } }


remoteUpdatedDraft : WebData Draft -> Model -> Model
remoteUpdatedDraft web model =
    case model.remote of
        remote ->
            { model | remote = { remote | savedDraft = web } }


failRemoteUser : Http.Error -> Model -> Model
failRemoteUser err model =
    remoteUser (Failure err) model


initialRemote : Remote
initialRemote =
    { auth0 = RemoteData.NotAsked
    , graphCool = RemoteData.NotAsked
    , account = RemoteData.NotAsked
    , user = RemoteData.NotAsked
    , savedDraft = RemoteData.NotAsked
    }


resetRemote : Model -> Model
resetRemote model =
    remote initialRemote model


initialModel : Model
initialModel =
    { route = initialRoute
    , form = initialForm
    , menu = initialMenu
    , remote = initialRemote
    }


andThen : (a -> ( b, List c )) -> ( a, List c ) -> ( b, List c )
andThen apply ( a, c ) =
    let
        ( b, d ) =
            apply a
    in
        ( b, c ++ d )


withCommands : List (Cmd msg) -> Model -> ( Model, Cmd msg )
withCommands list model =
    ( model, Cmd.batch list )


withNoCommand : Model -> ( Model, Cmd msg )
withNoCommand model =
    withCommands [] model
