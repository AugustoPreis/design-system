import { forwardRef, type HTMLAttributes, type LiHTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const listVariants = cva('', {
  variants: {
    gap: {
      none: '',
      xs: 'space-y-1',
      sm: 'space-y-2',
      md: 'space-y-4',
    },
  },
  defaultVariants: {
    gap: 'none',
  },
});

export interface ListProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  unstyled?: boolean;
}

export interface OrderedListProps
  extends HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof listVariants> {
  unstyled?: boolean;
}

export type ListItemProps = LiHTMLAttributes<HTMLLIElement>;

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, gap, unstyled = false, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        listVariants({ gap }),
        !unstyled && 'list-disc pl-5',
        unstyled && 'list-none',
        className,
      )}
      {...props}
    />
  ),
);
List.displayName = 'List';

const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ className, gap, unstyled = false, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        listVariants({ gap }),
        !unstyled && 'list-decimal pl-5',
        unstyled && 'list-none',
        className,
      )}
      {...props}
    />
  ),
);
OrderedList.displayName = 'OrderedList';

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn(className)} {...props} />
  ),
);
ListItem.displayName = 'ListItem';

export { List, ListItem, OrderedList };
