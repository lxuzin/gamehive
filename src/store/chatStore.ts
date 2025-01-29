import { create } from 'zustand';

interface ChatMessage {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

interface ChatStore {
  messages: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
}

const dummyUsers = ['용사1', '마법사2', '궁수3', '힐러4', '탱커5'];
const dummyMessages = [
  '안녕하세요!',
  '오늘 레이드 가실 분?',
  '신규 이벤트 너무 좋네요',
  '길드원 구합니다',
  '아이템 거래하실 분?',
];

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substr(2, 9),
          ...message,
          timestamp: new Date().toISOString(),
        },
      ],
    })),
}));

// 더미 메시지 자동 생성
export function startDummyMessages() {
  setInterval(() => {
    const randomUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
    const randomMessage = dummyMessages[Math.floor(Math.random() * dummyMessages.length)];
    
    useChatStore.getState().addMessage({
      author: randomUser,
      content: randomMessage,
    });
  }, 5000);
}
