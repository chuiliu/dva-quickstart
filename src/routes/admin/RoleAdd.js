import React, { Component } from 'react';
// import { connect } from 'dva';
// import { Button } from 'antd';
import Toolbar from '@/components/Toolbar/Toolbar';

class RoleAdd extends Component {

  componentDidMount() {
    console.log('mount: role')
  }

  render() {
    return (
      <div>
        <Toolbar title="新增角色"></Toolbar>
      </div>
    );
  }
}

export default RoleAdd;
