import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'dva/router';

class SidebarMenu extends Component {

  constructor(props) {
    super(props);
    this.linkTo = this.linkTo.bind(this);

    this.state = {
      openKeys: ['0'],
    }
  }

  linkTo({ key }) {
    this.props.history.push(key);
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  renderMenuItem(menus) {
    return menus.map(menu => (
      <Menu.Item key={menu.link} onClick={this.linkTo}>
        { menu.iconType ? <Icon type={menu.iconType} /> : null }
        <span>{menu.title}</span>
      </Menu.Item>
    ));
  }

  render() {
    const { menus, history } = this.props;

    this.rootSubmenuKeys = Object.keys(menus);
    // console.log(this.props);

    return (
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[history.location.pathname]}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menus.map(
          (menu, index) =>
            menu.children ? (
              <Menu.SubMenu
                key={index}
                title={
                  <span>
                    { menu.iconType ? <Icon type={menu.iconType} /> : null }
                    <span>{menu.title}</span>
                  </span>
                }
              >
                {this.renderMenuItem(menu.children)}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={menu.link} onClick={this.linkTo}>
                  { menu.iconType ? <Icon type={menu.iconType} /> : null }
                  <span>{menu.title}</span>
              </Menu.Item>
            )
        )}
      </Menu>
    )
  }
}

export default withRouter(props => {
  return <SidebarMenu {...props} />;
});
