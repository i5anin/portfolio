import { defineStore } from 'pinia';
import type { Post, Comment } from '@/types';

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [] as Post[],
        comments: {} as Record<number, Comment[]>,
    }),
    actions: {
        async fetchPosts() {
            const response = await fetch('https://dummyjson.com/posts');
            this.posts = await response.json();
        },
        async fetchComments(postId: number) {
            const response = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
            this.comments[postId] = await response.json();
        },
    },
});
