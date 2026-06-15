import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

function renderTable() {
  return render(
    <Table>
      <TableCaption>User list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>john@email.com</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total: 1</TableCell>
        </TableRow>
      </TableFooter>
    </Table>,
  );
}

describe('Table', () => {
  it('renders full structure', () => {
    const { container } = renderTable();
    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelector('tfoot')).toBeInTheDocument();
  });

  it('Table has horizontal scroll wrapper', () => {
    const { container } = renderTable();
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('overflow-auto');
  });

  it('TableHead has scope=col by default', () => {
    const { container } = renderTable();
    const ths = container.querySelectorAll('th');
    ths.forEach((th) => expect(th).toHaveAttribute('scope', 'col'));
  });

  it('TableCaption renders caption', () => {
    renderTable();
    expect(screen.getByText('User list')).toBeInTheDocument();
  });

  it('TableRow has hover state', () => {
    const { container } = renderTable();
    const rows = container.querySelectorAll('tr');
    rows.forEach((row) => expect(row).toHaveClass('hover:bg-muted/50'));
  });

  it('TableCell renders data', () => {
    renderTable();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('john@email.com')).toBeInTheDocument();
  });

  it('accepts className in all sub-components', () => {
    const { container } = render(
      <Table className="custom-table">
        <TableBody>
          <TableRow className="custom-row">
            <TableCell className="custom-cell">X</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(container.querySelector('table')).toHaveClass('custom-table');
    expect(container.querySelector('tr')).toHaveClass('custom-row');
    expect(container.querySelector('td')).toHaveClass('custom-cell');
  });

  it('forwards ref in Table', () => {
    const ref = { current: null };
    render(
      <Table ref={ref}>
        <TableBody>
          <TableRow>
            <TableCell>X</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(ref.current).not.toBeNull();
  });
});
