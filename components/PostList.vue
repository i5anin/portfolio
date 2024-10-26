<template>
  <div>
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/store/posts';
const postStore = usePostStore();
const posts = postStore.posts;
</script>
