import { DashboardOverview } from '@/components/dashboard';
import { ProjectOverview } from '@/components/project';
import { DashboardPage, ProjectPage } from '@/pages';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <ProjectOverview />,
          },
          {
            path: ':projectId',
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);
