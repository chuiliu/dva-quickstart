import React, { Component } from 'react';
import { connect } from 'dva';
import Toolbar from '@/components/Toolbar/Toolbar';
import UserSearchForm from './UserSearchForm';

class User extends Component {

  render() {
    return (
      <div>
        <Toolbar title="用户管理"></Toolbar>
        <div className="box-content">
          <UserSearchForm />
        </div>
      </div>
    );
  }
}

export default connect()(User);

