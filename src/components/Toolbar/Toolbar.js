import React from 'react';
import { Icon } from 'antd';
import styles from './Toolbar.less';

export default (props) => (
  <div className={styles.toolbar}>
    <div className={styles.title}>
      <Icon type="snippets" theme="outlined" />
      {props.title}
    </div>
    <div className={styles.tools}>{props.children}</div>
  </div>
);
