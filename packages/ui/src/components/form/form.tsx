import { type FormHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={cn(className)} {...props} />
  ),
);

Form.displayName = 'Form';

export { Form };
