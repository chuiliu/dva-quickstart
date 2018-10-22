import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const MenuItem = Menu.Item;

class Header extends Component {
  render() {
    // const selectedKeys =

    return (
      <div>
        <Menu mode="horizontal" selectedKyes={""}>
          <MenuItem key={""}></MenuItem>
        </Menu>
      </div>
    )
  }
}
