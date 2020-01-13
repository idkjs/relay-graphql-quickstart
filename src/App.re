/**
 * We wrap our  <Main /> (which contains our query) in <React.Suspense />.
 * This is because most Relay hooks APIs are suspense-based, so this is
 * how we handle our loading state.
 */
[@react.component]
let make = () => {
  <ReactExperimental.Suspense
    fallback={<div> {React.string("Loading...")} </div>}>
    <Main />
  </ReactExperimental.Suspense>;
};