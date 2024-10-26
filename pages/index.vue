<template>
  <div>
    <h1>Информация о репозиториях</h1>
    <RepositoryCard v-for="repo in repositories" :key="repo.full_name" :repository="repo" />
    <div v-if="repositories.length > 0">
      <h2>Последние коммиты:</h2>
      <ul>
        <li v-for="repo in repositories" :key="repo.full_name">
          <strong>{{ repo.full_name }}:</strong>
          <div>Сообщение: {{ repo.latestCommit.message }}</div>
          <div>Дата: {{ new Date(repo.latestCommit.date).toLocaleString() }}</div>
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
h1 {
  font-size: 20px;
}
</style>
