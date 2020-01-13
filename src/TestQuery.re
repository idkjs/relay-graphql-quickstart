module Query = [%relay.query
  {|
  query TestQuery {
      repository(owner: "facebook", name: "relay") {
        name
      }
    }
|}
];

module TestPreloaded = {
  [@react.component]
  let make = (~preloadToken) => {
    Js.log2("preloadToken",preloadToken );
    let query = Query.usePreloaded(preloadToken);
    let repositoryName =
      switch (query.repository) {
      | Some(repository) => repository.name
      | None => "Nothing Preloaded"
      };

    <div> {React.string("Preloaded " ++ repositoryName)} </div>;
  };
};

module Test = {
  [@react.component]
  let make = () => {
    let environment = ReasonRelay.useEnvironmentFromContext();

    let (preloadToken, setPreloadToken) = React.useState(() => None);
    let (fetchedResult, setFetchedResult) = React.useState(() => None);

    let repo = (res: Query.Operation.response) =>
      switch (res) {
      | {repository: name} => name
      };

    let query = Query.use(~variables=(), ());
    let repository = repo(query);

    <div>
      <div>
        {switch (repository) {
         | Some(repository) => <div> {React.string(repository.name)} </div>
         | _ => React.null
         }}
      </div>
      {switch (preloadToken) {
       | Some(preloadToken) => <TestPreloaded preloadToken />
       | None => React.null
       }}
      {switch (fetchedResult) {
       | Some(_repository) => React.string("Fetched!")
       | _ => React.null
       }}
      <button
        onClick={_ => {
          setPreloadToken(_ =>
            Some(Query.preload(~environment, ~variables=(), ()))
          )
        }}>
        {React.string("Test preloaded")}
      </button>
      <button
        onClick={_ =>
          Query.fetch(~environment, ~variables=())
          |> Js.Promise.then_(res => {
               setFetchedResult(_ => Some(repo(res)));
               Js.Promise.resolve(res);
             })
          |> ignore
        }>
        {React.string("Test fetch")}
      </button>
    </div>;
  };
};