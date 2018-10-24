import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Menu } from 'antd';
import { menus } from '@/config/menu';

class HeaderMenu extends Component {
  render() {
    const { pathname } = this.props;

    const selectedKeys = menus.filter(menu => pathname.indexOf(menu.link) === 0).map(menu => menu.link);

    return (
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        style={{ lineHeight: '50px', float: 'left', backgroundColor: 'inherit' }}
      >
        {
          menus.map(menu => (
            <Menu.Item key={menu.link}>
              <Link to={menu.link}>{menu.title}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
    )
  }
}

export default HeaderMenu;
