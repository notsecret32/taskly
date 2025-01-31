import { router } from '@/pages';
import { FC } from 'react';
import { RouterProvider } from 'react-router';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
