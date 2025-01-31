import { DashboardPage, ProjectPage } from '@/pages';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        children: [
          {
            path: ':projectId',
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);
