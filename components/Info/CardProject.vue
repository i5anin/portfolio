<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" class="photo-card">
      <img :src="photo.url" :alt="photo.alt" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  photos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.photo-card {
  width: 300px;
}

.photo-card img {
  width: 100%;
  border-radius: 8px;
}
</style>
