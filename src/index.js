import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Questions from "./Pages/Question.js";
import Repositories from "./Pages/Repositories.js";

const ReactRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Questions />
          </Route>
          <Route path="/repositories">
            <Repositories />
          </Route>
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
