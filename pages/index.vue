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
    <div v-if="repositories.length > 0" class="mt-8">
      <h2 class="text-xl font-semibold mb-2">Последние коммиты:</h2>
      <ul class="list-disc pl-5">
        <li v-for="repo in repositories" :key="repo.full_name" class="mb-4">
          <strong class="text-lg">{{ repo.full_name }}:</strong>
          <div>Сообщение: {{ repo.latestCommit.message }}</div>
          <div>Дата: {{ new Date(repo.latestCommit.date).toLocaleString() }}</div>
        </li>
      </ul>
    </div>
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
/* Дополнительные стили, если нужно */
</style>
