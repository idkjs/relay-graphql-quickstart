'use strict';

var React = require("react");
var ReactExperimental = require("reason-relay/src/ReactExperimental.bs.js");
var Main$ReasonReactExamples = require("./Main.bs.js");

function App(Props) {
  return React.createElement(ReactExperimental.Suspense.make, {
              children: React.createElement(Main$ReasonReactExamples.make, { }),
              fallback: React.createElement("div", undefined, "Loading...")
            });
}

var make = App;

exports.make = make;
/* react Not a pure module */
