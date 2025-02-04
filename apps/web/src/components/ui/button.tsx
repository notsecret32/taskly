import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'px-4 py-[10px] cursor-pointer rounded-lg',
  variants: {
    variant: {
      primary: 'bg-icon-secondary text-background-primary shadow-sm',
      secondary: 'bg-background-primary shadow-sm',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = ButtonVariants & ComponentProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...rest }, ref) => (
    <button className={cn(button({ variant }), className)} ref={ref} {...rest}>
      {children}
    </button>
  )
);
