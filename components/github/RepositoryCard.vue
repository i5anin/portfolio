<template>
  <div class="repository-card">
    <!-- Иконка GitHub и название репозитория -->
    <div class="d-flex align-items-center mb-2">

      <h2>
        <span class="badge text-bg-secondary text-bg-success">
          {{ repository.name }}
        </span>
      </h2>
      <SvgIcon type="mdi" :path="mdiGithub" class="github-icon ms-2" />
    </div>

    <!-- Количество коммитов -->
    <p>Количество коммитов:
      <span v-if="repository.commitCount !== null">
        <b>{{ repository.commitCount }}</b>
      </span>
      <span v-else class="placeholder-glow">
        <span class="placeholder col-3"></span>
      </span>
    </p>

    <!-- Дата последнего коммита и количество дней с момента последнего коммита -->
    <p>Дата последнего коммита:
      <b>{{ latestCommitDate || 'Неизвестно' }}</b>
      <span v-if="daysSinceLastCommit !== null"> ({{ daysSinceLastCommit }} дней назад)</span>
    </p>

    <!-- Сообщение последнего коммита -->
    <div v-if="repository.latestCommit">
      <p><strong>Последний коммит:</strong></p>
      <pre class="no-scroll">Сообщение: {{ repository.latestCommit.message }}</pre>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiGithub } from '@mdi/js';

export default {
  components: { SvgIcon },
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mdiGithub,
    };
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

.github-icon {
  width: 24px;
  height: 24px;
  color: #333; /* Цвет иконки GitHub */
}

.no-scroll {
  white-space: pre-wrap; /* Позволяет тексту переноситься */
  overflow-wrap: break-word; /* Разбивает длинные слова */
  overflow: hidden; /* Убирает ползунок */
}
</style>
