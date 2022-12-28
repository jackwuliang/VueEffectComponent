<template >
    <div v-if="!logoPosition">logo 位置</div>
</template>

<script setup lang="ts">

import { GlobalStore } from "@/stores";

const globalStore = GlobalStore()
console.log(globalStore.themeConfig, 'themconfig')
const { logoPosition, logoMess } = globalStore.themeConfig

</script>
