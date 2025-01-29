import { create } from 'zustand';
import { Post, Comment } from '@/types';
import postsData from '@/data/posts.json';

interface PostStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, comment: Comment) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: postsData.posts,
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      ),
    })),
}));
