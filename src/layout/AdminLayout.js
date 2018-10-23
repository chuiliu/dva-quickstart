// 系统管理布局
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import BasicLayout from './BasicLayout';
import { adminMenus } from '@/config/menu';
import Role from '@/routes/admin/Role';
import SecAdmin from '@/routes/admin/SecAdmin';
import SysAdmin from '@/routes/admin/SysAdmin';

class AdminLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <BasicLayout sidebarMenu={adminMenus} {...this.props}>
        {children}
        <Switch>
          <Route exact path="/admin/per/role" component={Role}/>
          <Route exact path="/admin/per/sec-admin" component={SecAdmin}/>
          <Route exact path="/admin/per/sys-admin" component={SysAdmin}/>
          <Redirect from="/admin" to="/admin/per/role"></Redirect>
        </Switch>
      </BasicLayout>
    );
  }
}

export default AdminLayout;
