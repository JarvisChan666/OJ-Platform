<template>
  <div id="UserRegisterView">
    <a-form
      :model="form"
      size="large"
      style="margin: 0 auto; max-width: 500px"
      @submit="handleSubmit"
    >
      <a-form-item
        :rules="[
          { required: true, message: '账号不为空' },
          { minLength: 4, message: '账号长度不小于4' },
        ]"
        label="账号"
      >
        <a-input v-model="form.userAccount" placeholder="please enter account" />
      </a-form-item>
      <a-form-item
        :rules="[
          { required: true, message: '密码不为空' },
          { minLength: 8, message: '密码长度不低于8' },
        ]"
        label="密码"
      >
        <a-input-password
          v-model="form.userPassword"
          allow-clear
          placeholder="Please enter password"
          style="margin: 0 auto; max-width: 500px"
        />
      </a-form-item>
      <a-form-item
        :rules="[
          { required: true, message: '密码不为空' },
          { minLength: 8, message: '密码长度不低于8' },
        ]"
        label="请再次输入密码"
      >
        <a-input-password
          v-model="form.checkPassword"
          allow-clear
          placeholder="Please enter password"
          style="margin: 0 auto; max-width: 500px"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">Register</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// eslint-disable-next-line import/no-extraneous-dependencies
import message from '@arco-design/web-vue/es/message';
import { UserControllerService, UserRegisterRequest } from '../../../generated';

/**
 * 表单信息
 */
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
} as UserRegisterRequest);
// eslint-disable-next-line no-import-assign,no-redeclare
const router = useRouter();

const store = useStore();

const handleSubmit = async () => {
  if (!form.userAccount || !form.userPassword || !form.checkPassword) {
    return;
  }
  if (form.userAccount.length < 4 || form?.userPassword.length < 6) {
    return;
  }
  if (
    /* eslint-disable */
    form.checkPassword.length !== form.userPassword.length ||
    form.checkPassword !== form.userPassword
  ) {
    message.error('两次输入密码不一致');
    return;
  }
  const res = await UserControllerService.userRegisterUsingPost(form);
  if (res.code === 0) {
    message.success('注册成功！');
    await store.dispatch('getLoginUser');
    await router.push({
      path: '/user/login',
      replace: true,
    });
  } else {
    message.error(res.error);
  }
};
</script>
