import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={decorative ? undefined : orientation}
        className={cn(
          'shrink-0 border-border',
          orientation === 'horizontal' ? 'h-px w-full border-t' : 'h-full w-px border-l',
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';

export { Divider };
