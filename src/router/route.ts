import { RouteRecordRaw, useRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AdminView from '@/views/AdminView.vue';
import { useStore } from 'vuex';
import UnauthView from '@/views/UnauthView.vue';
import ACCESS_ENUM from '@/access/accessEnum';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '浏览题目',
    component: HomeView,
  },
  {
    path: '/about',
    name: '关于我的',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
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
    component: UnauthView,
    meta: {
      hideInMenu: 'true',
    },
  },
];
export default routes;
