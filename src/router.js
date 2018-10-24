import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
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
        <Route exact path="/exception/500" render={()=><div>500</div>} />
        <Route exact path="/exception/403" component={null} />
        <Redirect to="/exception/404"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
