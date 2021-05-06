import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import { Auth0Provider } from '@auth0/auth0-react';

import Questions from "./Pages/Question.js";
import Repositories from "./Pages/Repositories.js";
import About from "./Pages/About.js";

const ReactRouter = () => {

  useEffect(() => {
    ReactGA.initialize('UA-196455787-1');
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

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >  
    <ReactRouter />
  </Auth0Provider>,
  document.getElementById("root")
);

reportWebVitals();
