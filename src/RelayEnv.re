/* This is just a custom exception to indicate that something went wrong. */
exception Graphql_error(string);
exception REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED;
/**
 * A standard fetch that sends our operation and variables to the
 * GraphQL server, and then decodes and returns the response.
 */

// get our github token
let react_app_github_auth_token = Sys.getenv("REACT_APP_GITHUB_AUTH_TOKEN");
  try(Sys.getenv("REACT_APP_GITHUB_AUTH_TOKEN")) {
  | Not_found => raise(REACT_APP_GITHUB_AUTH_TOKEN_REQUIRED)
  };
/**
 * Create a Bearer string to pass to authorization in `fetchWithInit`
 */
let authorization = "Bearer " ++ react_app_github_auth_token;

let fetchQuery: ReasonRelay.Network.fetchFunctionPromise =
  (operation, variables, _cacheConfig) =>
    Fetch.(
      fetchWithInit(
        "https://api.github.com/graphql",
        RequestInit.make(
          ~method=Post,
          ~body=
            Js.Dict.fromList([
              ("query", Js.Json.string(operation.text)),
              ("variables", variables),
            ])
            |> Js.Json.object_
            |> Js.Json.stringify
            |> BodyInit.make,
          ~headers=
            HeadersInit.make({
              "authorization": authorization,
              "content-type": "application/json",
              "accept": "application/json",
            }),
          (),
        ),
      )
      |> Js.Promise.then_(resp =>
           if (Response.ok(resp)) {
             Response.json(resp);
           } else {
             Js.Promise.reject(
               Graphql_error(
                 "Request failed: " ++ Response.statusText(resp),
               ),
             );
           }
         )
    );
let network =
  ReasonRelay.Network.makePromiseBased(~fetchFunction=fetchQuery, ());
let environment =
  ReasonRelay.Environment.make(
    ~network,
    ~store=
      ReasonRelay.Store.make(~source=ReasonRelay.RecordSource.make(), ()),
    (),
  );