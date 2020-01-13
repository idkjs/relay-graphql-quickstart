'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var MainQuery_graphql$ReasonReactExamples = require("./__generated__/MainQuery_graphql.bs.js");

((require("./App.css")));

var convertResponse = MainQuery_graphql$ReasonReactExamples.Internal.convertResponse;

var convertVariables = MainQuery_graphql$ReasonReactExamples.Internal.convertVariables;

var UseQuery = ReasonRelay.MakeUseQuery({
      query: MainQuery_graphql$ReasonReactExamples.node,
      convertResponse: convertResponse,
      convertVariables: convertVariables
    });

var use = UseQuery.use;

var Query_fetch = UseQuery.$$fetch;

var Query_preload = UseQuery.preload;

var Query_usePreloaded = UseQuery.usePreloaded;

var Query = {
  Operation: /* alias */0,
  Types: /* alias */0,
  UseQuery: UseQuery,
  use: use,
  $$fetch: Query_fetch,
  preload: Query_preload,
  usePreloaded: Query_usePreloaded
};

function Main(Props) {
  var query = Curry._5(use, /* () */0, undefined, undefined, undefined, /* () */0);
  var match = query.repository;
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, match !== undefined ? React.createElement("p", undefined, match.name) : React.createElement("p", undefined, "Nothing to see here")));
}

var make = Main;

exports.Query = Query;
exports.make = make;
/*  Not a pure module */
