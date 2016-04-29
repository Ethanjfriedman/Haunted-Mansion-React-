import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
import Header from '../components/Header';
import Game from '../containers/Game';
import Start from '../components/Start';
import About from '../components/About';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Start} />
      <Route path="/game/:scene" component={Game} />
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);

export default routes;
