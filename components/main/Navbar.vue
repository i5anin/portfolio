<!-- components/HeaderNav.vue -->
<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item"><a href="#profile" class="nav-link">Профиль</a></li>
        <li class="nav-item"><a href="#skills" class="nav-link">Навыки</a></li>
        <li class="nav-item"><a href="#projects" class="nav-link">Проекты</a></li>
        <li class="nav-item"><a href="#contact" class="nav-link">Контакты</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Для этого компонента логика не требуется
</script>

<style scoped>
.header {
  position: absolute; /* Абсолютное позиционирование, чтобы не двигаться при прокрутке */
  top: 0;
  width: 100%;
  z-index: 3;
  padding: 1rem;
  display: flex;
  justify-content: center; /* Выравнивание шапки по центру */
}

.nav-list {
  display: flex;
  justify-content: center; /* Выравнивание элементов по центру */
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #ddd;
}
</style>
