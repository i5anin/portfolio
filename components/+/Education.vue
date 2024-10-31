<template>
  <section class="education">
    <h2>Образование</h2>
    <p>
      {{ education.institution }},
      <br />
      {{ education.degree }} ({{ education.year }})
    </p>
  </section>
</template>

<script setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.education h2 {
  color: var(--color-secondary);
}

.education p {
  margin-top: 1rem;
}
</style>
