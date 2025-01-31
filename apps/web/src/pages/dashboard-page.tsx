import { Sidebar } from '@/components/common';
import { DashboardLayout } from '@/components/layout';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const DashboardPage: FC = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <Outlet />
    </DashboardLayout>
  );
};
