<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    BasicLayout,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    // 在跳转路由之前，进行权限校验
    router.beforeEach((to, from, next) => {
      console.log(store.state.user.loginUser);
      // if a page need admin
      if (to.meta?.access === 'canAdmin') {
        if (store.state.user.loginUser?.role !== 'admin') {
          next('/error');
        }
      }
      next();
    });
  },
};
</script>

<style scoped>
#app {

}
</style>
