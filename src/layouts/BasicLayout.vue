<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <global-header class="header-content">
          <img alt="Logo" class="logo" src="../assets/logo.jpg" />
        </global-header>
      </a-layout-header>
      <a-layout-content class="content"> </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.linkedin.com/in/jarvis-chan-098a9b24a/">
          Blackpink WorkStation by Jarvis
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
  background: url('@/assets/background.jpg') 0 / 100%;
}

.header {
  height: 300px;
}

.content {
  //padding: 20px; //color: white;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 18px;
  background-color: pink;
}

.header-content {
  position: relative;
}
</style>
<script>
import globalHeader from '@/components/globalHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { globalHeader },
});
</script>
