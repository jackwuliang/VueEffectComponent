<template >
    <div v-if="logoPosition" class="logo-content">
        <div ref="aiLogo" class="ailogo">
            <!-- {{logoMess}} -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { sessionGet} from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'
import ThreeJs from "./index";
import { onMounted, ref } from "vue";


// 获取对应的后端传过来的基础信息
const { logoPosition, logoMess } = sessionGet(THEMECONFIG)


// 相应式 ref 直接通过同名的形式来获取 
const aiLogo = ref<HTMLElement | null>(null);

// 渲染对应的模型logo
onMounted(() => { 
    const { renderer } = new ThreeJs()
    // console.log(aiLogo.value,'dom')
    renderer&& aiLogo.value?.appendChild(renderer.domElement);

    // console.log(three,'three')
});

// console.log(sessionGet(THEMECONFIG), 'sessionGet(THEMECONFIG)')
// console.log(logoMess,'logoMess')

</script>


<style lang='scss' src='./logo.scss' scoped />

