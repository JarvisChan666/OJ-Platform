import { StoreOptions } from 'vuex';

export default {
  namespaced: true,
  // initial state of user
  state: {
    loginUser: {
      userName: 'jarvis',
      userRole: 'admin',
    },
  },
  getters: {},
  actions: {
    getLoginUser({
      commit,
      state,
    }, payload) {
      commit('updateUser', payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
