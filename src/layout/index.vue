<template>
    <div class="app-page">
        <div class="app-page-Header"><Header></Header></div>
        <div class="app-page-Menu"><Menu></Menu></div>
        <div class="app-page-content"><router-view></router-view></div>
    </div>
</template>

<script setup lang="ts">

import Header from './components/header/index.vue'
import Menu from './components/Menu/index.vue'


</script>

<style lang='scss' src='./layout.scss' scoped />