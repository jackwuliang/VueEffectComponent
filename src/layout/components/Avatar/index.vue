<template>
    <div v-if="avatar" class="Avatar">
         <div class="icon">W</div>
         <div class="name-title">
            <div class="name">wuLiang</div>
            <div class="position">Ui Designer</div>
         </div>
    </div>
</template>

<script setup lang="ts">
import { sessionGet} from '@/utils/auth'
import { THEMECONFIG } from '@/utils/typename'

const { avatar } = sessionGet(THEMECONFIG)
// console.log(avatar,'avatar')

</script>

