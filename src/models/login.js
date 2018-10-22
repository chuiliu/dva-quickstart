import { routerRedux } from 'dva/router';

export default {

  namespace: 'login',

  state: {
    token: null
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload);
    },

    *logout({ payload }, { call, put }) {  // eslint-disable-line
      yield put(
        routerRedux.push({
          pathname: '/user/login',
        })
      );
      window.sessionStorage.removeItem('token');
    }
  },

  reducers: {
    updateLoginStatus(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
  },

};
