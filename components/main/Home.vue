<template>
  <div class="home">
    <div class="card" v-if="profile">
      <img
        class="profile-photo"
        src="https://avatars.githubusercontent.com/u/92434473?v=4"
        alt="Фото профиля"
      />
      <div class="info">
        <h2>{{ profile.name }}</h2>
        <p class="title">{{ profile.title }}</p>
        <p class="description">{{ profile.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import profileData from '~/data/about.json';

const profile = ref(null);

onMounted(() => {
  profile.value = profileData;
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.card {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.info {
  text-align: left;
}

h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.title {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}

.description {
  font-size: 14px;
  color: #333;
}
</style>
