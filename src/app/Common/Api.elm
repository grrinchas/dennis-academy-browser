module Common.Api exposing (..)

import Common.Decoders exposing (decodeBrand)
import GraphQl exposing (..)
import Messages exposing (Msg)
import RemoteData


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
