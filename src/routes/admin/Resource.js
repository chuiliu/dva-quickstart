import React, { Component } from 'react';
import { connect } from 'dva';
import Toolbar from '@/components/Toolbar/Toolbar';

/** 资源管理页面 */
class Resource extends Component {

  render() {
    return (
      <div>
        <Toolbar title="资源管理"></Toolbar>
        <div className="box-content"></div>
      </div>
    );
  }
}

export default connect()(Resource);
