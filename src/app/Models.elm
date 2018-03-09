module Models exposing (..)

import Date exposing (Date)
import Dict exposing (Dict)
import Err exposing (InputError, Oops)
import Html exposing (Attribute)
import Http
import Mouse
import Navigation exposing (Location)
import RemoteData exposing (RemoteData(Failure, NotAsked, Success), WebData, succeed)
import Routes exposing (Route(HomeRoute), RouteError, parseLocation)
import Time exposing (Time)


type NotificationType
    = LIKED_DRAFT
    | UNLIKED_DRAFT
    | LIKED_PUBLICATION
    | UNLIKED_PUBLICATION


type alias Notification =
    { id : String
    , createdAt : Date
    , updatedAt : Date
    , notificationType: NotificationType
    , sender: UserProfile
    , receiver: UserProfile
    , message: String
    }


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
    { id: String
    , username : String
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
    , likes: Int
    }


type alias Publication =
    { id : String
    , createdAt : Date
    , updatedAt : Date
    , content : String
    , title : String
    , owner : DraftOwner
    , image: String
    , likes: Int
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
    , owner = DraftOwner "" "" "" ""
    , likes = 0
    }




initialNotification: Notification
initialNotification =
    { id = ""
    , createdAt = Date.fromTime <| Time.millisecond * 0
    , updatedAt = Date.fromTime <| Time.millisecond * 0
    , notificationType = LIKED_DRAFT
    , sender = UserProfile "" "" "" [] []
    , receiver = UserProfile "" "" "" [] []
    , message = ""
    }


type alias User =
    { id : String
    , username : String
    , email : String
    , picture : String
    , bio : String
    , drafts : Dict String Draft
    , likedDrafts: Dict String Draft
    , likedPublications: Dict String Publication
    , publications : Dict String Publication
    , sentNotifications: Dict String Notification
    , receivedNotifications: Dict String Notification
    }


type alias UserProfile =
    { username : String
    , picture : String
    , bio : String
    , drafts : List Draft
    , likedDrafts: List Draft
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
    , publicDrafts : WebData (Dict String Draft)
    , publications: WebData (Dict String Publication)
    , refreshedPublicDrafts : WebData ()
    , userProfile : WebData UserProfile
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
    | WhenSnackBarChanges SnackBar

    | ClickMouse Mouse.Position
    | ClickUpdateRoute Route
    | ClickLogout
    | ClickCreateAccount (Maybe ValidUser)
    | ClickLogin (Maybe ValidUser)
    | ClickUpdateProfile

    -- Click draft
    | ClickCreateDraft Draft
    | ClickUpdateDraft Draft
    | ClickDeleteDraft Draft
    | ClickRefreshPublicDrafts
    | ClickLikeDraft Draft
    | ClickUnLikeDraft Draft

    -- Click publication
    | ClickCreatePublication Publication
    | ClickUpdatePublication Publication
    | ClickDeletePublication Publication
    | ClickLikePublication Publication
    | ClickUnLikePublication Publication

    -- Click notification
    | ClickDeleteNotification Notification

    -- SlideShow
    | ClickLeftSlide
    | ClickRightSlide

    --  Remote data user
    | OnFetchCreatedAccount (WebData Account)
    | OnFetchAuth0Token (WebData Auth0Token)
    | OnFetchGraphCoolToken (WebData AuthGraphCool)
    | OnFetchUserInfo (WebData User)
    | OnFetchUserProfile (WebData UserProfile)

    --  Remote data draft
    | OnFetchCreatedDraft (WebData Draft)
    | OnFetchUpdatedDraft (WebData Draft)
    | OnFetchDeletedDraft (WebData String)
    | OnFetchPublicDrafts (WebData (Dict String Draft))

    --  Remote data publication
    | OnFetchCreatedPublication (WebData Publication)
    | OnFetchUpdatedPublication (WebData Publication)
    | OnFetchDeletedPublication (WebData String)
    | OnFetchPublications (WebData (Dict String Publication))



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
    , publishUrl : String
    , updatePublication: Maybe String
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

formPublishUrl: String -> Model -> Model
formPublishUrl string model =
    case model.form of
        form ->
            { model | form = { form | publishUrl = string } }

formUpdatePublication: Maybe String -> Model -> Model
formUpdatePublication string model =
    case model.form of
        form ->
            { model | form = { form | updatePublication = string } }

initialForm : Form
initialForm =
    { username = Just "admin"
    , email = Just "admin@mail.com"
    , password = Just "admin1"
    , repeatPass = Just "admin1"
    , draftTitleNew = "Very descriptive draft title..."
    , userBio = ""
    , publishUrl = ""
    , updatePublication = Nothing
    }


resetForm : Model -> Model
resetForm model =
    form initialForm model


type Direction = Ascending | Descending

type SortDraftBy
    = CreatedAt Direction
    | UpdatedAt Direction
    | Title Direction
    | Owner Direction
    | Likes Direction


flipDirection: SortDraftBy -> SortDraftBy
flipDirection sort =
    case sort of
        CreatedAt Ascending -> CreatedAt Descending
        CreatedAt Descending -> CreatedAt Ascending
        UpdatedAt Ascending -> UpdatedAt Descending
        UpdatedAt Descending -> UpdatedAt Ascending
        Title Ascending -> Title Descending
        Title Descending -> Title Ascending
        Owner Ascending -> Owner Descending
        Owner Descending -> Owner Ascending
        Likes Ascending -> Likes Descending
        Likes Descending -> Likes Ascending


isCreated: SortDraftBy -> Bool
isCreated sort =
    case sort of
        CreatedAt _ -> True
        _ -> False

isUpdated: SortDraftBy -> Bool
isUpdated sort =
    case sort of
        UpdatedAt _ -> True
        _ -> False

isTitle: SortDraftBy -> Bool
isTitle sort =
    case sort of
        Title _ -> True
        _ -> False

isOwner: SortDraftBy -> Bool
isOwner sort =
    case sort of
        Owner _ -> True
        _ -> False
isLikes: SortDraftBy -> Bool
isLikes sort =
    case sort of
        Likes _ -> True
        _ -> False

direction: SortDraftBy -> Direction
direction sort =
    case sort of
    CreatedAt dir -> dir
    UpdatedAt dir -> dir
    Title dir -> dir
    Owner dir -> dir
    Likes dir -> dir

type alias DisplayMenu =
    { user : Bool
    , publish : Bool
    , newDraft : Bool
    , notifications: Bool
    , delete : { id : String, display : Bool }
    , publicDraft : { id : String, display : Bool }
    , displayDraft : Bool
    , filterDraft :
        { display: Bool
         ,publicDraftsPage:
            {liked: Bool
            , notLiked: Bool
            }
         ,localDraftsPage:
            { public: Bool
            , local: Bool
            }
        }
    , sortDraft:
        { display: Bool
        , sortBy: SortDraftBy
        }
    }


initialMenu : DisplayMenu
initialMenu =
    { user = False
    , publish = False
    , newDraft = False
    , notifications = False
    , delete = { id = "", display = False }
    , publicDraft = { id = "", display = False }
    , displayDraft = False
    , filterDraft =
        { display = False
        , publicDraftsPage =
            { liked= True
            , notLiked = True
            }
        ,localDraftsPage=
           { public = True
           , local = True
           }
        }
    , sortDraft=
        { display= False
        , sortBy = CreatedAt Descending
        }
    }


menu : DisplayMenu -> Model -> Model
menu menu model =
    { model | menu = menu }


reset: DisplayMenu -> DisplayMenu
reset menu =
    { user = False
    , publish = False
    , newDraft = False
    , notifications = False
    , delete = { id = "", display = False }
    , publicDraft = { id = "", display = False }
    , displayDraft = False
    , filterDraft =
        { display = False
        , publicDraftsPage =
            { liked = menu.filterDraft.publicDraftsPage.liked
            , notLiked = menu.filterDraft.publicDraftsPage.notLiked
            }
        , localDraftsPage =
            { public = menu.filterDraft.localDraftsPage.public
            , local = menu.filterDraft.localDraftsPage.local
            }
        }
    , sortDraft=
        { display= False
        , sortBy = menu.sortDraft.sortBy
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




menuFilterPublicDraftLiked : Bool -> DisplayMenu -> DisplayMenu
menuFilterPublicDraftLiked bool menu =
    case ( menu.filterDraft, menu.filterDraft.publicDraftsPage) of
        ( filter, page) -> { menu | filterDraft = {filter | publicDraftsPage = {page | liked = bool}}}

menuFilterPublicDraftNotLiked : Bool -> DisplayMenu -> DisplayMenu
menuFilterPublicDraftNotLiked bool menu =
    case ( menu.filterDraft, menu.filterDraft.publicDraftsPage) of
        ( filter, page) -> { menu | filterDraft = {filter | publicDraftsPage = {page | notLiked = bool}}}

menuFilterLocalDraftPublic : Bool -> DisplayMenu -> DisplayMenu
menuFilterLocalDraftPublic bool menu =
    case ( menu.filterDraft, menu.filterDraft.localDraftsPage) of
        (filter, page) -> { menu | filterDraft = {filter | localDraftsPage = {page | public = bool}}}


menuDisplayDraft : DisplayMenu
menuDisplayDraft =
    { initialMenu | displayDraft = True }


menuSortDraft : DisplayMenu -> DisplayMenu
menuSortDraft menu =
    case (reset menu, menu.sortDraft) of
        (newMenu, sort) -> { newMenu | sortDraft = {sort | display = True}}


menuSortedDraft : SortDraftBy -> DisplayMenu -> DisplayMenu
menuSortedDraft sortBy menu =
    case menu.sortDraft of
        sort -> { menu | sortDraft = {display = True, sortBy= sortBy}}


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


remotePublicDrafts : WebData (Dict String Draft) -> Model -> Model
remotePublicDrafts web model =
    case model.remote of
        remote ->
            { model | remote = { remote | publicDrafts = web } }

remotePublications : WebData (Dict String Publication) -> Model -> Model
remotePublications web model =
    case model.remote of
        remote ->
            { model | remote = { remote | publications = web } }

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
    , publications = RemoteData.NotAsked
    , refreshedPublicDrafts = RemoteData.NotAsked
    , userProfile = RemoteData.NotAsked
    }


resetRemote : Model -> Model
resetRemote model =
    remote initialRemote model


type alias SnackBar =
    { message: String
    , display: Bool
    , action: Maybe {msg : Msg, string: String}
    }

initialSnackBar : SnackBar
initialSnackBar =
    { message= ""
    , display = False
    , action = Nothing
    }

resetSnackBar : Model -> Model
resetSnackBar model =
    snackBar initialSnackBar model

snackBar : SnackBar -> Model -> Model
snackBar bar model =
    {model| snackBar = bar}

type alias Model =
    { route : Result RouteError Route
    , form : Form
    , menu : DisplayMenu
    , remote : Remote
    , now : Time
    , snackBar: SnackBar
    , slideShow: Int
    }



initialModel : Model
initialModel =
    { route = initialRoute
    , form = initialForm
    , menu = initialMenu
    , remote = initialRemote
    , now = Time.second
    , snackBar = initialSnackBar
    , slideShow = 0
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

updatePublication : WebData Publication -> Model -> Model
updatePublication web model =
    RemoteData.append web model.remote.user
        |> RemoteData.map (\( pub, user ) -> { user | publications = Dict.insert pub.id pub user.publications })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model

updateLikedDraft : Draft -> Model -> Model
updateLikedDraft draft model =
    model.remote.user
        |> RemoteData.map (\user -> { user | likedDrafts = Dict.insert draft.id draft user.likedDrafts })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model

updateLikedPublication : Publication -> Model -> Model
updateLikedPublication pub model =
    model.remote.user
        |> RemoteData.map (\user -> { user | likedPublications = Dict.insert pub.id pub user.likedPublications })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model


updatePublicDrafts : WebData Draft -> Model -> Model
updatePublicDrafts web model =
    RemoteData.append web model.remote.publicDrafts
        |> RemoteData.map (\( draft, drafts ) -> Dict.insert draft.id draft drafts )
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remotePublicDrafts model)
        |> withError model


updatePublications : WebData Publication -> Model -> Model
updatePublications web model =
    RemoteData.append web model.remote.publications
        |> RemoteData.map (\( pub, publications) -> Dict.insert pub.id pub publications )
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remotePublications model)
        |> withError model


removeDraft : WebData String -> Model -> Model
removeDraft web model =
    RemoteData.append web model.remote.user
        |> RemoteData.map (\( id, user ) -> { user | drafts = Dict.remove id user.drafts })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model

removePublication : WebData String -> Model -> Model
removePublication web model =
    RemoteData.append web model.remote.user
        |> RemoteData.map (\( id, user ) -> { user | publications = Dict.remove id user.publications })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model

removeLikedDraft : Draft -> Model -> Model
removeLikedDraft draft model =
    model.remote.user
        |> RemoteData.map (\user -> { user | likedDrafts = Dict.remove draft.id user.likedDrafts })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model


removeLikedPublication : Publication-> Model -> Model
removeLikedPublication pub model =
    model.remote.user
        |> RemoteData.map (\user -> { user | likedPublications = Dict.remove pub.id user.likedPublications })
        |> RemoteData.map RemoteData.succeed
        |> RemoteData.map (flip remoteUser model)
        |> withError model

removeNotification : Notification -> Model -> Model
removeNotification note model =
    model.remote.user
        |> RemoteData.map (\user  -> { user | receivedNotifications = Dict.remove note.id user.receivedNotifications })
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


isUserDraftOwner: User -> Draft -> Bool
isUserDraftOwner user draft = user.username == draft.owner.username
