import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReportedItem, AdminState } from '@/types/admin';

interface AdminStore extends AdminState {
  reportedItems: ReportedItem[];
  login: () => void;
  logout: () => void;
  addReport: (report: Omit<ReportedItem, 'id' | 'createdAt' | 'status'>) => void;
  updateReportStatus: (reportId: string, status: ReportedItem['status']) => void;
}

// 초기 더미 데이터
const initialReportedItems: ReportedItem[] = [
  {
    id: '1',
    type: 'post',
    targetId: '1',
    reason: '부적절한 내용',
    reportedBy: 'user123',
    createdAt: '2025-01-29T00:00:00Z',
    status: 'pending'
  },
  {
    id: '2',
    type: 'comment',
    targetId: '1',
    reason: '스팸',
    reportedBy: 'user456',
    createdAt: '2025-01-29T01:00:00Z',
    status: 'pending'
  }
];

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      isAdmin: false,
      reportedItems: initialReportedItems,
      login: () => set({ isAdmin: true }),
      logout: () => set({ isAdmin: false }),
      addReport: (report) =>
        set((state) => ({
          reportedItems: [
            ...state.reportedItems,
            {
              ...report,
              id: Math.random().toString(36).substr(2, 9),
              createdAt: new Date().toISOString(),
              status: 'pending',
            },
          ],
        })),
      updateReportStatus: (reportId, status) =>
        set((state) => ({
          reportedItems: state.reportedItems.map((item) =>
            item.id === reportId ? { ...item, status } : item
          ),
        })),
    }),
    {
      name: 'admin-storage',
    }
  )
);
