<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Информация о репозиториях</h1>
    <div v-if="repositories.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RepositoryCard
        v-for="repo in repositories"
        :key="repo.full_name"
        :repository="repo"
        class="bg-white rounded-lg shadow p-4"
      />
    </div>

    <div v-else class="text-gray-500">
      <p>Не удалось загрузить данные о репозиториях.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RepositoryCard from '../RepositoryCard.vue';
import { getRepositoriesData } from '~/components/github/api/git.js';
import repoNames from '~/data/repositories.json';

const repositories = ref([]);

onMounted(async () => {
  try {
    repositories.value = await getRepositoriesData(repoNames);
  } catch (error) {
    console.error('Ошибка при загрузке данных репозиториев:', error.message);
  }
});
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
