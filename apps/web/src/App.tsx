import { FC } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './pages';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
