import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { authorization } from './authorization';

export function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route {...rest}>
      { authorization.isAuthorized ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: location } }} /> }
    </Route>
  );
}
