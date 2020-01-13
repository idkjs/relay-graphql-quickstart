# [RelayJS: A Step By Step Guide](https://relay.dev/docs/en/experimental/step-by-step)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step 1: Create React App

For this example we'll use start with a standard install of Create React App ("CRA"). Create React App makes it easy to get a fully configured React app up and running and also supports configuring Relay. To get started, create a new app with:

```sh
pnpx create-react-app your-app-name
```

## Step 2: Fetch GraphQL (without Relay)

If you're exploring using GraphQL with Relay, we highly recommend starting with a basic approach and using as few libraries as possible. GraphQL servers can generally be accessed using plain-old HTTP requests, so we can use the fetch API to request some data from our server. For this guide we'll use GitHub's GraphQL API as the server, but if you already have a GraphQL server feel free to use that instead.

2.1: GitHub GraphQL Authentication

To start we'll need an authentication token for the GitHub API (if you're using your own GraphQL endpoint, you can skip this step):

Open <https://github.com/settings/tokens.>
Ensure that at least the repo scope is selected.
Generate a token
Create a file ./your-app-name/.env.local and add the following contents, replacing <TOKEN> with your authentication token:

```sh
# your-app-name/.env.local
REACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>
2.2: A fetchGraphQL Helper
```

Next let's update the home screen of our app to show the name of the Relay repository. We'll start with a common approach to fetching data in React, calling our fetch function after the component mounts (note: later we'll see some limitations of this approach and a better alternative that works with React Concurrent Mode and Suspense). First we'll create a helper function to load data from the server. Again, this example will use the GitHub API, but feel free to replace it with the appropriate URL and authentication mechanism for your own GraphQL server:

```js
// your-app-name/src/fetchGraphQL.js
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

2.3: Fetching GraphQL From React

Now we can use our fetchGraphQL function to fetch some data in our app. Open src/App.js and edit it as follows:

```js
// your-app-name/src/App.js
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

