import { LoaderCircle } from 'lucide-react';
import { FC } from 'react';

export const LoadingSpinner: FC = () => {
  return (
    <LoaderCircle className="text-icon-secondary animate-spin" size={48} />
  );
};
