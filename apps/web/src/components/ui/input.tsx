import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...rest }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'placeholder:text-title-secondary w-full rounded-lg border px-4 py-3 font-medium leading-5 shadow-sm placeholder:font-normal focus:outline-none',
          className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);
