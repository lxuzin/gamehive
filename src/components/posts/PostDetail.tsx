import { Post } from '@/types';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useAdminStore } from '@/store/adminStore';

interface PostDetailProps {
  post: Post;
  onLike: () => void;
}

export default function PostDetail({ post, onLike }: PostDetailProps) {
  const addReport = useAdminStore((state) => state.addReport);

  const handleReport = () => {
    if (window.confirm('이 게시글을 신고하시겠습니까?')) {
      addReport({
        type: 'post',
        targetId: post.id,
        reason: '부적절한 내용',
        reportedBy: '익명',
      });
      alert('신고가 접수되었습니다.');
    }
  };

  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <button
          onClick={handleReport}
          className="text-red-600 hover:text-red-500 text-sm"
        >
          신고하기
        </button>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <span>{post.author}</span>
        <span className="mx-2">•</span>
        <span>{format(new Date(post.createdAt), 'yyyy.MM.dd HH:mm')}</span>
        <span className="mx-2">•</span>
        <span>{post.category}</span>
      </div>
      <div className="mt-8 prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <button
          onClick={onLike}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500"
        >
          <span>❤️</span>
          <span>{post.likes}</span>
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">댓글 {post.comments.length}개</h2>
        <div className="space-y-4">
          {post.comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between items-start">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{comment.author}</span>
                  <span className="mx-2">•</span>
                  <span>{format(new Date(comment.createdAt), 'yyyy.MM.dd HH:mm')}</span>
                </div>
                <button
                  onClick={() => {
                    if (window.confirm('이 댓글을 신고하시겠습니까?')) {
                      addReport({
                        type: 'comment',
                        targetId: comment.id,
                        reason: '부적절한 내용',
                        reportedBy: '익명',
                      });
                      alert('신고가 접수되었습니다.');
                    }
                  }}
                  className="text-red-600 hover:text-red-500 text-sm"
                >
                  신고하기
                </button>
              </div>
              <p className="mt-2 text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
