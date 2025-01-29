import { forwardRef, HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => (
    <button ref={ref} {...rest}>
      {children}
    </button>
  )
);
