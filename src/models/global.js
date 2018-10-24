import { routerRedux } from 'dva/router';

export default {

  namespace: 'global',

  state: {

  },

  effects: {
    *redirect({ payload }, { put }) {
      yield put(routerRedux.push(payload));
    }
  },

  reducers: {

  },

};
