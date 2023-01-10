<template>
    <div v-if="!!notification" class="notification funcIcon">
        <MessageUse></MessageUse>
    </div>
</template>

<script setup lang="ts">
import MessageUse from '@/assets/svg/MessageUse.vue'
import { sessionGet } from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'
const { notification } = sessionGet(THEMECONFIG)

</script>

