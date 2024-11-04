<template>
  <div>
    <h1>Posts</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/store/posts';
import type { Post } from '@/types';

const postStore = usePostStore();
const posts = ref<Post[]>([]);

onMounted(async () => {
  await postStore.fetchPosts();
  posts.value = postStore.posts;
});
</script>
