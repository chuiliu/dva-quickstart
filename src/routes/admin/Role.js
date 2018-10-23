import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Toolbar from '@/components/Toolbar/Toolbar';

class Role extends Component {

  render() {
    return (
      <div>
        <Toolbar title="角色管理">
          <Button icon="filter">查询</Button>
          <Button icon="plus">新增</Button>
        </Toolbar>
      </div>
    );
  }
}

export default Role;
