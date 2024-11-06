<template>
  <div class="container mx-auto p-4">
    <div v-if="repositories.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RepositoryCard
        v-for="repo in repositories"
        :key="repo.full_name"
        :repository="repo"
        class="rounded-lg shadow p-4"
      />
    </div>

    <div v-else class="text-body-secondary">
      <p>Не удалось загрузить данные о репозиториях.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RepositoryCard from './RepositoryCard.vue';
import { getBasicRepoInfo, updateCommitData } from '~/components/github/api/github.js';
import repoNames from '~/data/repositories.json';

const repositories = ref([]);

onMounted(async () => {
  try {
    const basicRepoData = await getBasicRepoInfo(repoNames);
    repositories.value = basicRepoData;

    // Загружаем количество коммитов и последний коммит в фоновом режиме
    basicRepoData.forEach(async (repo) => {
      const commitData = await updateCommitData(repo.full_name);
      const targetRepo = repositories.value.find((r) => r.full_name === repo.full_name);
      if (targetRepo) {
        targetRepo.commitCount = commitData.commitCount;
        targetRepo.latestCommit = commitData.latestCommit;
      }
    });
  } catch (error) {
    console.error('Ошибка при загрузке данных репозиториев:', error.message);
  }
});
</script>

<style scoped>
/* Дополнительные стили, если нужно */
</style>
