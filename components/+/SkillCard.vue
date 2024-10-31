<template>
  <div class="skill-card">
    <img :src="skill.image" :alt="skill.name" />
    <p>{{ skill.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.skill-card {
  width: 100px;
  text-align: center;
}

.skill-card img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.skill-card p {
  margin-top: 0.5rem;
  color: var(--color-text);
}
</style>
