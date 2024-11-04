<template>
  <div class="container mx-auto p-4">
    <!-- Контактная информация -->
    <section class="contact-info mt-8">
      <h2 class="text-xl font-bold mb-2">Контактная информация</h2>
      <ul>
        <li v-if="contact.email">Email: <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
        <li v-if="contact.linkedin">LinkedIn: <a :href="contact.linkedin" target="_blank">{{ contact.linkedin }}</a></li>
        <li v-if="contact.github">GitHub: <a :href="contact.github" target="_blank">{{ contact.github }}</a></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import rawContactData from '~/data/contact.json';

// Извлекаем первый элемент массива, чтобы использовать его без индекса
const contact = rawContactData[0];
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
