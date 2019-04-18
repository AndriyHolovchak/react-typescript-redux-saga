import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import ProtectedRoute from './hoc/ProtectedRoute';
import NoMatch from './components/NoMatch';

const routes = (history: any) => {
  return <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
}

export default routes;
