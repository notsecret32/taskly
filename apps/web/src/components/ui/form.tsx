import { forwardRef, HTMLAttributes } from 'react';

type FormProps = HTMLAttributes<HTMLFormElement>;

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, ...rest }, ref) => (
    <form ref={ref} {...rest}>
      {children}
    </form>
  )
);
