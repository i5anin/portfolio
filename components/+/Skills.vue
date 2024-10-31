<template>
  <section class="skills">
    <h2>Навыки</h2>
    <div class="skills-list">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </section>
</template>

<script setup>
import SkillCard from '~/components/SkillCard.vue';

defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.skills h2 {
  color: var(--color-secondary);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
