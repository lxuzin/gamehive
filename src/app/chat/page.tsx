'use client';

import { useEffect, useState } from 'react';
import { useChatStore, startDummyMessages } from '@/store/chatStore';
import ChatMessage from '@/components/chat/ChatMessage';

export default function ChatPage() {
  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    startDummyMessages();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      addMessage({
        author: '나',
        content: newMessage.trim(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">실시간 채팅</h1>
      
      <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              author={message.author}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
            >
              전송
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
