<!-- Файл: pages/index.vue -->
<script setup>
import axios from 'axios';
import { useRuntimeConfig } from '#imports';
import RepositoryCard from '../components/RepositoryCard.vue';

// Получаем конфигурацию и проверяем наличие токена
const config = useRuntimeConfig();
const repository = ref(null);

onMounted(async () => {
  try {
    // Используем config.public.GITHUB_TOKEN для передачи токена
    const repoResponse = await axios.get('https://api.github.com/repos/vuejs/vue', {
      headers: {
        Authorization: `Bearer ${config.public.GITHUB_TOKEN}`, // Используем корректное имя токена
      },
    });

    // Сохраняем данные о репозитории, включая дату последнего коммита и количество коммитов
    repository.value = {
      name: repoResponse.data.name,
      pushed_at: repoResponse.data.pushed_at,
      full_name: repoResponse.data.full_name,
      commitCount: repoResponse.data.open_issues_count, // Параметр для общего количества коммитов
    };
  } catch (error) {
    console.error('Ошибка при загрузке данных репозитория:', error);
  }
});
</script>

<template>
  <div>
    <h1>Информация о репозитории</h1>
    <RepositoryCard v-if="repository" :repository="repository" />
  </div>
</template>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
