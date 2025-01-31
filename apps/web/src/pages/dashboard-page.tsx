import { Header, Sidebar } from '@/components/common';
import { DashboardLayout } from '@/components/dashboard';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const DashboardPage: FC = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </DashboardLayout>
  );
};
