import { forwardRef, type HTMLAttributes, useId } from 'react';

import { cn } from '@/lib/utils';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
}

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { className, label, hint, error, required, htmlFor, children, ...props },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = htmlFor ?? generatedId;
    const hintId = `${fieldId}-hint`;
    const errorId = `${fieldId}-error`;

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5', className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={fieldId}
            className={cn(
              'text-sm font-medium leading-none',
              error ? 'text-destructive' : 'text-foreground',
            )}
          >
            {label}
            {required && (
              <span aria-hidden="true" className="ml-1 text-destructive">
                *
              </span>
            )}
          </label>
        )}

        <div
          aria-describedby={
            [hint ? hintId : null, error ? errorId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
        >
          {children}
        </div>

        {hint && !error && (
          <p id={hintId} className="text-xs text-muted-foreground">
            {hint}
          </p>
        )}

        {error && (
          <p id={errorId} role="alert" className="text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormField.displayName = 'FormField';

export { FormField };
