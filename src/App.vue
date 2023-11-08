<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store';

export default {
  components: {
    BasicLayout,
  },
  setup() {
    const route = useRoute();

    // 全局初始化函数，全局单次调用的代码
    const doInit = () => {
      console.log('welcome to jvc');
    };

    // 初始化时调用
    onMounted(() => {
      doInit();
    });

    return {
      route,
    };
  },
};
</script>

<style scoped>
#app {
}
</style>
