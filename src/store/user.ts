// TODO pinia代替vuex
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
  getters: {
    isLoggedIn: (state) => !!state.loginUser.userName,
  },
  actions: {
    async getLoginUser({ commit, state }) {
      try {
        const res = await UserControllerService.getLoginUserUsingGet();
        if (res.code === 0) {
          commit('updateUser', res.data);
        } else {
          commit('updateUser', {
            ...state.loginUser,
            userRole: ACCESS_ENUM.NOT_LOGIN,
          });
        }
      } catch (error) {
        console.error('Failed to fetch user information', error);
      }
    },
    async userLogout({ commit }) {
      try {
        const res = await UserControllerService.userLogoutUsingPost(); // 向后端发送注销请求
        alert(res.code);
        if (res.code === 0) {
          alert('成功推出');
          commit('updateUser', { userRole: ACCESS_ENUM.NOT_LOGIN }); // 更新用户角色为未登录状态
        } else {
          alert('退出失败');
          console.error('退出失败', res.message);
        }
      } catch (error) {
        console.error('推出失败', error);
      }
    },
    // logout({ commit }) {
    //   console.log('logout action dispatched');
    //   commit('updateUser', { userName: '' });
    // },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
