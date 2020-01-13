module Query = [%relay.query
  {|
      query AppWithPreloadQuery {
      repository(owner: "facebook", name: "relay") {
        name
      }
    }
    |}
];

[@react.component]
let make = (~preloadToken) => {
  let query = Query.usePreloaded(preloadToken);
  let data =
    switch (query.repository) {
    | Some(repository) => repository.name
    | None => "Nothing to see here"
    };
  <div className="App">
    <div className="App-header">
      <ReactExperimental.Suspense
        fallback={<div> {React.string("Loading...")} </div>}>
        <p> {React.string(data)} </p>
      </ReactExperimental.Suspense>
    </div>
  </div>;
};