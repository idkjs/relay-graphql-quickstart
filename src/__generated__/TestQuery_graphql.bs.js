'use strict';

var ReasonRelay = require("reason-relay/src/ReasonRelay.bs.js");

var Unions = { };

var Types = { };

var FragmentConverters = { };

var responseConverter = ( {"repository":[[0,""]]} );

function convertResponse(v) {
  return ReasonRelay._convertObj(v, responseConverter, /* () */0, undefined);
}

var variablesConverter = ( {} );

function convertVariables(v) {
  return ReasonRelay._convertObj(v, variablesConverter, /* () */0, undefined);
}

var Internal = {
  responseConverter: responseConverter,
  responseConverterMap: /* () */0,
  convertResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: /* () */0,
  convertVariables: convertVariables
};

var node = ( (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TestQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")",
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TestQuery",
    "id": null,
    "text": "query TestQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})() );

exports.Unions = Unions;
exports.Types = Types;
exports.FragmentConverters = FragmentConverters;
exports.Internal = Internal;
exports.node = node;
/* responseConverter Not a pure module */
