<template>
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center">
      <h1>{{ name }}</h1>
      <span class="text-muted">{{ salary }}</span>
    </div>
    <p class="text-muted">{{ specialization }}</p>

    <div>
      <strong>Занятость:</strong> {{ employmentType }} <br />
      <strong>График работы:</strong> {{ schedule }} <br />
      <strong>Готовность к командировкам:</strong> {{ travelWillingness }}
    </div>

    <h2 class="mt-4">Контакты</h2>
    <p>
      <strong>Телефон:</strong> {{ contact.phone }} <br />
      <strong>Telegram:</strong>
      <a :href="contact.telegramLink">{{ contact.telegram }}</a> <br />
      <strong>Email:</strong>
      <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
    </p>

    <h2 class="mt-4">Опыт работы</h2>
    <div v-for="job in jobs" :key="job.id" class="mb-4">
      <h3>{{ job.company }}</h3>
      <p class="text-muted">{{ job.period }}</p>
      <p><strong>{{ job.role }}</strong></p>
      <ul>
        <li v-for="duty in job.duties" :key="duty">{{ duty }}</li>
      </ul>
      <a v-if="job.projectLink" :href="job.projectLink" target="_blank">Проект на GitHub</a>
    </div>

    <h2 class="mt-4">Навыки</h2>
    <div v-for="(skills, level) in skillLevels" :key="level">
      <p><strong>{{ level }}:</strong> {{ skills.join(', ') }}</p>
    </div>

    <h2 class="mt-4">Обо мне</h2>
    <p>{{ about }}</p>

    <h2 class="mt-4">Образование</h2>
    <p>
      <strong>{{ education.degree }}</strong>, {{ education.university }} (
      {{ education.year }} )
    </p>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      name: "Vue Developer",
      salary: "180 000 ₽ на руки",
      specialization: "Программист, разработчик",
      employmentType: "полная занятость, частичная занятость",
      schedule: "полный день, удаленная работа",
      travelWillingness: "готов к командировкам",
      contact: {
        phone: "+7 (995) 021-21-63",
        telegram: "@i5anin",
        telegramLink: "https://t.me/i5anin",
        email: "isanin.company@gmail.com",
      },
      jobs: [
        {
          id: 1,
          company: "ПФ-Форум",
          period: "Июль 2023 — по настоящее время (1 год 4 месяца)",
          role: "Fullstack-разработчик",
          duties: [
            "Разработка софта для каталогизации инструментов на производстве (Vue 3, JavaScript, Node.js, Express.js, REST API, PostgreSQL)",
            "Проект телеграм-бота для получения данных и статистики производства (JS, REST API, PHP, MySQL)",
            "Архитектура проектов с нуля",
          ],
          projectLink: "https://github.com/i5anin",
        },
        // Добавьте другие записи о работе аналогично
      ],
      skillLevels: {
        "Продвинутый уровень": ["Vue", "VueX", "Vue Router", "JavaScript"],
        "Средний уровень": ["Git", "nuxtjs", "element-plus", "Node.js", "REST API"],
        "Базовый уровень": ["Firebase", "CI/CD"],
      },
      about:
        "Быстро развиваюсь в любой технологии, легко обучаюсь и вливаюсь в коллектив. Ищу интересную удаленную работу...",
      education: {
        degree: "Бакалавр",
        university: "Ковровская государственная технологическая академия им. В.А. Дегтярева",
        year: 2020,
      },
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
