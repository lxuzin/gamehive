'use client';

import { usePostStore } from '@/store/postStore';
import PostDetail from '@/components/posts/PostDetail';
import { useParams } from 'next/navigation';

export default function PostPage() {
  const params = useParams();
  const postId = params.id as string;
  const { posts, likePost } = usePostStore();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <PostDetail post={post} onLike={() => likePost(postId)} />
    </div>
  );
}
