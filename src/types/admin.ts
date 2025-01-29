export interface ReportedItem {
  id: string;
  type: 'post' | 'comment';
  targetId: string;
  reason: string;
  reportedBy: string;
  createdAt: string;
  status: 'pending' | 'resolved' | 'rejected';
}

export interface AdminState {
  isAdmin: boolean;
}
