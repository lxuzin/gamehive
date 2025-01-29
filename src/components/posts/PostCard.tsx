import { Post } from '@/types';
import { format } from 'date-fns';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-600">
          {post.title}
        </h2>
      </Link>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <span>{format(new Date(post.createdAt), 'yyyy.MM.dd')}</span>
        <span className="mx-2">•</span>
        <span>{post.category}</span>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-gray-600">
          💬 {post.comments.length}
        </span>
        <span className="mx-2">•</span>
        <span className="text-gray-600">
          ❤️ {post.likes}
        </span>
      </div>
    </div>
  );
}
