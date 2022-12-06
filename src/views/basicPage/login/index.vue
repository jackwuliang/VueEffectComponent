<template>
  <div class="loginPageback">
    <span class="icon_logo_inner">登陆页面</span>
    <div class="loginModelinner">
      <div class="card-input">
        <div class="card-title-inner">Login to your account</div>
        <div class="mes-title-option">
          <p>Email address</p>
        </div>
        <el-input v-model="loginForm.username"  class="mes-input-option margin-double" placeholder="your email or phone number" />
        <div class="mes-title-option">
          <p>Password</p>
          <div class="forget-password">I forgot password</div>
        </div>
        <el-input v-model="loginForm.password" type="password" class="mes-input-option" placeholder="your password" />
        <div class="basic_configsetting">
           <el-checkbox v-model="checked">Remember me on this device</el-checkbox>
        </div>
        <el-button type="primary" class="button_flex" @click="login(loginFormRef)">Sign in</el-button>
      </div>
      <div class="type-login-order">
        <div class="hr-text"></div>
        <div class="inner-button-change">
          <el-button class="button-type" :icon="Share" >Login with Github</el-button>
          <el-button class="button-type" :icon="Share" >Login with Twitter</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue'
import { Login } from "@/api/interface";
import { loginApi } from "@/api/modules/login";
import type { ElForm } from "element-plus";
import { Share } from '@element-plus/icons-vue'
import md5 from "js-md5";

const checked = ref(false) // 响应式api
const loading = ref(false);

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();

const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const login = (formEl: FormInstance | undefined) =>{
  console.log(formEl,'formEl')
  // 没有内容直接停止
  try {
      console.log(121312312)
      // 1.执行登录接口 这个是不是可以去store中去做
      const data= loginApi({ ...loginForm, password: md5(loginForm.password) });
      console.log(data,'data')
			// const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });

    }finally{
       loading.value = true;
  }
  if (!formEl) return;
  formEl.validate(async valid => {
    console.log('werer')
    if (!valid) return;
    // 打开加载效果
    loading.value = true;
    try {
      console.log(121312312)
      // 1.执行登录接口 这个是不是可以去store中去做
      const data= await loginApi({ ...loginForm, password: md5(loginForm.password) });
      console.log(data,'data')
			// const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });

    }finally{
       loading.value = true;
    }
  })
}


</script>

<style lang='scss' src='./login.scss' scoped />
