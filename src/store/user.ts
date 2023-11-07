import { StoreOptions } from 'vuex';
import ACCESS_ENUM from '@/access/accessEnum';

export default {
  namespaced: true,
  // initial state of user
  state: {
    loginUser: {
      userName: 'jarvis',
      userRole: ACCESS_ENUM.NOT_LOGIN,
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
