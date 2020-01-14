'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Caml_sys = require("bs-platform/lib/js/caml_sys.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var Graphql_error = Caml_exceptions.create("RelayEnv-ReasonReactExamples.Graphql_error");

var REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED = Caml_exceptions.create("RelayEnv-ReasonReactExamples.REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED");

var react_app_github_auth_token = Caml_sys.caml_sys_getenv("REACT_APP_GITHUB_AUTH_TOKEN");

try {
  Caml_sys.caml_sys_getenv("REACT_APP_GITHUB_AUTH_TOKEN");
}
catch (exn){
  if (exn === Caml_builtin_exceptions.not_found) {
    throw REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED;
  }
  throw exn;
}

var authorization = "Bearer " + react_app_github_auth_token;

function fetchQuery(operation, variables, _cacheConfig) {
  return fetch("https://api.github.com/graphql", Fetch.RequestInit.make(/* Post */2, {
                      authorization: authorization,
                      "content-type": "application/json",
                      accept: "application/json"
                    }, Caml_option.some(JSON.stringify(Js_dict.fromList(/* :: */[
                                  /* tuple */[
                                    "query",
                                    operation.text
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "variables",
                                      variables
                                    ],
                                    /* [] */0
                                  ]
                                ]))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (resp) {
                if (resp.ok) {
                  return resp.json();
                } else {
                  return Promise.reject([
                              Graphql_error,
                              "Request failed: " + resp.statusText
                            ]);
                }
              }));
}

var network = ReasonRelay.Network.makePromiseBased(fetchQuery, undefined, /* () */0);

var environment = ReasonRelay.Environment.make(network, ReasonRelay.Store.make(ReasonRelay.RecordSource.make(undefined, /* () */0), undefined, /* () */0), undefined, /* () */0);

exports.Graphql_error = Graphql_error;
exports.REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED = REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED;
exports.react_app_github_auth_token = react_app_github_auth_token;
exports.authorization = authorization;
exports.fetchQuery = fetchQuery;
exports.network = network;
exports.environment = environment;
/* react_app_github_auth_token Not a pure module */
