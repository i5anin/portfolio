<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo">Мой Сайт</NuxtLink>
    <ul class="nav-links">
      <li><NuxtLink to="/">Главная</NuxtLink></li>
      <li><NuxtLink to="/resume">Резюме</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
// Логика не требуется
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-accent);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: var(--color-text);
}

.nav-links a:hover {
  color: var(--color-secondary);
}
</style>
