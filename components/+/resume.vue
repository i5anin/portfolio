<template>
  <section class="resume">
    <h1>Моё резюме</h1>
    <ContactInfo :contact="contact" />
    <WorkExperience :jobs="jobs" />
    <Skills :skills="skills" />
    <Education :education="education" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ContactInfo from '~/components/ContactInfo.vue';
import WorkExperience from '~/components/WorkExperience.vue';
import Skills from '~/components/Skills.vue';
import Education from '~/components/Education.vue';

const contact = ref({
  phone: '+7 (995) 021-21-63',
  telegram: '@i5anin',
  email: 'isanin.company@gmail.com',
  github: 'github.com/i5anin',
});

const jobs = ref([
  {
    period: 'Июль 2023 — настоящее время',
    company: 'ПФ-Форум',
    position: 'Программист-разработчик',
    responsibilities: [
      'Разработка софта для каталогизации и отслеживания инструментов на производстве.',
      'Технологии: Vue 3, Node.js, Express.js, PostgreSQL.',
    ],
  },
  // Добавьте другие места работы
]);

const skills = ref([
  { name: 'Vue.js', image: '/images/vue.png' },
  { name: 'JavaScript', image: '/images/javascript.png' },
  { name: 'Node.js', image: '/images/nodejs.png' },
  // Добавьте другие навыки
]);

const education = ref({
  institution: 'Ковровская государственная технологическая академия им. В.А. Дегтярева',
  degree: 'Мехатроника и робототехника',
  year: 2020,
});
</script>

<style scoped>
.resume {
  padding: 2rem;
}

.resume h1 {
  text-align: center;
  color: var(--color-primary);
}
</style>
