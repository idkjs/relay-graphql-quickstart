# Blog Posts

## [Graphql-RelayJs-Experimental - Part 1 on dev.to](https://dev.to/idkjs/graphql-relay-experimental-in-js-part-1-5e4a)

## [Graphql-ReasonRelay-Experimental - Part 2 on dev.to](https://dev.to/idkjs/graphql-reasonrelay-experimental-part-2-5fem)

## [RelayJS-Expirimental: A Step By Step Guide](https://relay.dev/docs/en/experimental/step-by-step)

## Step 1: Create React App

For this example we'll use start with a standard install of Create React App ("CRA"). Create React App makes it easy to get a fully configured React app up and running and also supports configuring Relay. To get started, create a new app with:

```sh
pnpx create-react-app relay-js-quickstart
```

## Step 2: Fetch GraphQL (without Relay)

If you're exploring using GraphQL with Relay, we highly recommend starting with a basic approach and using as few libraries as possible. GraphQL servers can generally be accessed using plain-old HTTP requests, so we can use the fetch API to request some data from our server. For this guide we'll use GitHub's GraphQL API as the server, but if you already have a GraphQL server feel free to use that instead.

### 2.1: GitHub GraphQL Authentication

To start we'll need an authentication token for the GitHub API (if you're using your own GraphQL endpoint, you can skip this step):

Open <https://github.com/settings/tokens.>
Ensure that at least the repo scope is selected.
Generate a token
Create a file ./relay-js-quickstart/.env.local and add the following contents, replacing <TOKEN> with your authentication token:

```sh
# relay-js-quickstart/.env.local
REACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>
2.2: A fetchGraphQL Helper
```

Next let's update the home screen of our app to show the name of the Relay repository. We'll start with a common approach to fetching data in React, calling our fetch function after the component mounts (note: later we'll see some limitations of this approach and a better alternative that works with React Concurrent Mode and Suspense). First we'll create a helper function to load data from the server. Again, this example will use the GitHub API, but feel free to replace it with the appropriate URL and authentication mechanism for your own GraphQL server:

```js
// relay-js-quickstart/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
```

### 2.3: Fetching GraphQL From React

Now we can use our fetchGraphQL function to fetch some data in our app. Open src/App.js and edit it as follows:

```js
// relay-js-quickstart/src/App.js
import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

const { useState, useEffect } = React;

function App() {
  // We'll load the name of a repository, initially setting it to null
  const [name, setName] = useState(null);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query RepositoryNameQuery {
        # feel free to change owner/name here
        repository(owner: "facebook" name: "relay") {
          name
        }
      }
    `).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setName(data.repository.name);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  // Render "Loading" until the query completes
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name != null ? `Repository: ${name}` : "Loading"}
        </p>
      </header>
    </div>
  );
}

export default App;
```

## [Step 3: When To Use Relay](https://relay.dev/docs/en/experimental/step-by-step#step-3-when-to-use-relay)

> At this point we can fetch data with GraphQL and render it with React. This is a reasonable solution that can be sufficient for many apps. However, this approach doesn't necessarily scale. As our app grows in size and complexity, or the number of people working on the app grows, a simple approach like this can become limiting. Relay provides a number of features designed to help keep applications fast and reliable even as they grow in size and complexity: colocating data dependencies in components with GraphQL fragments, data consistency, mutations, etc. Check out Thinking in GraphQL and Thinking in Relay for an overview of how Relay makes it easier to work with GraphQL.

## Step 4: Adding Relay To Our Project

In this guide we'll demonstrate installing the experimental release of Relay Hooks, a new, hooks-based Relay API that supports React Concurrent Mode and Suspense.

First we'll add the necessary packages. Note that Relay is comprised of three key pieces:

1. A compiler (which is used at build time)
2. A core runtime (that is React agnostic)
3. A React integration layer.

```sh
pnpm install --save relay-runtime react-relay@experimental
pnpm install --save-dev relay-compiler graphql babel-plugin-relay
```

Note: You may get a notice asking you to choose which version of relay-runtime to use - if so, specify version 7.0.x (e.g. 7.0.0).

### 4.1 Configure Relay Compiler

Next let's configure Relay compiler. We'll need a copy of the schema as a `.graphql` file. If you're using the GitHub GraphQL API, you can download a copy directly from the Relay example app:

```sh
cd relay-js-quickstart
curl https://raw.githubusercontent.com/relayjs/relay-examples/master/issue-tracker/schema/schema.graphql > schema.graphql
```

If you're using your own API we suggest using the get-graphql-schema utility to download your schema into a .graphql file.

Now that we have a schema we can modify package.json to run the compiler first whenever we build or start our app:

```json
// relay-js-quickstart/package.json
{
  ...
  "scripts": {
    ...
    "start": "yarn run relay && react-scripts start",
    "build": "yarn run relay && react-scripts build",
    "relay": "yarn run relay-compiler --schema schema.graphql --src ./src/ --watchman false $@"
    ...
  },
  ...
}
```

Note: you don't need to pass `--watchman false $@` flag if you have git on the project.
At this point, you should be able to run the following successfully:

```sh
cd relay-js-quickstart
yarn start
If it works, your app will open at <http://localhost:3000>. Now when we write GraphQL in our app, Relay will detect it and generate code to represent our queries in relay-js-quickstart/src/__generated__/. We recommend checking in these generated files to source control.
```

### 4.2 Configure Relay Runtime

Now that the compiler is configured we can set up the runtime - we have to tell Relay how to connect to our GraphQL server. We'll reuse the fetchGraphQL utility we built above. Assuming you haven't modified it (or at least that it still takes text and variables as arguments), we can now define a Relay Environment. An Environment encapsulates how to talk to our server (a Relay Network) with a cache of data retrieved from that server. We'll create a new file, `src/RelayEnvironment.js` and add the following:

```js
// relay-js-quickstart/src/RelayEnvironment.js
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
```

## Step 5: Fetching a Query With Relay

Now that Relay is installed and configured we can change `App.js` to use it instead. We'll prepare our data as the app starts, and wait for it to be ready in <App>. Replace the contents of `src/App.js` with the following:

```js
import React from 'react';
import './App.css';
import fetchGraphQL from './fetchGraphQL';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository.name}</p>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
```

*Note that you'll have to restart the app - yarn start - so that Relay compiler can see the new query and generate code for it. See the Relay Compiler setup docs for how to run Relay Compiler in watch mode, to regenerate code as you modify queries.*

Everything above comes from the [Relay-JS-Experimenatal Docs](https://relay.dev/docs/en/experimental/step-by-step)

Next we will try implementing this example with [Reason-Relay](https://reason-relay-documentation.zth.now.sh)
