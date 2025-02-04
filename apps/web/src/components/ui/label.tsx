import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

export const Label = forwardRef<HTMLLabelElement, ComponentProps<'label'>>(
  ({ className, ...rest }, ref) => (
    <label className={cn('', className)} ref={ref} {...rest} />
  )
);
