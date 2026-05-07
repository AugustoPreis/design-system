import { forwardRef, type HTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold tracking-tight text-foreground', {
  variants: {
    level: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
  },
  defaultVariants: {
    level: 'h2',
  },
});

export interface HeadingProps
  extends
    HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, ...props }, ref) => {
    const Tag = as ?? level ?? 'h2';
    return (
      <Tag
        ref={ref}
        className={cn(
          headingVariants({ level: level ?? (as as typeof level) }),
          className,
        )}
        {...props}
      />
    );
  },
);

Heading.displayName = 'Heading';

export { Heading };
