<template>
  <a-row :wrap="false" align="center" class="globalHeader" style="margin-bottom: 16px">
    <a-col flex="200px">
      <!--      TODO 下拉菜单遮挡头像修复-->
      <a-space size="large" style="margin-top: 20px" @submit="handleSubmit">
        <a-dropdown @select="handleSelect">
          <a-button :style="{ padding: 0, marginRight: '38px' }">
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
          </a-button>
          <template #content>
            <a-doption>个人信息</a-doption>
            <a-doption @click="handleSelect">退出登录</a-doption>
          </template>
        </a-dropdown>
      </a-space>
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
      <div>{{ store.state.user?.loginUser.userName ?? ACCESS_ENUM.NOT_LOGIN }}</div>
    </a-col>
  </a-row>
</template>
<style scoped>
.globalHeader {
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  background: linear-gradient(to right, #fedcdb, #fedada);
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
  color: black;
}

.active {
  color: #ff5500;
}
</style>

<script>
import { routes } from '@/router/routes';
import checkAccess from '@/access/checkAccess';
import { useStore } from 'vuex';
import ACCESS_ENUM from '@/access/accessEnum';
import router from '@/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import message from '@arco-design/web-vue/es/message';
import store from '@/store';

export default {
  name: 'globalHeader',
  data() {
    return {
      routes,
    };
  },
  methods: {
    async handleSelect() {
      // const res = await UserControllerService.userLogoutUsingPost();
      // 登录成功，跳转到主页
      if (store.state.user.loginUser) {
        await store.dispatch('user/userLogout');
        await router.push({
          path: '/user/login',
          replace: true,
        });
      } else {
        message.error('退出失败');
      }
    },
  },
  setup() {
    // eslint-disable-next-line no-shadow
    const store = useStore();
    return {
      store,
    };
  },
  computed: {
    ACCESS_ENUM() {
      return ACCESS_ENUM;
    },
    // 过滤菜单，提升渲染效率
    visibleRoutes() {
      return routes.filter((item) => {
        const { loginUser } = this.$store.state.user;
        if (item.meta?.hideInMenu) {
          return false;
        }
        // 根据用户权限过滤菜单
        return checkAccess(loginUser, item?.meta?.access);
      });
    },
  },
};
</script>
