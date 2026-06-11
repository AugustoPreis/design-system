import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../button';
import { PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger } from './popover';

function TestPopover({ defaultOpen }: { defaultOpen?: boolean }) {
  return (
    <PopoverRoot defaultOpen={defaultOpen}>
      <PopoverTrigger asChild>
        <Button>Abrir</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Conteúdo do popover</p>
        <PopoverClose asChild>
          <Button variant="outline" size="sm">Fechar</Button>
        </PopoverClose>
      </PopoverContent>
    </PopoverRoot>
  );
}

describe('Popover', () => {
  it('não exibe conteúdo por padrão', () => {
    render(<TestPopover />);
    expect(screen.queryByText('Conteúdo do popover')).toBeNull();
  });

  it('exibe conteúdo ao clicar no trigger', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }));
    await waitFor(() => {
      expect(screen.getByText('Conteúdo do popover')).toBeInTheDocument();
    });
  });

  it('fecha ao clicar no PopoverClose', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }));
    await waitFor(() => expect(screen.getByText('Conteúdo do popover')).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    await waitFor(() => {
      expect(screen.queryByText('Conteúdo do popover')).toBeNull();
    });
  });

  it('fecha ao pressionar Escape', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir' }));
    await waitFor(() => expect(screen.getByText('Conteúdo do popover')).toBeInTheDocument());
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(screen.queryByText('Conteúdo do popover')).toBeNull();
    });
  });

  it('renderiza aberto quando defaultOpen=true', async () => {
    render(<TestPopover defaultOpen />);
    await waitFor(() => {
      expect(screen.getByText('Conteúdo do popover')).toBeInTheDocument();
    });
  });

  it('aplica className customizado ao PopoverContent', async () => {
    render(
      <PopoverRoot defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent className="minha-classe-custom">
          <p>Conteúdo</p>
        </PopoverContent>
      </PopoverRoot>,
    );
    await waitFor(() => {
      const content = screen.getByText('Conteúdo').parentElement;
      expect(content).toHaveClass('minha-classe-custom');
    });
  });
});
