<template>
     <el-menu :default-active="activeIndex" style="width:300px" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/page/dashboard">主页</el-menu-item>
            <!-- <el-sub-menu index="2">
                <template #title>功能菜单</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu> -->
            <el-menu-item index="/page/test">测试</el-menu-item>
        </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('/page/dashboard')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>