<template>
    <div class="app-page">
        <Header></Header>
        <Menu></Menu>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

import Header from './components/header/index.vue'
import Menu from './components/Menu/index.vue'

</script>

<style lang='scss' src='./layout.scss' scoped />