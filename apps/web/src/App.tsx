import { queryClient } from '@/config/react-query';
import { router } from '@/pages';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC } from 'react';
import { RouterProvider } from 'react-router';

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
