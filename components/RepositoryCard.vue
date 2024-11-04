<!-- components/RepositoryCard.vue -->
<template>
  <div class="repository-card">
    <h2>{{ repository.name }}</h2>
    <p>Количество коммитов: {{ repository.commitCount || 'Неизвестно' }}</p>
    <p>Дата последнего коммита: {{ latestCommitDate || 'Неизвестно' }}</p>
    <div v-if="repository.latestCommit">
      <p><strong>Последний коммит:</strong></p>
      <p>Сообщение: {{ repository.latestCommit.message }}</p>
      <p>Дата: {{ formattedCommitDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  computed: {
    latestCommitDate() {
      return this.repository.pushed_at
        ? new Date(this.repository.pushed_at).toLocaleString()
        : null;
    },
    formattedCommitDate() {
      return this.repository.latestCommit?.date
        ? new Date(this.repository.latestCommit.date).toLocaleString()
        : 'Неизвестно';
    },
  },
};
</script>

<style scoped>
.repository-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
