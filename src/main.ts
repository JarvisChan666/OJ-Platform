import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@arco-design/web-vue/dist/arco.css';
import router from './router';
import store from './store';
import '@/access';

createApp(App)
  .use(store)
  .use(ArcoVue)
  .use(router)
  .mount('#app');
