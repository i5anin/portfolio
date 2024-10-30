<template>
  <div class="resume-page container">
    <h2>Header Information</h2>
    <div v-for="(item, key) in header" :key="key">
      <h2>
        {{ item.title }}: {{ item.value }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Определите пропсы
const props = defineProps({
  header: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.resume-page {
  font-family: Arial, sans-serif;
  color: #333;
}

h2 {
  margin-bottom: 8px;
}
</style>
