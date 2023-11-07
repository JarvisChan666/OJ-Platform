<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<script>
import BasicLayout from '@/layouts/BasicLayout.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted } from 'vue';

// 全局初始化函数，全局单次调用的代码
const doInit = () => {
  console.log('welcome to jvc');
};

// 初始化时调用
onMounted(() => {
  doInit();
});

export default {
  components: {
    BasicLayout,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
  },
};
</script>

<style scoped>
#app {

}
</style>
