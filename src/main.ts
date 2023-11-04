import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import ArcoVue from '@arco-design/web-vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@arco-design/web-vue/dist/arco.css';
import routes from './router/route';
import store from './store';

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App)
  .use(store)
  .use(ArcoVue)
  .use(router)
  .mount('#app');
