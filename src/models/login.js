import { routerRedux } from 'dva/router';
import { query } from '@/services/example';

export default {

  namespace: 'login',

  state: {
    token: null
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload);
      yield call(query, payload);
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
