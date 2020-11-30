import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import {
  AuthorizationForm, loginRequest, PrivateRoute, Main,
} from './Recipes';

export function App() {
  const dispatch = useDispatch();

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/recipe" />
      </Route>
      <Route path="/login">
        <AuthorizationForm onClick={(value) => dispatch(loginRequest(value))} />
      </Route>
      <PrivateRoute path="/recipe" component={Main} />
    </Switch>
  );
}
