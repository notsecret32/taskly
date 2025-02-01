import { cn } from '@/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface TableProps
  extends Omit<HTMLAttributes<HTMLTableElement>, 'children'> {
  children: React.ReactNode;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...rest }, ref) => (
    <table
      ref={ref}
      className={cn(
        'bg-background-secondary w-full border-separate border-spacing-0 rounded-lg border shadow-sm',
        className
      )}
      {...rest}
    >
      {children}
    </table>
  )
);

interface TableHeaderProps
  extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children: React.ReactNode;
}

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...rest }, ref) => (
    <thead
      ref={ref}
      className={cn('bg-background-primary', className)}
      {...rest}
    >
      {children}
    </thead>
  )
);

interface TableBodyProps
  extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children: React.ReactNode;
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...rest }, ref) => (
    <tbody ref={ref} className={cn(className)} {...rest}>
      {children}
    </tbody>
  )
);

interface TableFooterProps
  extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'children'> {
  children: React.ReactNode;
}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, children, ...rest }, ref) => (
    <tfoot ref={ref} className={cn(className)} {...rest}>
      {children}
    </tfoot>
  )
);

interface TableHeadProps
  extends Omit<HTMLAttributes<HTMLTableCellElement>, 'children'> {
  children: React.ReactNode;
}

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, children, ...rest }, ref) => (
    <th
      ref={ref}
      className={cn(
        'text-title-secondary hover:text-title-primary border-b border-t px-5 py-3 text-left uppercase',
        className
      )}
      {...rest}
    >
      {children}
    </th>
  )
);

interface TableRowProps
  extends Omit<HTMLAttributes<HTMLTableRowElement>, 'children'> {
  children: React.ReactNode;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...rest }, ref) => (
    <tr
      ref={ref}
      className={cn('hover:bg-background-primary cursor-pointer', className)}
      {...rest}
    >
      {children}
    </tr>
  )
);

interface TableCellProps
  extends Omit<HTMLAttributes<HTMLTableCellElement>, 'children'> {
  children: React.ReactNode;
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...rest }, ref) => (
    <td
      ref={ref}
      className={cn('border-b border-t px-5 py-3', className)}
      {...rest}
    >
      {children}
    </td>
  )
);

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
