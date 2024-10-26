<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <button @click="likePost">Like {{ post.likes }}</button>
    <button @click="deletePost">Delete</button>
  </div>
</template>

<script setup lang="ts">
defineProps({ post: Object });
const likePost = () => { /* логика лайка поста */ };
const deletePost = () => { /* логика удаления поста */ };
</script>
