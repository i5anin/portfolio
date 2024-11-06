<template>
  <div class="repository-card">
    <h2><span class="badge text-bg-secondary text-bg-success">{{ repository.name }}</span></h2>
    <p>Количество коммитов:
      <span v-if="repository.commitCount !== null"><b>{{ repository.commitCount }}</b></span>
      <span v-else class="placeholder-glow"><span class="placeholder col-3"></span></span>
    </p>

    <p>Дата последнего коммита:
      <b>{{ latestCommitDate || 'Неизвестно' }}</b>
      <span v-if="daysSinceLastCommit !== null"> ({{ daysSinceLastCommit }} дней назад)</span>
    </p>

    <div v-if="repository.latestCommit">
      <p><strong>Последний коммит:</strong></p>
      <pre class="no-scroll">Сообщение: {{ repository.latestCommit.message }}</pre>
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
    daysSinceLastCommit() {
      if (!this.repository.pushed_at) return null;
      const lastCommitDate = new Date(this.repository.pushed_at);
      const currentDate = new Date();
      const timeDifference = currentDate - lastCommitDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
    },
  },
};
</script>

<style scoped>
.repository-card {
  border: 1px solid var(--bs-border-color, #ddd); /* Поддержка темной темы */
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.no-scroll {
  white-space: pre-wrap; /* Позволяет тексту переноситься */
  overflow-wrap: break-word; /* Разбивает длинные слова */
  overflow: hidden; /* Убирает ползунок */
}
</style>
