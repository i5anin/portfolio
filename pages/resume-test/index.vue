<template>
  <div class="resume">
    <h1>Моё резюме</h1>
    <section>
      <h2>Контактная информация</h2>
      <p><strong>Телефон:</strong> +7 (995) 021-21-63 (Telegram: <a href="https://t.me/i5anin">@i5anin</a>)</p>
      <p><strong>Email:</strong> <a href="mailto:isanin.company@gmail.com">isanin.company@gmail.com</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/i5anin">github.com/i5anin</a></p>
    </section>
    <section>
      <h2>Опыт работы</h2>
      <div v-for="job in jobs" :key="job.company">
        <h3>{{ job.period }} — {{ job.company }}</h3>
        <p><strong>Должность:</strong> {{ job.position }}</p>
        <p v-html="job.description"></p>
      </div>
    </section>
    <section>
      <h2>Навыки</h2>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
    <section>
      <h2>Образование</h2>
      <p>Ковровская государственная технологическая академия им. В.А. Дегтярева, Мехатроника и робототехника (2020)</p>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const jobs = reactive([
  {
    period: 'Июль 2023 — настоящее время',
    company: 'ПФ-Форум',
    position: 'Программист-разработчик',
    description: `
      <p><strong>Fullstack-разработчик</strong></p>
      <ul>
        <li>Разработка софта для каталогизации и отслеживания инструментов на производстве.</li>
        <li>Технологии: Vue 3, Node.js, Express.js, PostgreSQL.</li>
      </ul>
    `,
  },
  // Добавьте остальные места работы аналогично
]);

const skills = reactive([
  'Vue.js',
  'JavaScript',
  'Node.js',
  'Firebase',
  'TypeScript',
  // Добавьте остальные навыки
]);
</script>

<style>
.resume {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.resume h1, .resume h2 {
  text-align: center;
}

.resume section {
  margin-bottom: 24px;
}
</style>
