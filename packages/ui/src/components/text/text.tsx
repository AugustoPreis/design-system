import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      destructive: 'text-destructive',
      success: 'text-success',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    tone: 'default',
    align: 'left',
  },
});

type Tag = 'p' | 'span' | 'div' | 'label' | 'small' | 'strong' | 'em';

export interface TextProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: Tag;
  color?: VariantProps<typeof textVariants>['tone'];
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { className, size, weight, tone, color, align, as: Tag = 'p', ...props },
    ref,
  ) => {
    const resolvedTone = tone ?? color;
    return React.createElement(Tag, {
      ref,
      className: cn(
        textVariants({ size, weight, tone: resolvedTone, align }),
        className,
      ),
      ...props,
    });
  },
);

Text.displayName = 'Text';

export { Text };
