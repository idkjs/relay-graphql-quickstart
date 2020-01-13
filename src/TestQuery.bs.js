'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var TestQuery_graphql$ReasonReactExamples = require("./__generated__/TestQuery_graphql.bs.js");

var convertResponse = TestQuery_graphql$ReasonReactExamples.Internal.convertResponse;

var convertVariables = TestQuery_graphql$ReasonReactExamples.Internal.convertVariables;

var UseQuery = ReasonRelay.MakeUseQuery({
      query: TestQuery_graphql$ReasonReactExamples.node,
      convertResponse: convertResponse,
      convertVariables: convertVariables
    });

var use = UseQuery.use;

var $$fetch = UseQuery.$$fetch;

var preload = UseQuery.preload;

var usePreloaded = UseQuery.usePreloaded;

var Query = {
  Operation: /* alias */0,
  Types: /* alias */0,
  UseQuery: UseQuery,
  use: use,
  $$fetch: $$fetch,
  preload: preload,
  usePreloaded: usePreloaded
};

function TestQuery$TestPreloaded(Props) {
  var preloadToken = Props.preloadToken;
  console.log("preloadToken", preloadToken);
  var query = Curry._1(usePreloaded, preloadToken);
  var match = query.repository;
  var repositoryName = match !== undefined ? match.name : "Nothing Preloaded";
  return React.createElement("div", undefined, "Preloaded " + repositoryName);
}

var TestPreloaded = {
  make: TestQuery$TestPreloaded
};

function TestQuery$Test(Props) {
  var environment = ReasonRelay.useEnvironmentFromContext(/* () */0);
  var match = React.useState((function () {
          return ;
        }));
  var setPreloadToken = match[1];
  var preloadToken = match[0];
  var match$1 = React.useState((function () {
          return ;
        }));
  var setFetchedResult = match$1[1];
  var query = Curry._5(use, /* () */0, undefined, undefined, undefined, /* () */0);
  var repository = query.repository;
  return React.createElement("div", undefined, React.createElement("div", undefined, repository !== undefined ? React.createElement("div", undefined, repository.name) : null), preloadToken !== undefined ? React.createElement(TestQuery$TestPreloaded, {
                    preloadToken: Caml_option.valFromOption(preloadToken)
                  }) : null, match$1[0] !== undefined ? "Fetched!" : null, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(setPreloadToken, (function (param) {
                                    return Caml_option.some(Curry._6(preload, environment, /* () */0, undefined, undefined, undefined, /* () */0));
                                  }));
                    })
                }, "Test preloaded"), React.createElement("button", {
                  onClick: (function (param) {
                      Curry._2($$fetch, environment, /* () */0).then((function (res) {
                              Curry._1(setFetchedResult, (function (param) {
                                      return Caml_option.some(res.repository);
                                    }));
                              return Promise.resolve(res);
                            }));
                      return /* () */0;
                    })
                }, "Test fetch"));
}

var Test = {
  make: TestQuery$Test
};

exports.Query = Query;
exports.TestPreloaded = TestPreloaded;
exports.Test = Test;
/* UseQuery Not a pure module */
