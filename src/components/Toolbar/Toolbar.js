import React from 'react';
import { Icon } from 'antd';
import styles from './Toolbar.less';

export default ({ title, children, icon }) => (
  <div className={styles.toolbar}>
    <div className={styles.title}>
      <Icon type="snippets" theme="outlined" />
      {title}
    </div>
    <div className={styles.tools}>{children}</div>
  </div>
);
