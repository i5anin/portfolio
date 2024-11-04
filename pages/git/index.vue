<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Информация о репозиториях</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RepositoryCard
        v-for="repo in repositories"
        :key="repo.full_name"
        :repository="repo"
        class="bg-white rounded-lg shadow p-4"
      />
    </div>
  </div>
</template>

<script setup>
import github from '~/components/github/api/git.js';
import { ref, onMounted } from 'vue';
import RepositoryCard from '../../components/RepositoryCard.vue';

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
/* Дополнительные стили, если нужно */
</style>
