module RoutesModel exposing (..)

import TopicModel exposing (TopicId)


type Route
    = TopicsRoute
    | TopicRoute TopicId
    | NotFoundRoute
