import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import Login from './routes/user/Login';
import AdminLayout from '@/layout/AdminLayout';
import UserLayout from '@/layout/UserLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user" component={UserLayout} />
        <Route path="/admin" component={AdminLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
