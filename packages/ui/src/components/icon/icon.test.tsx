import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from './icon';

describe('Icon', () => {
  it('renderiza o ícone pelo nome', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('aplica aria-hidden por padrão (sem aria-label)', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('aplica role=img e aria-label quando aria-label é fornecido', () => {
    render(<Icon name="Check" aria-label="Confirmado" />);
    expect(screen.getByRole('img', { name: 'Confirmado' })).toBeInTheDocument();
  });

  it('não aplica aria-hidden quando aria-label está presente', () => {
    render(<Icon name="Check" aria-label="OK" />);
    const svg = screen.getByRole('img');
    expect(svg).not.toHaveAttribute('aria-hidden', 'true');
  });

  it('aplica tamanho xs (12px)', () => {
    const { container } = render(<Icon name="Check" size="xs" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '12');
  });

  it('aplica tamanho md (20px) por padrão', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '20');
  });

  it('aplica tamanho xl (32px)', () => {
    const { container } = render(<Icon name="Check" size="xl" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '32');
  });

  it('aceita className customizada', () => {
    const { container } = render(<Icon name="Check" className="custom" />);
    expect(container.querySelector('svg')).toHaveClass('custom');
  });

  it('retorna null para nome de ícone inválido', () => {
    // @ts-expect-error - testando nome inválido propositalmente
    const { container } = render(<Icon name="NaoExiste" />);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('renderiza ícone X', () => {
    const { container } = render(<Icon name="X" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renderiza ícone ChevronDown', () => {
    const { container } = render(<Icon name="ChevronDown" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
