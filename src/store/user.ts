import { StoreOptions } from 'vuex';
import ACCESS_ENUM from '@/access/accessEnum';
import { UserControllerService } from '../../generated';

export default {
  namespaced: true,
  // initial state of user
  state: {
    loginUser: {
      userName: '',
    },
  },
  getters: {},
  actions: {
    async getLoginUser({ commit, state }, payload) {
      // 远程获取用户信息
      const res = await UserControllerService.getLoginUserUsingGet();
      // 如果获取成功
      if (res.code === 0) {
        commit('updateUser', res.data);
      } else {
        commit('updateUser', {
          ...state.loginUser,
          userRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
