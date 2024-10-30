<template>
  <div class="resume-page container">
    <section class="header p-3 mb-4 bg-light border rounded">
      <h2 class="text-primary">Vue Developer</h2>
      <p class="h5">180 000 ₽ на руки</p>
      <p>Специализации: Программист, разработчик</p>
      <p>Занятость: полная занятость, частичная занятость</p>
      <p>График работы: полный день, удаленная работа</p>
      <p>Желательное время в пути до работы: Не имеет значения</p>
      <p>готов к командировкам</p>
      <button class="btn btn-outline-primary mt-2" @click="editSection('header')">редактировать</button>
    </section>

    <section class="contacts p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">Рассматриваю предложения</h3>
      <p>Контакты</p>
      <ul class="list-unstyled">
        <li>+7 (XXX) XXX-XX-XX Telegram <a href="https://t.me/i5anin">@i5anin</a></li>
        <li>XXX@gmail.com — предпочитаемый способ связи</li>
        <li><a href="https://t.me/i5anin">Telegram</a></li>
      </ul>
      <button class="btn btn-outline-primary mt-2" @click="editSection('contacts')">редактировать</button>
    </section>

    <section class="photo-edit p-3 mb-4 bg-light border rounded">
      <button class="btn btn-primary" @click="editPhoto">Изменить фото</button>
      <p class="mt-2">Указан примерный район поиска работы</p>
      <button class="btn btn-outline-secondary mt-2" @click="showMap">Показать карту</button>
    </section>

    <section class="profile p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">По-русски</h3>
      <p>Резюме обновлено 30.10.2024 07:20</p>
      <p>Опыт работы 3 года 10 месяцев</p>
      <button class="btn btn-outline-primary mt-2" @click="editSection('profile')">редактировать</button>
    </section>

    <section class="experience p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">Опыт работы</h3>
      <div class="job mb-3" v-for="job in experience" :key="job.company">
        <h4 class="text-dark">{{ job.company }}</h4>
        <p>{{ job.position }} ({{ job.dates }})</p>
        <p>{{ job.description }}</p>
        <ul>
          <li v-for="task in job.tasks" :key="task">{{ task }}</li>
        </ul>
        <p v-if="job.github">GitHub: <a :href="job.github">{{ job.github }}</a></p>
      </div>
    </section>

    <section class="education p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">Высшее образование</h3>
      <p>Ковровская государственная технологическая академия им. В.А. Дегтярева, Мехатроника и робототехника, 2020</p>
    </section>

    <section class="skills p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">Навыки</h3>
      <p>Vue, VueX, Vue Router, JavaScript, ES5, TypeScript, Git, Nuxt.js, Node.js, Bootstrap, CI/CD, Firebase.</p>
      <button class="btn btn-outline-primary mt-2" @click="editSection('skills')">редактировать</button>
    </section>

    <section class="about-me p-3 mb-4 bg-light border rounded">
      <h3 class="text-secondary">Обо мне</h3>
      <ul class="list-unstyled">
        <li>быстро развиваюсь в любой технологии (2 недели)</li>
        <li>легко обучаюсь, в коллективе, готов работать с наставником.</li>
        <li>Цель — стать лучшим разработчиком Vue.js.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "ResumePage",
  data() {
    return {
      experience: [
        {
          company: "ПФ-Форум",
          position: "Программист-разработчик",
          dates: "Июль 2023 — по настоящее время",
          description: "Fullstack-разработчик API VUE JS",
          tasks: [
            "Коммерческий проект по учёту инструмента, каталогизация и отслеживание инструментов (Vue 3, Node.js, PostgreSQL).",
            "Телеграм-бот для данных и статистики производства (JS REST API PHP MySQL).",
          ],
          github: "https://github.com/i5anin",
        },
        {
          company: "Практика по Frontend разработке",
          position: "skillbox.ru",
          dates: "Август 2022 — Март 2023",
          tasks: [
            "Инвентарь drag-and-drop (Vue3 TypeScript)",
            "Биржевой стакан (Vue3 API Binance Element Plus)",
            "ToDoList (Vue3 Firebase)",
          ],
          github: null,
        },
        {
          company: "ООО СК",
          position: "Vue.js разработка сайта",
          dates: "Май 2022 — Сентябрь 2022",
          tasks: ["Business OZON Aliexpress API (Vue3 API)"],
          github: null,
        },
      ],
    };
  },
  methods: {
    editSection(section) {
      console.log(`Редактировать секцию: ${section}`);
    },
    editPhoto() {
      console.log("Изменить фото");
    },
    showMap() {
      console.log("Показать карту");
    },
  },
};
</script>

<style scoped>
.resume-page {
  font-family: Arial, sans-serif;
  color: #333;
}
h2, h3, h4 {
  margin-bottom: 8px;
}
</style>
