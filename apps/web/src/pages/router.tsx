import { createBrowserRouter, Navigate } from 'react-router';
import { DashboardPage } from './dashboard-page';
import { ProjectPage } from './project-page';

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
