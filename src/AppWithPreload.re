module Query = [%relay.query
  {|
      query AppWithPreloadQuery {
      repository(owner: "facebook", name: "relay") {
        name
      }
    }
    |}
];
module TestPreloaded = {
  [@react.component]
  let make = (~preloadToken) => {
    let query = Query.usePreloaded(preloadToken);
    let repositoryName =
      switch (query.repository) {
      | Some(repository) => repository.name
      | None => "Nothing Preloaded"
      };

    <div> {React.string("Preloaded " ++ repositoryName)} </div>;
  };
};
[@react.component]
let make = () => {
  let environment = ReasonRelay.useEnvironmentFromContext();

  let (preloadToken, setPreloadToken) = React.useState(() => None);
  React.useEffect0(() => {
    setPreloadToken(_ =>
      Some(Query.preload(~environment, ~variables=(), ()))
    )
    |> ignore;

    None;
  });

  <>
    <ReactExperimental.Suspense
      fallback={<div> {React.string("Loading...")} </div>}>
      {switch (preloadToken) {
       | Some(preloadToken) => <TestPreloaded preloadToken />
       | None => React.null
       }}
    </ReactExperimental.Suspense>
  </>;
};