import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'dva/router';

class SidebarMenu extends Component {

  constructor(props) {
    super(props);
    this.linkTo = this.linkTo.bind(this);
  }

  linkTo({ key }) {
    this.props.history.push(key);
  }

  renderMenuItem(menus) {
    return menus.map(menu => (
      <Menu.Item key={menu.link} onClick={this.linkTo}>
        {/* <Icon type={menu.iconType} /> */}
        <span>{menu.title}</span>
      </Menu.Item>
    ));
  }

  render() {
    const { menus, history } = this.props;

    // console.log(this.props);

    return (
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[history.location.pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menus.map(
          (menu, index) =>
            menu.children ? (
              <Menu.SubMenu
                key={index}
                title={
                  <span>
                    <Icon type={menu.iconType} />
                    <span>{menu.title}</span>
                  </span>
                }
              >
                {this.renderMenuItem(menu.children)}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={menu.link} onClick={this.linkTo}>
                  <Icon type={menu.iconType} />
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
