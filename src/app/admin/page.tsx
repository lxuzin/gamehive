'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '@/store/adminStore';
import ReportedItemCard from '@/components/admin/ReportedItemCard';

export default function AdminPage() {
  const router = useRouter();
  const { isAdmin, reportedItems, updateReportStatus } = useAdminStore();

  useEffect(() => {
    if (!isAdmin) {
      router.push('/admin/login');
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null;
  }

  const pendingItems = reportedItems.filter((item) => item.status === 'pending');
  const resolvedItems = reportedItems.filter((item) => item.status === 'resolved');
  const rejectedItems = reportedItems.filter((item) => item.status === 'rejected');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">관리자 페이지</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            대기 중인 신고 ({pendingItems.length})
          </h2>
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <ReportedItemCard
                key={item.id}
                item={item}
                onStatusChange={(status) => updateReportStatus(item.id, status)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            처리된 신고 ({resolvedItems.length + rejectedItems.length})
          </h2>
          <div className="space-y-4">
            {[...resolvedItems, ...rejectedItems].map((item) => (
              <ReportedItemCard
                key={item.id}
                item={item}
                onStatusChange={(status) => updateReportStatus(item.id, status)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
