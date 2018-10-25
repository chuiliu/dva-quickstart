import React, { Component } from 'react';
import { connect } from 'dva';
import Toolbar from '@/components/Toolbar/Toolbar';

class SecAdmin extends Component {

  render() {
    return (
      <div>
        <Toolbar title="二级管理员"></Toolbar>
        <div className="box-content"></div>
      </div>
    );
  }
}

export default connect()(SecAdmin);
