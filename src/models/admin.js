import { getRoleList } from '@/services/admin';

export default {

  namespace: 'admin',

  state: {
    roleList: [],  // 角色列表
  },

  effects: {
    *getRoleList({ payload }, { call, put }) { // eslint-disable-line
      const { data, code } = yield call(getRoleList, payload);
      if (code === '200') {
        yield put({
          type: 'update',
          payload: {
            roleList: data
          }
        });
      }
    }
  },

  reducers: {
    update(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },

};
