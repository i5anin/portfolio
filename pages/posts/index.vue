<template>
  <div>123
    <h1>Posts</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PostList from '@/components/PostList.vue';
import { usePostStore } from '@/store/posts';
import type { Post } from '@/types';

const postStore = usePostStore();
const posts = ref<Post[]>([]);

onMounted(async () => {
  await postStore.fetchPosts();
  posts.value = postStore.posts;
});
</script>
