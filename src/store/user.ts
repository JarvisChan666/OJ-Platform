import { StoreOptions } from 'vuex';

export default {
  namespaced: true,
  // initial state of user
  state: {
    loginUser: {
      userName: 'unLogin',
      role: 'visitor',
    },
  },
  getters: {
  },
  actions: {
    getLoginUser({
      commit,
      state,
    }, payload) {
      commit('updateUser', { userName: 'jarvis' });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
}as StoreOptions<any>;
