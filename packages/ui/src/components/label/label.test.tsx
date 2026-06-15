import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './label';

describe('Label', () => {
  it('renderiza o texto filho', () => {
    render(<Label>Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associa ao input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>,
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('exibe asterisco quando required=true', () => {
    const { container } = render(<Label required>Nome</Label>);
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent('*');
  });

  it('não exibe asterisco quando required=false (padrão)', () => {
    const { container } = render(<Label>Nome</Label>);
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it('asterisco tem aria-hidden para não anunciar ao leitor de tela', () => {
    const { container } = render(<Label required>Nome</Label>);
    const asterisk = container.querySelector('span');
    expect(asterisk).toHaveAttribute('aria-hidden', 'true');
  });

  it('aplica classe text-sm font-medium por padrão', () => {
    render(<Label data-testid="label">Texto</Label>);
    expect(screen.getByTestId('label')).toHaveClass('text-sm', 'font-medium');
  });

  it('aceita className customizada', () => {
    render(<Label className="text-lg" data-testid="label">Texto</Label>);
    expect(screen.getByTestId('label')).toHaveClass('text-lg');
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null };
    render(<Label ref={ref}>Texto</Label>);
    expect(ref.current).not.toBeNull();
  });
});
