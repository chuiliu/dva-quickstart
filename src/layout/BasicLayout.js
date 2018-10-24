import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import SideBarMenu from './SidebarMenu';

class BasicLayout extends Component {
  render() {
    const { children, sidebarMenu } = this.props;
    const { pathname } = this.props.history.location;

    return (
      <Layout>
        <Header pathname={pathname} />
        <Layout>
          <Layout.Sider collapsible width={200} style={{ background: '#fff' }}>
            <SideBarMenu menus={sidebarMenu} />
          </Layout.Sider>
          <Layout style={{ padding: '0 0 0 1px' }}>
            <Layout.Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 280 }}>
              { children }
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
