<template>
  <h1>vue+ts</h1>

  <div class="card">
     <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)

</script>

<style scoped>

.read-the-docs {
  color: #888;
}

</style>
