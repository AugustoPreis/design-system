import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type CodeProps = HTMLAttributes<HTMLElement>;

const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...props}
    />
  ),
);
Code.displayName = 'Code';

type KbdProps = HTMLAttributes<HTMLElement>;

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
);
Kbd.displayName = 'Kbd';

type MarkProps = HTMLAttributes<HTMLElement>;

const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ className, ...props }, ref) => (
    <mark
      ref={ref}
      className={cn(
        'rounded bg-warning/40 px-0.5 text-warning-foreground',
        className,
      )}
      {...props}
    />
  ),
);
Mark.displayName = 'Mark';

type BlockquoteProps = HTMLAttributes<HTMLQuoteElement>;

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        'mt-6 border-l-2 border-border pl-6 italic text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
);
Blockquote.displayName = 'Blockquote';

export {
  Blockquote,
  type BlockquoteProps,
  Code,
  type CodeProps,
  Kbd,
  type KbdProps,
  Mark,
  type MarkProps,
};
