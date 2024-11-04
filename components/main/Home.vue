<template>
  <div class="home">
    <div class="overlay"></div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* затемнение фона */
  z-index: 1;
}

.card {
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  z-index: 2;
}

.profile-photo {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.info {
  text-align: left;
  flex: 1;
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
