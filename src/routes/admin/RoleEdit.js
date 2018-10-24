// 角色 -> 编辑
import React, { Component } from 'react';
import { connect } from 'dva';
// import { Table } from 'antd';
import Toolbar from '@/components/Toolbar/Toolbar';


class RoleEdit extends Component {
  render() {

    const { params } = this.props.match;
    console.log(params);

    return (
      <div>
        <Toolbar title="编辑角色"></Toolbar>
        <div className="box-content"></div>
      </div>
    )
  }
}

export default connect()(RoleEdit);
