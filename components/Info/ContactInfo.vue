<template>
  <div class="container mx-auto p-4">
    <SkillProgress
      :title="skills.frameworks.title"
      :skills="skills.frameworks.skills"
    />
    <SkillProgress
      :title="skills.technologies.title"
      :skills="skills.technologies.skills"
    />
    <SkillProgress
      :title="skills.tools.title"
      :skills="skills.tools.skills"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SkillProgress from '~/components/skill/universal/SkillProgress.vue';
import skillsData from '~/components/skill/data/skills.json';

// Импорт всех доступных иконок из @mdi/js
import * as mdiIcons from '@mdi/js';

const skills = ref({ ...skillsData });

onMounted(() => {
  for (const category in skills.value) {
    const skillCategory = skills.value[category].skills;
    for (const skill of skillCategory) {
      skill.icon = mdiIcons[skill.icon] || mdiIcons.mdiHelp; // Используем mdiHelp как fallback
    }
  }
});
</script>
