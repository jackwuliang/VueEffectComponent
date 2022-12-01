<template>
  <div class="loginPageback">
    <span class="icon_logo_inner">登陆页面</span>
    <div class="loginModelinner">
      <div class="card-input">
        <div class="card-title-inner">Login to your account</div>
        <div class="mes-title-option">
          <p>Email address</p>
        </div>
        <el-input v-model="input" class="mes-input-option margin-double" placeholder="your email or phone number" />
        <div class="mes-title-option">
          <p>Password</p>
          <div class="forget-password">I forgot password</div>
        </div>
        <el-input v-model="input" class="mes-input-option" placeholder="your password" />
        <div class="basic_configsetting">
           <el-checkbox v-model="checked">Remember me on this device</el-checkbox>
        </div>
        <el-button type="primary" class="button_flex">Sign in</el-button>
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

import { ref } from 'vue'
import { Share } from '@element-plus/icons-vue'

// defineProps<{ msg: string }>()

const input = ref('') // 响应式api
const checked = ref(false) // 响应式api

// const ree = (fun: any): any => {
// 	let b = 0
//   console.log(b,'b')
// 	setTimeout(() => {
// 		b = fun()
//     console.log(b,'bbbbb')
// 	}, 1000)
// 	return b
// }

// let c = ree(() => 100)
// console.log(c, 'ccccc');

const demoref = (getter: any) => {
  let refa = {
    value: 0
  }  // 这里ref为值类型
  console.log('before', refa)
  setTimeout(() => {
    refa.value = getter()
    console.log('after', refa)
  }, 1000);
  return refa
}
let refb
refb = demoref(() => 100)
console.log('refb', refb)

</script>




<style lang='scss' src='./login.scss' scoped />
