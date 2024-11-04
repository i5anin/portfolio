<template>
  <section class="work-experience">
    <h2>Опыт работы</h2>
    <div v-for="job in jobs" :key="job.company" class="job">
      <h3>{{ job.period }} — {{ job.company }}</h3>
      <p><strong>Должность:</strong> {{ job.position }}</p>
      <ul>
        <li v-for="(item, index) in job.responsibilities" :key="index">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  jobs: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.work-experience h2 {
  color: var(--color-secondary);
}

.job {
  margin-bottom: 1.5rem;
}

.job h3 {
  color: var(--color-primary);
}
</style>
