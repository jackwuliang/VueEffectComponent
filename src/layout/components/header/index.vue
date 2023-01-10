<template>
    <div class="Header">
        <Logo></Logo>
        <div class="space-content">
            <Avatar></Avatar>
            <Notify></Notify>
            <Maximize></Maximize>
            <dataLoc></dataLoc>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '../logo/index.vue'
import dataLoc from '../dataLocation/dataLoc.vue'
import Maximize from '../Maximize/index.vue'
import Avatar from '../Avatar/index.vue'
import Notify from '../Notify/index.vue'

</script>
<style lang='scss' src='./header.scss'/>
