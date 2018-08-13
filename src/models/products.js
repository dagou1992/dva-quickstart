import { routerRedux } from 'dva/router';

export default {
  namespace: 'products',
  state: {
    list: []
  },
  effects: {
    // *initPage(action, { put }) {
    //    yield put({type: 'delete', payload: 1});
    // }
    //yield put(routerRedux.push('/logout'));
  },
  reducers: {
     initPage(state) {
       return state;
     }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({ type: 'initPage', payload: history });
        }
      });
    },
  },
};
