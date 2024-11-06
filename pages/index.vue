<template>
  <section class="mb-8">
    <ProfileCard />
  </section>
  <div class="container mx-auto p-8">
    <!-- Профиль -->


    <!-- Навыки -->
    <section class="mb-8">
      <h1 class="display-3 text-center pt-10">Навыки</h1>
      <SkillProgress
        v-for="(category, index) in skills"
        :key="index"
        :title="category.title"
        :skills="category.skills"
      />
    </section>

    <!-- Репозитории -->
    <section class="mb-8">
      <h1 class="display-5 text-center pt-10">Проекты</h1>
      <RepositoryList />
    </section>

    <!-- Контакты -->
    <section>
      <ContactInfo />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProfileCard from '~/components/main/Home.vue';
import SkillProgress from '~/components/skill/SkillProgress.vue';
import RepositoryList from '~/components/github/RepositoryList.vue';
import ContactInfo from '~/components/Info/ContactInfo.vue';
import skillsData from '~/data/skills.json';

// Подключение данных для навыков
const skills = ref({ ...skillsData });
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}
</style>
