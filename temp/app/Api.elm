module Api exposing (..)

import Decoders exposing (..)
import GraphQl exposing (..)
import Http exposing (Header, jsonBody)
import Messages exposing (Msg)
import Encoders as Encoders exposing (clientId)
import Model exposing (..)
import RemoteData exposing (RemoteData)
import Validator exposing (ValidUser)


signUpUrl : String
signUpUrl =
    "https://nookit.eu.auth0.com/dbconnections/signup"


loginUrl : String
loginUrl =
    "https://nookit.eu.auth0.com/oauth/token"


cmsUrl : String
cmsUrl =
    "https://api.graphcms.com/simple/v1/dgacademy"


fetchBrand : Cmd Msg
fetchBrand =
    toHttpRequest (GraphQl.query cmsUrl brandQuery decodeBrand)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchBrand


brandQuery : GraphQl.Value Root
brandQuery =
    GraphQl.object
        [ GraphQl.field "Brand"
            |> withArgument "name" (GraphQl.string "dgacademy")
            |> withSelectors
                [ GraphQl.field "primaryColour"
                , GraphQl.field "secondaryColour"
                , GraphQl.field
                    "logo"
                    |> withSelectors
                        [ GraphQl.field "url" ]
                ]
        ]


authorisedRequest : Token -> Http.Request User
authorisedRequest token =
    Http.request
        { method = "GET"
        , headers = [ Http.header "Authorization" <| "Bearer " ++ token.accessToken ]
        , url = "https://nookit.eu.auth0.com/userinfo"
        , body = Http.emptyBody
        , expect = Http.expectJson decodeUser
        , timeout = Nothing
        , withCredentials = False
        }


fetchUserInfo : Token -> Cmd Msg
fetchUserInfo token =
    authorisedRequest token
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchUserInfo


signUp : ValidUser -> Cmd Msg
signUp user =
    Http.post signUpUrl (jsonBody <| Encoders.signUp user) decodeSignUp
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnUserSignUp


login : ValidUser -> Cmd Msg
login user =
    Http.post loginUrl (jsonBody <| Encoders.login user) decodeToken
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnUserLogin


fetchAllTopics : Cmd Msg
fetchAllTopics =
    toHttpRequest (GraphQl.query cmsUrl topicQuery decodeTopics)
        |> RemoteData.sendRequest
        |> Cmd.map Messages.OnFetchTopics


topicQuery : GraphQl.Value Root
topicQuery =
    GraphQl.object
        [ GraphQl.field "allTopics"
            |> withSelectors
                [ GraphQl.field "id"
                , GraphQl.field "title"
                , GraphQl.field "description"
                , GraphQl.field "questions"
                    |> withSelectors
                        [ GraphQl.field "id"
                        , GraphQl.field "title"
                        , GraphQl.field "answer"
                        , GraphQl.field "nextQuestion" |> withSelectors [ GraphQl.field "title" ]
                        , GraphQl.field "previousQuestion" |> withSelectors [ GraphQl.field "title" ]
                        ]
                , GraphQl.field "icon" |> withSelectors [ GraphQl.field "url" ]
                , GraphQl.field "colour"
                , GraphQl.field "nextTopic" |> withSelectors [ GraphQl.field "title" ]
                , GraphQl.field "previousTopic" |> withSelectors [ GraphQl.field "title" ]
                ]
        ]
