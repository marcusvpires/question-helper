import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';

import Questions from "./Pages/Question.js";
import Repositories from "./Pages/Repositories.js";
import About from "./Pages/About.js";

const ReactRouter = () => {

  useEffect(() => {
    ReactGA.initialize('G-MDWS9F8Z41');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Questions />
          </Route>
          <Route path="/repositories">
            <Repositories />
          </Route>
          <Route path="/about">
            <About />
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
