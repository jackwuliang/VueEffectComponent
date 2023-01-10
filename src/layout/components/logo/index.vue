<template >
    <div v-if="logoPosition" class="logo-content">
        <div>{{logoMess}}</div>
    </div>
</template>

<script setup lang="ts">
import { sessionGet} from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'
const { logoPosition, logoMess } = sessionGet(THEMECONFIG)

// console.log(sessionGet(THEMECONFIG), 'sessionGet(THEMECONFIG)')
// console.log(logoMess,'logoMess')

</script>


<style lang='scss' src='./logo.scss' scoped />

