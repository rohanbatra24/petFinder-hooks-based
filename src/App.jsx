import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-DOM";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("purple");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0 bg-aqua"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link className="text-6xl text-white hover:text-gray-400" to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
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
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
