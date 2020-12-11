import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';

import User from '~/pages/User';

import Customers from '~/pages/Customers';
import CustomerEdit from '~/pages/Customers/edit.js';

import e404 from '~/pages/Errors/e404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={User} />

      <Route exact path="/customers" component={Customers} isPrivate />
      <Route exact path="/customers/:id/edit" component={CustomerEdit} isPrivate />

      <Route exact path="/404" component={e404} isFree />
      <Redirect to="/404" />
    </Switch>
  );
}
