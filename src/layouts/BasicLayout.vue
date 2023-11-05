<template>
  <div class="layout-demo">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <global-header class="header-content">
          <img src="../assets/logo.jpg" alt="Logo" class="logo">
        </global-header>
      </a-layout-header>
      <a-layout-content class="content">Content</a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.linkedin.com/in/jarvis-chan-098a9b24a/">
          Blackpink WorkStation by Jarvis
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
.content {
  background: linear-gradient(to right, #ff87a0, #000000);
  padding: 20px;
  color: white;
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
