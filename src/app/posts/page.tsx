'use client';

import { usePostStore } from '@/store/postStore';
import PostCard from '@/components/posts/PostCard';

export default function PostsPage() {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">게시판</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
          글쓰기
        </button>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
