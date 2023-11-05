<template>
  <a-row class="globalHeader" style="margin-bottom: 16px;" align="center" :wrap="false">
    <a-col flex="200px">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '100px',
            height: '100px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
            position: 'relative',
            borderRadius: '50%',
          }"
        >
          <img src="../assets/logo.jpg" alt="logo" class="logo">
        </div>
      </a-menu-item>
    </a-col>
    <a-col flex="auto">
      <router-link
        v-for="route in visibleRoutes" :key="route.path" :to="route.path" class="nav-link"
        active-class="active">
        {{ route.name }}
      </router-link>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? '未登录' }}</div>
    </a-col>
  </a-row>

</template>
<style scoped>
.globalHeader {
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  background-color: var(--color-neutral-2);
}

.logo {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 100%; /* 设置logo图片的宽度 */
  height: 100%; /* 自动调整高度 */
  object-fit: cover;
  border-radius: 50%;
}

.nav-link {
  margin-right: 150px; /* 调整链接之间的右边距 */
  font-size: 20px;
}

.nav-link:hover {
  color: #ff5500;
}

.active {
  color: #ff5500;
}
</style>

<script>
import routes from '@/router/route';
import { mapState } from 'vuex';
import checkAccess from '@/access/checkAccess';
import store from '@/store';
import { computed } from 'vue';

// const visibleRoutes = computed(() => routes.filter((item, index) => {
//   if (item.meta?.hideInView) {
//     return false;
//   }
//   // 根据用户权限过滤菜单
//   if (!checkAccess(store.state.user.loginUser, item?.meta?.access)) {
//     return false;
//   }
//   return true;
// }));

export default {
  name: 'globalHeader',
  data() {
    return {
      routes,
    };
  },
  computed: {
    store() {
      return store;
    },
    visibleRoutes() {
      return routes.filter((item) => {
        const { loginUser } = this.$store.state.user;
        if (item.meta?.hideInMenu) {
          return false;
        }
        // 根据用户权限过滤菜单
        if (!checkAccess(loginUser, item?.meta?.access)) {
          return false;
        }
        return true;
      });
    },
  },
};
</script>
