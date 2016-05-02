import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from './pages/HomePage';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
  </Router>
);

render(<App />, document.getElementById('root'));
