/* eslint-disable */
// 全局路由拦截,权限校验
import ACCESS_ENUM from '@/access/accessEnum';
import store from '@/store';
import checkAccess from '@/access/checkAccess';
// @ts-ignore
import router from '@/router';
// 跳转网页前
// @ts-ignore
router.beforeEach(async (to, from, next: any) => {
  const { loginUser } = store.state.user;
  // 如果之前没登陆过，自动登录
  if (!loginUser || !loginUser.userRole) {
    // 等待登陆成功后，执行后续代码
    await store.dispatch('user/getLoginUser');
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  // 跳转的页面必须要登陆
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 若没登陆，跳转到登录页
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
    }
    // 如果登陆了，但是没权限，跳转到
    if (!checkAccess(loginUser, needAccess)) {
      next('/noAuth');
    }
  }
  next();
});
