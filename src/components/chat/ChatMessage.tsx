import { format } from 'date-fns';

interface ChatMessageProps {
  author: string;
  content: string;
  timestamp: string;
}

export default function ChatMessage({ author, content, timestamp }: ChatMessageProps) {
  return (
    <div className="p-2 hover:bg-gray-50">
      <div className="flex items-baseline space-x-2">
        <span className="font-medium text-gray-900">{author}</span>
        <span className="text-xs text-gray-500">
          {format(new Date(timestamp), 'HH:mm')}
        </span>
      </div>
      <p className="mt-1 text-gray-700">{content}</p>
    </div>
  );
}
