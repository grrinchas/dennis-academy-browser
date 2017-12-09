module Views.Pages exposing (..)

import Decoders
import Html exposing (div)
import Http exposing (Error(..))
import Json.Decode
import Messages exposing (Msg)
import Model exposing (View)
import Views.ErrorPage as ErrorPage
import Views.Layout as Layout
import Views.NavBar as NavBar
import Views.Registration as Registration
import Views.Home as UserHome
import Views.Question as Question
import Views.Topics as Topics
import Views.Topic as Topic
import Model exposing (..)
import RemoteData exposing (..)
import Slug exposing (Slug)
import Validator exposing (..)


emptyPage : View msg
emptyPage =
    { mobile = div [] []
    , tablet = div [] []
    }


notFound : View Msg
notFound =
    ErrorPage.notFound


loading : View msg
loading =
    { mobile = Layout.loading
    , tablet = Layout.loading
    }


landing : Model -> View Msg
landing model =
    Layout.headerMain (map NavBar.view model.brand) (emptyPage)


topics : Model -> View Msg
topics model =
    map2 (\brand topics -> Layout.headerMain (NavBar.view brand) (Topics.view topics)) model.brand model.topics


topic : Model -> Slug -> View Msg
topic model id =
    case model.topics of
        NotAsked ->
            emptyPage

        Loading ->
            loading

        RemoteData.Success topics ->
            case findTopic id topics of
                Just topic ->
                    Layout.noContainer (map NavBar.view model.brand) (Topic.view topic)

                Nothing ->
                    notFound

        RemoteData.Failure err ->
            error err


question : Model -> Slug -> Slug -> View Msg
question model topicId questionId =
    case model.topics of
        NotAsked ->
            emptyPage

        Loading ->
            loading

        RemoteData.Success topics ->
            case findTopic topicId topics of
                Just topic ->
                    case findQuestion questionId topic of
                        Just question ->
                            Layout.noContainer (map NavBar.view model.brand) (Question.view topic question)

                        Nothing ->
                            notFound

                Nothing ->
                    notFound

        RemoteData.Failure err ->
            error err


signUp : Model -> View Msg
signUp model =
    case model.signUp of
        NotAsked ->
            Layout.onlyMain <| Registration.signUpView model.userForm

        RemoteData.Loading ->
            Layout.withLoader (Layout.onlyMain <| Registration.signUpView model.userForm)

        RemoteData.Success response ->
            Layout.onlyMain <| Registration.signUpSuccess model.userForm response

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    case Json.Decode.decodeString Decoders.decodeError response.body of
                        Ok result ->
                            case result.code of
                                UsernameTaken ->
                                    Layout.onlyMain <| Registration.signUpError model.userForm "Username is taken."

                                EmailTaken ->
                                    Layout.onlyMain <| Registration.signUpError model.userForm "Email is taken."

                                _ ->
                                    error err

                        _ ->
                            error err

                _ ->
                    error err


userHome : Model -> View Msg
userHome model =
    case model.user of
        RemoteData.NotAsked ->
            login model

        RemoteData.Loading ->
            loading

        RemoteData.Success u ->
            Layout.onlyMain <| UserHome.view u

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    if response.status.code == 401 then
                        login model
                    else
                        error err

                _ ->
                    error err


login : Model -> View Msg
login model =
    case model.token of
        RemoteData.NotAsked ->
            Layout.onlyMain <| Registration.loginView model.userForm Nothing

        RemoteData.Loading ->
            Layout.withLoader (Registration.loginView model.userForm Nothing)

        RemoteData.Success _ ->
            emptyPage

        RemoteData.Failure err ->
            case err of
                BadStatus response ->
                    if response.status.code == 403 then
                        Layout.onlyMain <| Registration.loginView model.userForm <| Just "Wrong email or password."
                    else
                        error err

                _ ->
                    error err


error : Http.Error -> View msg
error error =
    case error of
        BadUrl _ ->
            ErrorPage.networkError

        Timeout ->
            ErrorPage.networkError

        NetworkError ->
            ErrorPage.networkError

        BadStatus response ->
            ErrorPage.userError response

        BadPayload _ response ->
            ErrorPage.userError response


map : (a -> View m) -> WebData a -> View m
map view response =
    case response of
        NotAsked ->
            emptyPage

        Loading ->
            loading

        RemoteData.Success data ->
            view data

        RemoteData.Failure err ->
            error err


map2 : (a -> b -> View m) -> WebData a -> WebData b -> View m
map2 f a b =
    case a of
        NotAsked ->
            emptyPage

        Loading ->
            loading

        RemoteData.Success data ->
            map (f data) b

        RemoteData.Failure err ->
            error err


findTopic : Slug -> List Topic -> Maybe Topic
findTopic id =
    List.head << List.filter (\topic -> topic.slug == id)


findQuestion : Slug -> Topic -> Maybe Question
findQuestion id topic =
    List.head << List.filter (\question -> question.slug == id) <| topic.questions
