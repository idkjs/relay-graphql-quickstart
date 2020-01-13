/**
 * We wrap our  <Query /> (which contains our query) in <React.Suspense />.
 * This is because most Relay hooks APIs are suspense-based, so this is
 * how we handle our loading state.
 */
// import App.css styles
[%bs.raw {|require("./App.css")|}];
module Query = [%relay.query
  {|
    query MainQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
  |}
];

[@react.component]
let make = () => {
    /* use is a React hook that will dispatch the query to the server and then deliver the data to the component. */
  let query = Query.use(~variables=(), ());
  <div className="App">
    <header className="App-header">
      {switch (query.repository) {
       | Some(repository) => <p> {React.string(repository.name)} </p>
       | None => <p> {React.string("Nothing to see here")} </p>
       }}
       <AppWithPreload />
    </header>
  </div>;
};