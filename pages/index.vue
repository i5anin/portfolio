<template>
  <div>
    <h1>Информация о репозиториях</h1>
    <RepositoryCard v-for="repo in repositories" :key="repo.full_name" :repository="repo" />
  </div>
</template>

<script setup>
import github from '@/components/api/git.js';
import { ref, onMounted } from 'vue';
import RepositoryCard from '../components/RepositoryCard.vue';

const repositories = ref([]);

onMounted(async () => {
  const repoNames = [
    'vuejs/vue',            // Репозиторий Vue
    'i5anin/portfolio',     // Ваш репозиторий
    // ...другие репозитории
  ];

  try {
    repositories.value = await github.getRepositoriesData(repoNames);
  } catch (error) {
    console.error('Ошибка при загрузке данных репозиториев:', error);
  }
});
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
