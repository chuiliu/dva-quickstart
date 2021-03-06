import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'dva/router';

class SidebarMenu extends Component {

  constructor(props) {
    super(props);
    this.linkTo = this.linkTo.bind(this);

    this.state = {
      openKeys: [],
    };
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

  componentDidMount() {

    const { menus, history } = this.props;

    // let openKeys = menus.map((menu, index) => {
    //   if (menu.children && menu.children.length) {
    //     return menu.children.some(child => history.location.pathname === child.link) ? '' + index : null;
    //   }
    //   return null;
    // }).filter(key => key !== null);

    let openKeys = menus.filter(menu => (menu.children && menu.children.length && history.location.pathname.indexOf(menu.link) === 0)).map(menu => menu.link);

    this.setState({
      openKeys
    });
  }

  // 获取所有的菜单路由
  menuLinks = [];
  getAllMenuLinks(menus) {
    menus.forEach(menu => {
      if (menu.children) {
        this.getAllMenuLinks(menu.children);
      } else {
        this.menuLinks.push(menu.link);
      }
    })
  }

  render() {
    const { menus, location } = this.props;

    this.getAllMenuLinks(menus);
    this.rootSubmenuKeys = menus.filter(menu => menu.children && menu.children.length).map(menu => menu.link);

    const selectedKeys = this.menuLinks.filter(key => location.pathname.indexOf(key) === 0);

    // console.log(selectedKeys);

    return (
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ height: '100%', borderRight: 0 }}
      >
        {menus.map(
          (menu, index) =>
            menu.children ? (
              <Menu.SubMenu
                // key={index}
                key={menu.link}
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
    );
  }
}

export default withRouter(props => {
  return <SidebarMenu {...props} />;
});
