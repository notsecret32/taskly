import { cn } from '@/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-background-secondary flex flex-col gap-3 rounded-lg p-5 shadow-sm',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
);
