/**
 * We wrap our  <Query /> (which contains our query) in <React.Suspense />.
 * This is because most Relay hooks APIs are suspense-based, so this is
 * how we handle our loading state.
 */

// import App.css
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
  let query = Query.use(~variables=(), ());
  <div className="App">
    <header className="App-header">
      {switch (query.repository) {
       | Some(repository) => <p> {React.string(repository.name)} </p>
       | None => <p> {React.string("Nothing to see here")} </p>
       }}
    </header>
  </div>;
};