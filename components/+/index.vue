<template>
  <section class="home">
    <h1>Добро пожаловать!</h1>
    <p>Я очень крутой разработчик.</p>
    <PhotoGallery :photos="photos" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import PhotoGallery from '~/components/PhotoGallery.vue';

const photos = ref(
  Array.from({ length: 12 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/id/${i + 100}/300/200`,
    alt: `Фото ${i + 1}`,
  }))
);
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.home h1 {
  color: var(--color-primary);
}
</style>
