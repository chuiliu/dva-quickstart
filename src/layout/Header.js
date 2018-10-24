import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Dropdown, Avatar, Badge } from 'antd';
import HeaderMenu from './HeaderMenu';
import styles from './Header.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link className={styles.menutext} to="/user/"><Icon type="user" /><span>个人中心</span></Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link className={styles.menutext} to=""><Icon type="lock" /><span>修改密码</span></Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link className={styles.menutext} to=""><Icon type="export" /><span>退出登录</span></Link>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  render() {
    return (
      <Layout.Header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <HeaderMenu {...this.props} />
        <div className={styles.info}>
          <ul>
            <li className={styles.infoItem}>
              <div className={styles.msg}>
                <Badge count={5}>
                  <Icon type="mail" theme="outlined" style={{ fontSize: '20px', position: 'relative', top: 2 }} />
                </Badge>
              </div>
            </li>
            <li className={styles.infoItem}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
              >
                <div className={styles.user}>
                  <Avatar size={28} icon="user" style={{ position: 'relative', top: '-2px' }} />
                  <span className={styles.username}>用户名</span>
                </div>
              </Dropdown>
            </li>
          </ul>
        </div>
      </Layout.Header>
    )
  }
}

export default Header;
