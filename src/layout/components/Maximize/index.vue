<template>
    <div v-if="!!maximize" class="notification funcIcon">
        <GetAllScreen></GetAllScreen>
    </div>
</template>

<script setup lang="ts">
import GetAllScreen from '@/assets/svg/GetAllScreen.vue'
import { sessionGet } from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'

const { maximize } = sessionGet(THEMECONFIG)

</script>

