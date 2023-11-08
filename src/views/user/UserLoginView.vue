<template>
  <div id="UserLoginView">
    <a-form
      :model="form"
      size="large"
      style="margin: 0 auto; max-width: 500px"
      @submit="handleSubmit"
    >
      <a-form-item label="账号">
        <a-input v-model="form.userAccount" placeholder="please enter account" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input-password
          v-model="form.userPassword"
          allow-clear
          placeholder="Please enter password"
          style="margin: 0 auto; max-width: 500px"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Login</a-button>
      </a-form-item>
      <p>
        还没有账号？
        <router-link to="/user/register">点击注册</router-link>
      </p>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import message from '@arco-design/web-vue/es/message';
// eslint-disable-next-line import/no-cycle
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { UserControllerService, UserLoginRequest } from '../../../generated';

/**
 * 表单信息
 */
const form = reactive({
  userAccount: '',
  userPassword: '',
} as UserLoginRequest);
// eslint-disable-next-line no-import-assign,no-redeclare
const router = useRouter();
// eslint-disable-next-line no-import-assign,no-redeclare
const store = useStore();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  // 登录成功，跳转到主页
  if (res.code === 0) {
    await store.dispatch('user/getLoginUser');
    await router.push({
      path: '/',
      replace: true,
    });
  } else {
    message.error(`登陆失败，${res.message}`);
  }
};
</script>
