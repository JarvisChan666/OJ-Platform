<template>
  <a-row :wrap="false" align="center" class="globalHeader" style="margin-bottom: 16px">
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
          <img alt="logo" class="logo" src="../assets/logo.jpg" />
        </div>
      </a-menu-item>
    </a-col>
    <a-col flex="auto">
      <router-link
        v-for="route in visibleRoutes"
        :key="route.path"
        :to="route.path"
        active-class="active"
        class="nav-link"
      >
        {{ route.name }}
      </router-link>
    </a-col>
    <a-col class="userName" flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>
<style scoped>
.globalHeader {
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  background: linear-gradient(to right, #ff87a0, #361d22);
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

.userName {
  color: yellow;
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
