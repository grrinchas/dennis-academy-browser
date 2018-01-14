module Commands exposing (..)

import Api
import Models exposing (..)
import Navigation
import Ports
import RemoteData exposing (RemoteData(Success))
import Routes exposing (..)
import Task
import Time


updateTime : Cmd Msg
updateTime =
    Task.perform WhenTimeChanges Time.now


saveTokens : Model -> Cmd Msg
saveTokens model =
    case ( model.remote.auth0, model.remote.graphCool ) of
        ( Success auth0, Success graphCool ) ->
            Ports.saveTokens <| Just { auth0 = auth0, graphCool = graphCool }

        _ ->
            Cmd.none


removeTokens : Cmd Msg
removeTokens =
    Ports.saveTokens Nothing





reroute : Model -> ( Model, Cmd Msg )
reroute model =
    case model.route of
        Ok route ->
            case ( route, isLoggedIn model ) of
                ( LoginRoute, True ) ->
                    ( model, Navigation.modifyUrl <| path DashboardRoute )

                ( SignUpRoute, True ) ->
                    ( model, Navigation.modifyUrl <| path DashboardRoute )

                ( DashboardRoute, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( DraftRoute _, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( DraftRoute _, True ) ->
                    withCommands [ updateTime ] model

                ( DraftsRoute, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( PublicDraftsRoute, False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( ProfileRoute _ , False ) ->
                    ( { model | route = Err NotFound }, Cmd.none )

                ( ProfileRoute id, True ) ->
                    Api.fetchUserProfile id model


                _ ->
                    withNoCommand model

        Err oops ->
            withNoCommand model
