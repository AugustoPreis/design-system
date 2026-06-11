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
      <TableCaption>Lista de usuários</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>João</TableCell>
          <TableCell>joao@email.com</TableCell>
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
  it('renderiza estrutura completa', () => {
    const { container } = renderTable();
    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelector('tfoot')).toBeInTheDocument();
  });

  it('Table tem wrapper de scroll horizontal', () => {
    const { container } = renderTable();
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('overflow-auto');
  });

  it('TableHead tem scope=col por padrão', () => {
    const { container } = renderTable();
    const ths = container.querySelectorAll('th');
    ths.forEach((th) => expect(th).toHaveAttribute('scope', 'col'));
  });

  it('TableCaption renderiza legenda', () => {
    renderTable();
    expect(screen.getByText('Lista de usuários')).toBeInTheDocument();
  });

  it('TableRow tem hover state', () => {
    const { container } = renderTable();
    const rows = container.querySelectorAll('tr');
    rows.forEach((row) => expect(row).toHaveClass('hover:bg-muted/50'));
  });

  it('TableCell renderiza dados', () => {
    renderTable();
    expect(screen.getByText('João')).toBeInTheDocument();
    expect(screen.getByText('joao@email.com')).toBeInTheDocument();
  });

  it('aceita className em todos os sub-componentes', () => {
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

  it('encaminha ref em Table', () => {
    const ref = { current: null };
    render(<Table ref={ref}><TableBody><TableRow><TableCell>X</TableCell></TableRow></TableBody></Table>);
    expect(ref.current).not.toBeNull();
  });
});
