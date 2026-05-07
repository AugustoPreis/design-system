import React, { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Tag = 'div', className, ...props }, ref) => {
    const Component = Tag as 'div';
    return <Component ref={ref} className={cn(className)} {...props} />;
  },
);

Box.displayName = 'Box';

export { Box };
