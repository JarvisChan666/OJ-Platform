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
  },
};
</script>

<style scoped>
#app {

}
</style>
