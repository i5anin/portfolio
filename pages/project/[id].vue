<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <CommentList :comments="comments" />
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/store/posts';
import { onMounted } from 'vue';
const store = usePostStore();
const route = useRoute();

onMounted(() => {
  store.fetchComments(route.params.id);
});
</script>
