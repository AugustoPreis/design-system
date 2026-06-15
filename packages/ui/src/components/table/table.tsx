import {
  forwardRef,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

export type TableProps = HTMLAttributes<HTMLTableElement>;
export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
  ),
);
TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  ),
);
TableBody.displayName = 'TableBody';

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn('border-t bg-muted/50 font-medium', className)}
      {...props}
    />
  ),
);
TableFooter.displayName = 'TableFooter';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = 'TableRow';

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope = 'col', ...props }, ref) => (
    <th
      ref={ref}
      scope={scope}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = 'TableHead';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('p-4 align-middle', className)} {...props} />
  ),
);
TableCell.displayName = 'TableCell';

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  ),
);
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
