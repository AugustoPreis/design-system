import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-md border bg-card p-4 text-card-foreground shadow-md outline-none animate-fade-in',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
};
