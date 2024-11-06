<template>
  <div class="container mx-auto p-4">
    <section class="contact-info mt-8">
      <h1 class="display-4 text-center pt-10">Навыки</h1>
      <ul>
        <li v-for="(item, index) in contact" :key="index">
          <span>{{ item.title }}: </span>
          <a :href="getContactLink(item)" target="_blank">{{ item.value }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import contact from '~/data/contact.json';

// Функция для создания ссылки (mailto для Email и прямая ссылка для других)
const getContactLink = (item) => {
  return item.title === "Email" ? `mailto:${item.value}` : item.value;
};
</script>

<style scoped>
.contact-info ul {
  list-style-type: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 8px;
}

.contact-info a {
  color: #3b82f6;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
