# RelayJs to ReasonRelay

We are going to follow the steps for the [ReasonRelay docs](https://reason-relay-documentation.zth.now.sh/docs/getting-started)

First thing we need to do is add our reasonml deps. We need `bs-platform`, `reason-react`,`bs-fetch` and a `./bsconfig.json` file. I'm going to use `bs-platform@7.0.2-dev.1` just to keep this experimental but you can use the stable version you get at `bs-platform` to. Also, I will be using [pnpm](https://github.com/pnpm/pnpm) because I dont have a lot of room on this machine and that helps by only installing one version of any package on this machine.

We are using `bs-fetch` to bind to the `fetch` function we used in the `js` version.
For `bsconfig.json` we are going to steal the one from [reason-relay/example](https://github.com/zth/reason-relay/blob/master/example/bsconfig.json) and paste it in our root directory.

```sh
touch bsconfig.json
pnpm i -D bs-platform@7.0.2-dev.1
pnpm i reason-react bs-fetch
```

The reason-relay quickstart is using experimental features on `react` so we will install the versions the suggest and also install the reason-relay dependencies.

```sh
# Add React and ReactDOM experimental versions
pnpm i react@0.0.0-experimental-f6b8d31a7 react-dom@0.0.0-experimental-f6b8d31a7
# Add reason-relay and dependencies to the project
# We currently depend on Relay version 8, so install that exact version
pnpm i reason-relay graphql relay-runtime@8.0.0 relay-compiler@8.0.0 react-relay@0.0.0-experimental-5f1cb628 relay-config@8.0.0
```

After we have done this we need to add our reason deps to `bsconfig.json`. Since we ripped the file from the repo this should already be there:

```json
...
"ppx-flags": ["reason-relay/ppx"],
"bs-dependencies": ["reason-react", "reason-relay","bs-fetch"],
...
```

Add `reason` related files to `.gitignore`

```text
.vscode
.merlin
_build
_esy
_release
*.byte
*.native
*.install
lib/bs
reason-relay-compiler
```

> [Using experimental React versions](https://reason-relay-documentation.zth.now.sh/docs/getting-started#using-experimental-react-versions)

> You may need to tell yarn to prefer the experimental versions of React and ReactDOM by adding an entry to resolutions in package.json. This is because reason-react (and possibly other dependencies in your project) will depend on a stable React version, and we want to force everyone to use the experimental React versions, or you might start getting nasty bugs and weird errors about conflicting React versions.

> Ensure that only the experimental versions are used by doing the following:

> Open package.json and look for react and react-dom. In the versions field you'll see something like 0.0.0-experimental-f6b8d31a7 - copy that version number.
Add an entry for both react and react-dom with that version number to your resolutions. The final configuration should look something like this:

```json
...
"resolutions": {
    "react": "0.0.0-experimental-f6b8d31a7",
    "react-dom": "0.0.0-experimental-f6b8d31a7"
  }
}
```

## Relay.config.js

Using ReasonRelay, we need a `relay.config.js` file to tell the compiler where to look for the `schema.graphl` file, where to create the required `artifacts dir` and `src` directory. We did not need this in `js` version. We already have a `schema.graphql` file from the `js` project so we will point to it below. With the following command we are creating the two files we need to configure reason-relay.

```sh
touch relay.config.js
```

```js
// paste this into relay.config.js
module.exports = {
  src: "./src", // Path to the folder containing your Reason files
  schema: "./schema.graphql", // Path to the schema.graphql you've exported from your API. Don't know what this is? It's a saved introspection of what your schema looks like. You can run `npx get-graphql-schema http://path/to/my/graphql/server > schema.graphql` in your root to generate it
  artifactDirectory: "./src/__generated__" // The directory where all generated files will be emitted and is created by the relay-compiler when you run `yarn relay`
};
```

Then add scripts to `package.json` to run `relay` and `reason` commands.

Our old scripts was:

```json
  "scripts": {
    "start": "yarn run relay && react-scripts start",
    "build": "yarn run relay && react-scripts build",
    "relay": "yarn run relay-compiler --schema schema.graphql --src ./src/ --watchman false $@"
  },
```

and our new one is:

```json
"scripts": {
  "start": "yarn run relay && react-scripts start",
  "bs:build": "bsb -make-world",
  "watch": "bsb -make-world -w",
  "clean": "bsb -clean-world",
  "relay": "reason-relay-compiler",
  "relay:watch": "reason-relay-compiler --watch"
}
```

From docs:

> Notice that we're calling reason-relay-compiler, and not relay-compiler. This is because ReasonRelay adds a thin layer on top of the regular relay-compiler. Read more about the Relay compiler and how ReasonRelay uses it here.
> Now you have two scripts set up; one for running the compiler once, and one for running it in watch-mode.
> You can go ahead and start it in watch mode right away (yarn relay:watch) in a separate terminal. Please note that you'll need to be aware of the output from the compiler as it will tell you when there are issues you'll need to fix.

## Setting up the Relay environment

ReasonRelay's equivalent of our `RelayEnvironment.js` file is `RelayEnv.re`. It uses the `bs-fetch` package we installed at the beginning. This is the example from the [docs](https://reason-relay-documentation.zth.now.sh/docs/getting-started#setting-up-the-relay-environment)

```ocaml
/* RelayEnv.re */
/* This is just a custom exception to indicate that something went wrong. */
exception Graphql_error(string);
/**
 * A standard fetch that sends our operation and variables to the
 * GraphQL server, and then decodes and returns the response.
 */
let fetchQuery: ReasonRelay.Network.fetchFunctionPromise =
  (operation, variables, _cacheConfig) =>
    Fetch.(
      fetchWithInit(
        "http://localhost:4000/graphql",
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
```

## Index.re

Now we need to create a reason version of our `index.js` file. Create a file called `src/Index.re` and add the following code:

```ocaml
ReactExperimental.renderConcurrentRootAtElementWithId(
  <ReasonRelay.Context.Provider
    environment=RelayEnv.environment>
    <App />
  </ReasonRelay.Context.Provider>,
  "root",
);
```

Here we are calling `RelayEnv.re` to get access to our ReasonRelay assets. We still don't have `App.re` so if you ran `yarn watch` in a terminal, the reason compiler will be giving us an error. Run `yarn watch` to start compile your reason code to see it.

Let create `App.re` to fix it. Run `touch src/App.re` then add this code to it:

```ocaml
module Query = [%relay.query
  {|
    query AppQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
  |}
];
```

This is our query which is reason version of our `js` query in `App.js`. You might notice that in `App.js` its called `AppRepositoryNameQuery` and in `App.re` its called `AppQuery`. That is because, in ReasonRelay, its required that the Query name be the same as the name of the file its found in followed by what kind of query it is. That is, is it a `Mutation`, `Query`, `Subscription`, etc. I am not a genius. The reason-relay compiler told me to fix this when I copied the `js` version of the query into the `App.re`. So the query name is `this_file_name` + `type_of_graphql_operation` or `AppQuery`. The reason and reason-relay compilers are your friends. Be nice to them.

Another thing to note is that in your `src/__generated__` directory, there is now a file called `AppQuery_graphql.re` that reason-compiler generated once your wrote that query in `App.re`.

We will use the result of the query in our react component like this:

```ocaml
[@react.component]
let make = () => {
  let query = Query.use(~variables=(), ());
  <div className="App">
    <div className="App-header">
      <ReactExperimental.Suspense
        fallback={<div> {React.string("Loading...")} </div>}>

          {switch (query.repository) {
           | Some(repository) => <div> {React.string(repository.name)} </div>
           | None => <div> {React.string("Nothing to see here")} </div>
           }}
        </ReactExperimental.Suspense>
    </div>
  </div>;
};
```

We create a variable to hold the query response here:

```ocaml
  let query = Query.use(~variables=(), ());
```

Our `query` variable returns and option which we handle with a `switch` statement:

```ocaml
  {switch (query.repository) {
    | Some(repository) => <div> {React.string(repository.name)} </div>
    | None => <div> {React.string("Nothing to see here")} </div>
  }}
```

So all together, `App.re` should look like this:

```ocaml
module Query = [%relay.query
  {|
    query AppQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
  |}
];

[@react.component]
let make = () => {
  let query = Query.use(~variables=(), ());
  <div className="App">
    <div className="App-header">
      <ReactExperimental.Suspense
        fallback={<div> {React.string("Loading...")} </div>}>

          {switch (query.repository) {
           | Some(repository) => <div> {React.string(repository.name)} </div>
           | None => <div> {React.string("Nothing to see here")} </div>
           }}
        </ReactExperimental.Suspense>
    </div>
  </div>;
};

```
