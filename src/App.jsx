import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch } from "react-router-DOM";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Router>
        <Switch>
          <Route exact path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/">
            <SearchParams></SearchParams>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
