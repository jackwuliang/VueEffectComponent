<template>
  <div class="loginPageback">
    <span class="icon_logo_inner">登陆页面</span>
    <div class="loginModelinner">
      <div class="card-input">
        <div class="card-title-inner">Login to your account</div>
        <el-form ref="loginFormRef" class="box_item" :model="loginForm" :rules="loginRules">
          <el-form-item prop="username" class="box_item">
            <div class="mes-title-option">
              <p>Email address</p>
            </div>
            <el-input v-model="loginForm.username" class="mes-input-option margin-double"
              placeholder="your email or phone number" />
          </el-form-item>
          <el-form-item prop="password" class="box_item">
            <div class="mes-title-option">
              <p>Password</p>
              <div class="forget-password">I forgot password</div>
            </div>
            <el-input v-model="loginForm.password" type="password" class="mes-input-option"
              placeholder="your password" />
          </el-form-item>
          <div class="basic_configsetting">
            <el-checkbox v-model="checked">Remember me on this device</el-checkbox>
          </div>
          <el-button type="primary" class="button_flex" @click="login(loginFormRef)">Sign in</el-button>
        </el-form>
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
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { loginApi,getUseInfo } from "@/api/modules/login";
import { GlobalStore } from "@/stores";
import type { ElForm } from "element-plus";
import { Share } from '@element-plus/icons-vue'
import { sessionSet } from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'
import md5 from "js-md5";

const router = useRouter();
const globalStore = GlobalStore();

const checked = ref(false) // 响应式api
const loading = ref(false);

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const login = (formEl: FormInstance | undefined) => {
  // console.log(formEl, 'formEl')
  // 没有内容直接停止
  if (!formEl) return;
  formEl.validate(async valid => {
    // console.log('werer')
    if (!valid) return;
    // 打开加载效果
    loading.value = true;
    try {
      // 1.执行登录接口 有些数据需要存在store中
      const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });
      // console.log(data,'token')
      // 2.缓存token，并且用token获取用户信息
      globalStore.setToken(data.access_token);
      // 3.更新用户信息
      const { data:useinfomes } = await getUseInfo(data!.access_token)
      // 缓存session
      const { themeConfig } = useinfomes
      sessionSet(THEMECONFIG,themeConfig)

      globalStore.getUserinfo(useinfomes);
      const { homeUrl } = useinfomes
      // console.log(useinfomes,'useinfo')
      // console.log(globalStore,'globalStore')

      // 4跳转到用户首页
      router.push(homeUrl)
      // globalStore.setToken(data.access_token);

    } finally {
      loading.value = true;
    }
  })
}

</script>
<style lang='scss' src='./login.scss' scoped />
