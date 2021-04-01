import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Forms from './components/Forms';
import QuestionSection from './components/QuestionSection';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Layout><Forms /><QuestionSection /></Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
