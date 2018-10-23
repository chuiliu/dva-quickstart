import React, { Fragment } from 'react';
import { connect } from 'react';

const Auth = ({ children, dispatch, token, pathname }) => {
  if (!token && pathname !== 'login') {
    dispatch({
      type: 'login/logout'
    });
  }

  return (
    <Fragment>{children}</Fragment>
  );
}

function mapStateToProps({ login }){
  return {
    token : login.token,
    pathname: login.pathname
  };
}

export default connect(mapStateToProps)(Auth);
