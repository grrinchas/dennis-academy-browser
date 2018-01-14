module Models exposing (..)

import Date exposing (Date)
import Dict exposing (Dict)
import Err exposing (InputError, Oops)
import Http
import Mouse
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(Failure, NotAsked, Success), WebData, succeed)
import Routes exposing (Route(HomeRoute), RouteError, parseLocation)
import Time exposing (Time)


type alias Auth0Token =
    { accessToken : String
    , idToken : String
    , tokenType : String
    , expiresIn : Int
    }


type Visibility
    = PRIVATE
    | PUBLIC


type alias DraftOwner =
    { username : String
    , picture : String
    }


type alias Draft =
    { id : String
    , createdAt : Date
    , updatedAt : Date
    , content : String
    , draftType : String
    , title : String
    , visibility : Visibility
    , owner: DraftOwner
    }


initialDraft : Draft
initialDraft =
    { id = ""
    , createdAt = Date.fromTime <| Time.millisecond * 0
    , updatedAt = Date.fromTime <| Time.millisecond * 0
    , content = ""
    , draftType = "TUTORIAL"
    , title = "Very descriptive draft title..."
    , visibility = PRIVATE
    , owner = DraftOwner "" ""
    }


type alias User =
    { id : String
    , username : String
    , email : String
    , picture : String
    , drafts : Dict String Draft
    }

type alias UserProfile =
    { username: String
    , picture: String
    , drafts: List Draft
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
    , publicDrafts : WebData (List Draft)
    , refreshedPublicDrafts: WebData ()
    , userProfile: WebData UserProfile
    }


type alias Model =
    { route : Result RouteError Route
    , form : Form
    , menu : Menu
    , remote : Remote
    , now : Time
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


type Msg
    = WhenNoOperation
    | WhenTokensLoaded (Maybe Tokens)
    | WhenLocationChanges Location
    | WhenFormChanges Form
    | WhenMenuChanges Menu
    | WhenTimeChanges Time
    | WhenDraftChanges Draft

    | ClickMouse Mouse.Position
    | ClickUpdateRoute Route
    | ClickLogout
    | ClickCreateAccount (Maybe ValidUser)
    | ClickLogin (Maybe ValidUser)
    | ClickUpdateDraft Draft
    | ClickCreateDraft Draft
    | ClickDeleteDraft Draft
    | ClickRefreshPublicDrafts

    | OnFetchCreatedAccount (WebData Account)
    | OnFetchAuth0Token (WebData Auth0Token)
    | OnFetchGraphCoolToken (WebData AuthGraphCool)
    | OnFetchUserInfo (WebData User)
    | OnFetchUpdatedDraft (WebData Draft)
    | OnFetchCreatedDraft (WebData Draft)
    | OnFetchDeletedDraft (WebData String)
    | OnFetchPublicDrafts (WebData (List Draft))
    | OnFetchUserProfile (WebData UserProfile)


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


type alias Form =
    { username : Maybe String
    , email : Maybe String
    , password : Maybe String
    , repeatPass : Maybe String
    , draftTitleNew : String
    }


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


formDraftTitleNew : String -> Model -> Model
formDraftTitleNew string model =
    case model.form of
        form ->
            { model | form = { form | draftTitleNew = string } }


initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    , draftTitleNew = "Very descriptive draft title..."
    }


resetForm : Model -> Model
resetForm model =
    form initialForm model


type alias Menu =
    { user : Bool
    , publish : Bool
    , newDraft : Bool
    , deleteDraft : { id : String, display : Bool }
    , publicDraft : { id : String, display : Bool }
    }


initialMenu : Menu
initialMenu =
    { user = False
    , publish = False
    , newDraft = False
    , deleteDraft = { id = "", display = False }
    , publicDraft = { id = "", display = False }
    }


isMenuVisible : Menu -> Bool
isMenuVisible menu =
    menu.user
        || menu.publish
        || menu.newDraft
        || menu.deleteDraft.display
        || menu.publicDraft.display


menu : Menu -> Model -> Model
menu menu model =
    { model | menu = menu }


resetMenu : Model -> Model
resetMenu model =
    menu initialMenu model


menuUser : Menu
menuUser =
    { initialMenu | user = True }


menuPublish : Menu
menuPublish =
    { initialMenu | publish = True }


menuNewDraft : Menu
menuNewDraft =
    { initialMenu | newDraft = True }


menuDeleteDraft : String -> Menu
menuDeleteDraft id =
    { initialMenu | deleteDraft = { display = True, id = id } }


menuPublicDraft : String -> Menu
menuPublicDraft id =
    { initialMenu | publicDraft = { display = True, id = id } }


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


remotePublicDrafts : WebData (List Draft) -> Model -> Model
remotePublicDrafts web model =
    case model.remote of
        remote ->
            { model | remote = { remote | publicDrafts = web } }


remoteRefreshedPublicDrafts : WebData () -> Model -> Model
remoteRefreshedPublicDrafts web model =
    case model.remote of
        remote ->
            { model | remote = { remote | refreshedPublicDrafts = web } }


remoteUserProfile : WebData UserProfile -> Model -> Model
remoteUserProfile web model =
    case model.remote of
        remote ->
            { model | remote = { remote | userProfile = web } }


isDraftPublic : Draft -> Bool
isDraftPublic draft =
    case draft.visibility of
        PUBLIC ->
            True

        PRIVATE ->
            False


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
    , publicDrafts = RemoteData.NotAsked
    , refreshedPublicDrafts = RemoteData.NotAsked
    , userProfile = RemoteData.NotAsked
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
    , now = Time.second
    }


withCommands : List (Cmd msg) -> Model -> ( Model, Cmd msg )
withCommands list model =
    ( model, Cmd.batch list )


andAlso : (Model -> ( Model, Cmd msg )) -> ( Model, Cmd msg ) -> ( Model, Cmd msg )
andAlso f ( model, cmd ) =
    let
        ( m, c ) =
            f model
    in
        ( m, Cmd.batch [ c, cmd ] )


withNoCommand : Model -> ( Model, Cmd msg )
withNoCommand model =
    ( model, Cmd.none )


updateDraft : WebData Draft -> Model -> Model
updateDraft web model =
    RemoteData.append web model.remote.user
        |> RemoteData.map (\( draft, user ) -> { user | drafts = Dict.insert draft.id draft user.drafts })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model


removeDraft : WebData String -> Model -> Model
removeDraft web model =
    RemoteData.append web model.remote.user
        |> RemoteData.map (\( id, user ) -> { user | drafts = Dict.remove id user.drafts })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model


withError : Model -> WebData Model -> Model
withError model web =
    case web of
        Success a ->
            a

        Failure err ->
            failRemoteUser err
                model

        _ ->
            model


updateTokens : Maybe Tokens -> Model -> Model
updateTokens tokens model =
    case tokens of
        Just { auth0, graphCool } ->
            remoteAuth0 (succeed auth0) model
                |> remoteGraphCool (succeed graphCool)

        Nothing ->
            remoteAuth0 NotAsked model
                |> remoteGraphCool NotAsked
