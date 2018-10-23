import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderMenu from './HeaderMenu';
import styles from './Header.less';

class Header extends Component {
  render() {
    return (
      <Layout.Header style={{ height: 'auto', paddingLeft: 0}}>
        <div className={styles.logo}>LOGO</div>
        <HeaderMenu {...this.props} />
      </Layout.Header>
    )
  }
}

export default Header;
