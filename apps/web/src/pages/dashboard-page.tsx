import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header, Sidebar } from '../components/common';

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
