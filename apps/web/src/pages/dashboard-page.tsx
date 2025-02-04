import { fetchProjects } from '@/api';
import { LoadingSpinner, Sidebar } from '@/components/common';
import { DashboardLayout } from '@/components/layout';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const DashboardPage: FC = () => {
  const {
    data: projects,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 10, // 10 min
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error... check console</div>;
  }

  return (
    <DashboardLayout>
      <Sidebar projects={projects} />
      <Outlet />
    </DashboardLayout>
  );
};
