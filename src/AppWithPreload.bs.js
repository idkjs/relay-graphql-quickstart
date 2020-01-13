'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var ReactExperimental = require("reason-relay/src/ReactExperimental.bs.js");
var AppWithPreloadQuery_graphql$ReasonReactExamples = require("./__generated__/AppWithPreloadQuery_graphql.bs.js");

var convertResponse = AppWithPreloadQuery_graphql$ReasonReactExamples.Internal.convertResponse;

var convertVariables = AppWithPreloadQuery_graphql$ReasonReactExamples.Internal.convertVariables;

var UseQuery = ReasonRelay.MakeUseQuery({
      query: AppWithPreloadQuery_graphql$ReasonReactExamples.node,
      convertResponse: convertResponse,
      convertVariables: convertVariables
    });

var usePreloaded = UseQuery.usePreloaded;

var Query_use = UseQuery.use;

var Query_fetch = UseQuery.$$fetch;

var Query_preload = UseQuery.preload;

var Query = {
  Operation: /* alias */0,
  Types: /* alias */0,
  UseQuery: UseQuery,
  use: Query_use,
  $$fetch: Query_fetch,
  preload: Query_preload,
  usePreloaded: usePreloaded
};

function AppWithPreload(Props) {
  var preloadToken = Props.preloadToken;
  var query = Curry._1(usePreloaded, preloadToken);
  var match = query.repository;
  var data = match !== undefined ? match.name : "Nothing to see here";
  return React.createElement("div", {
              className: "App"
            }, React.createElement("div", {
                  className: "App-header"
                }, React.createElement(ReactExperimental.Suspense.make, {
                      children: React.createElement("p", undefined, data),
                      fallback: React.createElement("div", undefined, "Loading...")
                    })));
}

var make = AppWithPreload;

exports.Query = Query;
exports.make = make;
/* UseQuery Not a pure module */
