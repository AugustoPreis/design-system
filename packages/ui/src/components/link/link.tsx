import { type AnchorHTMLAttributes,forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const linkVariants = cva(
  'inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
  {
    variants: {
      variant: {
        default: 'text-primary underline-offset-4 hover:underline',
        muted: 'text-muted-foreground underline-offset-4 hover:underline hover:text-foreground',
        unstyled: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  external?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, external = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <Comp
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        {...externalProps}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';

export { Link, linkVariants };
