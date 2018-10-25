import React, { Component } from 'react';
import { connect } from 'dva';
import Toolbar from '@/components/Toolbar/Toolbar';
class SysAdmin extends Component {

  render() {
    return (
      <div>
        <Toolbar title="系统管理员"></Toolbar>
        <div className="box-content"></div>
      </div>
    );
  }
}

export default connect()(SysAdmin);

