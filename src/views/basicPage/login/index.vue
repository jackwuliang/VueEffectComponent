<template>
  <h1>vue+ts</h1>

  <div class="card">
     <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()


const count = ref(0) // 响应式api

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

    const demoref = (getter:any)=> {
      let refa = {
         value: 0
      }  // 这里ref为值类型
      console.log('before',refa)
      setTimeout(() => {
        refa.value = getter()
        console.log('after',refa)
      }, 1000);
      return refa
    }
    let refb
    refb =  demoref (() => 100)
    console.log('refb',refb)

    

</script>

<style scoped>

.card {
  background-color: red;
}

</style>
