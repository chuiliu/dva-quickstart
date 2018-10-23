// 用户布局
import React, { Component } from 'react';
import BasicLayout from './BasicLayout';
import { userMenus } from '@/config/menu';

class UserLayout extends Component {
  render() {
    return (
      <BasicLayout sidebarMenu={userMenus} {...this.props}>
        UserLayout
      </BasicLayout>
    );
  }
}

export default UserLayout;
