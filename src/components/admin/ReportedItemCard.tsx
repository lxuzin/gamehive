import { ReportedItem } from '@/types/admin';
import { format } from 'date-fns';

interface ReportedItemCardProps {
  item: ReportedItem;
  onStatusChange: (status: ReportedItem['status']) => void;
}

export default function ReportedItemCard({ item, onStatusChange }: ReportedItemCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <span className={`inline-block px-2 py-1 rounded text-sm ${
            item.type === 'post' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {item.type === 'post' ? '게시글' : '댓글'}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">신고 사유: {item.reason}</h3>
        </div>
        <span className={`px-2 py-1 rounded text-sm ${
          item.status === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : item.status === 'resolved'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {item.status === 'pending' ? '대기중' : item.status === 'resolved' ? '해결됨' : '거부됨'}
        </span>
      </div>
      
      <div className="mt-2 text-sm text-gray-500">
        <p>신고자: {item.reportedBy}</p>
        <p>신고일: {format(new Date(item.createdAt), 'yyyy.MM.dd HH:mm')}</p>
      </div>

      {item.status === 'pending' && (
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => onStatusChange('resolved')}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500"
          >
            승인
          </button>
          <button
            onClick={() => onStatusChange('rejected')}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
          >
            거부
          </button>
        </div>
      )}
    </div>
  );
}
