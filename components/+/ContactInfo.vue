<template>
  <section class="contact-info">
    <h2>Контактная информация</h2>
    <ul>
      <li>
        <strong>Телефон:</strong>
        <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
        (<a :href="`https://t.me/${contact.telegram.slice(1)}`" target="_blank">Telegram {{ contact.telegram }}</a>)
      </li>
      <li>
        <strong>Email:</strong>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </li>
      <li>
        <strong>GitHub:</strong>
        <a :href="`https://${contact.github}`" target="_blank">{{ contact.github }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.contact-info h2 {
  color: var(--color-secondary);
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 0.5rem;
}
</style>
