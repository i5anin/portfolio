<template>
  <div class="home">
    <h1>Добро пожаловать!</h1>
    <p>Я очень крутой разработчик.</p>
    <div class="gallery">
      <img
        v-for="n in 8"
        :key="n"
        :src="`https://via.placeholder.com/300x200?text=Крутое+Фото+${n}`"
        alt="Крутое фото"
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.home {
  text-align: center;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.gallery img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
