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
    , bio : String
    }


type alias Draft =
    { id : String
    , createdAt : Date
    , updatedAt : Date
    , content : String
    , draftType : String
    , title : String
    , visibility : Visibility
    , owner : DraftOwner
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
    , owner = DraftOwner "" "" ""
    }


type alias User =
    { id : String
    , username : String
    , email : String
    , picture : String
    , bio : String
    , drafts : Dict String Draft
    }


type alias UserProfile =
    { username : String
    , picture : String
    , bio : String
    , drafts : List Draft
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
    , refreshedPublicDrafts : WebData ()
    , userProfile : WebData UserProfile
    }


type alias Model =
    { route : Result RouteError Route
    , form : Form
    , menu : DisplayMenu
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


type Msg
    = WhenNoOperation
    | WhenTokensLoaded (Maybe Tokens)
    | WhenLocationChanges Location
    | WhenFormChanges Form
    | WhenMenuChanges DisplayMenu
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
    | ClickUpdateProfile
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
    , userBio : String
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


formUserBio : String -> Model -> Model
formUserBio string model =
    case model.form of
        form ->
            { model | form = { form | userBio = string } }


initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    , draftTitleNew = "Very descriptive draft title..."
    , userBio = ""
    }


resetForm : Model -> Model
resetForm model =
    form initialForm model



type alias DisplayMenu =
    { user : Bool
    , publish : Bool
    , newDraft : Bool
    , deleteDraft : { id : String, display : Bool }
    , publicDraft : { id : String, display : Bool }
    , displayDraft : Bool
    , filterDraft :
        { display: Bool
         ,publicDraftsPage:
            { mine: Bool
            , others: Bool
            }
        }
    }


initialMenu : DisplayMenu
initialMenu =
    { user = False
    , publish = False
    , newDraft = False
    , deleteDraft = { id = "", display = False }
    , publicDraft = { id = "", display = False }
    , displayDraft = False
    , filterDraft =
        { display = False
        , publicDraftsPage =
            { mine = True
            , others = True
            }
        }
    }


isMenuVisible : DisplayMenu -> Bool
isMenuVisible menu =
    menu.user
        || menu.publish
        || menu.newDraft
        || menu.deleteDraft.display
        || menu.publicDraft.display
        || menu.displayDraft
        || menu.filterDraft.display


menu : DisplayMenu -> Model -> Model
menu menu model =
    { model | menu = menu }


reset: DisplayMenu -> DisplayMenu
reset menu =
        { user = False
        , publish = False
        , newDraft = False
        , deleteDraft = { id = "", display = False }
        , publicDraft = { id = "", display = False }
        , displayDraft = False
        , filterDraft =
            { display = False
            , publicDraftsPage =
                { mine = menu.filterDraft.publicDraftsPage.mine
                , others = menu.filterDraft.publicDraftsPage.others
                }
            }
        }



resetMenu : Model -> Model
resetMenu model = {model | menu = reset model.menu}


menuUser : DisplayMenu -> DisplayMenu
menuUser menu =
    case reset menu of
        newMenu -> { newMenu | user = True }


menuPublish : DisplayMenu -> DisplayMenu
menuPublish menu =
    case reset menu of
        newMenu -> { newMenu | publish = True }


menuNewDraft : DisplayMenu -> DisplayMenu
menuNewDraft menu =
    case reset menu of
        newMenu -> { newMenu | newDraft = True }


menuDeleteDraft : String -> DisplayMenu -> DisplayMenu
menuDeleteDraft id menu =
    case reset menu of
        newMenu -> { newMenu | deleteDraft = { display = True, id = id }}


menuPublicDraft : String -> DisplayMenu -> DisplayMenu
menuPublicDraft id menu =
    case reset menu of
        newMenu -> { newMenu | publicDraft = { display = True, id = id }}


menuFilterDraft : DisplayMenu -> DisplayMenu
menuFilterDraft menu =
    case (reset menu, menu.filterDraft) of
        (newMenu, filter) -> { newMenu | filterDraft = {filter | display = True}}


menuFilterPublicDraftMine : Bool -> DisplayMenu -> DisplayMenu
menuFilterPublicDraftMine bool menu =
    case ( menu.filterDraft, menu.filterDraft.publicDraftsPage) of
        (filter, page) -> { menu | filterDraft = {filter | publicDraftsPage = {page | mine = bool}}}


menuFilterPublicDraftOthers : Bool -> DisplayMenu -> DisplayMenu
menuFilterPublicDraftOthers bool menu =
    case ( menu.filterDraft, menu.filterDraft.publicDraftsPage) of
        ( filter, page) -> { menu | filterDraft = {filter | publicDraftsPage = {page | others = bool}}}


menuDisplayDraft : DisplayMenu
menuDisplayDraft =
    { initialMenu | displayDraft = True }


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
