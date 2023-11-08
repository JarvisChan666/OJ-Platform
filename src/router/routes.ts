import { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AdminView from '@/views/AdminView.vue';
import AboutView from '@/views/AboutView.vue';
import NoAuthView from '@/views/NoAuthView.vue';
import UserLoginView from '@/views/user/UserLoginView.vue';
import ACCESS_ENUM from '@/access/accessEnum';
import UserLayout from '@/layouts/UserLayout.vue';
import UserRegisterView from '@/views/user/UserRegisterView.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: '用户',
    component: UserLayout,
    meta: {
      hideInMenu: 'true',
    },
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: UserLoginView,
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: UserRegisterView,
      },
    ],
  },
  {
    path: '/',
    name: '浏览题目',
    component: HomeView,
    meta: {
      access: ACCESS_ENUM.NOT_LOGIN,
    },
  },
  {
    path: '/about',
    name: '关于我的',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: '/admin',
    name: '管理员',
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: '/error',
    name: '无权限',
    component: NoAuthView,
    meta: {
      hideInMenu: 'true',
    },
  },
];
export default routes;
