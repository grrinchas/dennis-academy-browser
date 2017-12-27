module Main exposing (..)

import Api
import Html exposing (Html)
import Messages exposing (..)
import Models exposing (..)
import Navigation exposing (Location)
import Pages
import RemoteData exposing (RemoteData(NotAsked))
import Routes exposing (..)
import Task exposing (perform)
import Validator exposing (ValidUser)
import Window exposing (Size)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ Window.resizes (\size -> OnWindowChange size) ]


main : Program Never Model Msg
main =
    Navigation.program OnLocationChange
        { init =
            \location ->
                ( { initialModel | route = parseLocation location }
                , Cmd.batch
                    [ Navigation.modifyUrl location.hash
                    , perform OnWindowChange Window.size
                    ]
                )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


view : Model -> Html Msg
view model =
    if model.window.width <= 600 then
        Pages.mobile model
    else
        Pages.tablet model


andThen : (a -> ( b, List c )) -> ( a, List c ) -> ( b, List c )
andThen apply ( a, c ) =
    let
        ( b, d ) =
            apply a
    in
        ( b, c ++ d )


resetForm : Model -> ( Model, List (Cmd msg) )
resetForm model =
    ( { model | form = Form Nothing Nothing Nothing Nothing }, [] )


createAccount : Maybe ValidUser -> Model -> ( Model, List (Cmd Msg) )
createAccount mUser model =
    case mUser of
        Just user ->
            ( model, [ Api.createAccount user ] )

        Nothing ->
            ( model, [] )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnLocationChange location ->
            ( { model | route = parseLocation location }, [] )
                |> Tuple.mapSecond Cmd.batch

        OnWindowChange size ->
            ( { model | window = size }, Cmd.none )

        OnFormChange form ->
            ( { model | form = form }, [] )
                |> Tuple.mapSecond Cmd.batch

        CreateAccount user ->
            createAccount user model
                |> Tuple.mapSecond Cmd.batch

        OnFetchAccount account ->
            ( { model | account = account }, [] )
                |> andThen resetForm
                |> Tuple.mapSecond Cmd.batch
