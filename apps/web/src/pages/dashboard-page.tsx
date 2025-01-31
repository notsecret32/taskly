import { Header, Sidebar } from '@/components/common';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const DashboardPage: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
