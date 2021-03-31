import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Layout><h1>Hello world</h1></Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
