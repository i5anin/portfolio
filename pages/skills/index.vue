<template>
  <div class="container mx-auto p-4">
    <SkillProgress
      v-for="(category, index) in skills"
      :key="index"
      :title="category.title"
      :skills="category.skills"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SkillProgress from '~/components/skill/universal/SkillProgress.vue';
import skillsData from '~/data/skills.json';
import * as mdiIcons from '@mdi/js';

const skills = ref({ ...skillsData });

// Функция для присвоения иконок
function assignIconsToSkills(skills) {
  for (const category of Object.values(skills)) {
    category.skills.forEach(skill => {
      skill.icon = mdiIcons[skill.icon] || mdiIcons.mdiHelp;
    });
  }
}

onMounted(() => {
  assignIconsToSkills(skills.value);
});
</script>
