<template>
  <div class="p-4 bg-white shadow rounded-lg mb-4">
    <h2 class="text-xl font-semibold text-gray-800">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>
    <div class="mt-4">
      <button @click="likePost" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Like {{ post.likes }}
      </button>
      <button @click="deletePost" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({ post: Object });
const likePost = () => { /* логика лайка поста */ };
const deletePost = () => { /* логика удаления поста */ };
</script>
