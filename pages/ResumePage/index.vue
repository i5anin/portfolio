<template>
  <div class="resume-page container">
    <HeaderSection
      :header="resumeData?.header"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderSection from '@/components/HeaderSection.vue';

const resumeData = ref({});

onMounted(async () => {
  const response = await fetch('./resume.json');
  resumeData.value = await response.json();
});

const editSection = (section) => {
  console.log(`Редактировать секцию: ${section}`);
};

// Другие функции
</script>

<style scoped>
.resume-page {
  font-family: Arial, sans-serif;
  color: #333;
}
h2, h3, h4 {
  margin-bottom: 8px;
}
</style>
