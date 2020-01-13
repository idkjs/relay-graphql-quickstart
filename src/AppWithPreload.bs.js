'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
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

var preload = UseQuery.preload;

var usePreloaded = UseQuery.usePreloaded;

var Query_use = UseQuery.use;

var Query_fetch = UseQuery.$$fetch;

var Query = {
  Operation: /* alias */0,
  Types: /* alias */0,
  UseQuery: UseQuery,
  use: Query_use,
  $$fetch: Query_fetch,
  preload: preload,
  usePreloaded: usePreloaded
};

function AppWithPreload$TestPreloaded(Props) {
  var preloadToken = Props.preloadToken;
  var query = Curry._1(usePreloaded, preloadToken);
  var match = query.repository;
  var repositoryName = match !== undefined ? match.name : "Nothing Preloaded";
  return React.createElement("div", undefined, "Preloaded " + repositoryName);
}

var TestPreloaded = {
  make: AppWithPreload$TestPreloaded
};

function AppWithPreload(Props) {
  var environment = ReasonRelay.useEnvironmentFromContext(/* () */0);
  var match = React.useState((function () {
          return ;
        }));
  var setPreloadToken = match[1];
  var preloadToken = match[0];
  React.useEffect((function () {
          Curry._1(setPreloadToken, (function (param) {
                  return Caml_option.some(Curry._6(preload, environment, /* () */0, undefined, undefined, undefined, /* () */0));
                }));
          return ;
        }), ([]));
  return React.createElement(React.Fragment, undefined, React.createElement(ReactExperimental.Suspense.make, {
                  children: preloadToken !== undefined ? React.createElement(AppWithPreload$TestPreloaded, {
                          preloadToken: Caml_option.valFromOption(preloadToken)
                        }) : null,
                  fallback: React.createElement("div", undefined, "Loading...")
                }));
}

var make = AppWithPreload;

exports.Query = Query;
exports.TestPreloaded = TestPreloaded;
exports.make = make;
/* UseQuery Not a pure module */
