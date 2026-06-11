import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './link';

describe('Link', () => {
  it('renderiza o texto filho', () => {
    render(<Link href="/test">Clique aqui</Link>);
    expect(screen.getByRole('link', { name: 'Clique aqui' })).toBeInTheDocument();
  });

  it('renderiza com href correto', () => {
    render(<Link href="/sobre">Sobre</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/sobre');
  });

  it('adiciona target e rel quando external=true', () => {
    render(<Link href="https://externo.com" external>Externo</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('não adiciona target/rel quando external=false', () => {
    render(<Link href="/interno">Interno</Link>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('aplica classe de variante default', () => {
    render(<Link href="/" data-testid="link">Home</Link>);
    expect(screen.getByTestId('link')).toHaveClass('text-primary');
  });

  it('aplica classe de variante muted', () => {
    render(<Link href="/" variant="muted" data-testid="link">Home</Link>);
    expect(screen.getByTestId('link')).toHaveClass('text-muted-foreground');
  });

  it('renderiza como elemento filho quando asChild=true', () => {
    render(
      <Link asChild>
        <button type="button">Botão como link</button>
      </Link>,
    );
    expect(screen.getByRole('button', { name: 'Botão como link' })).toBeInTheDocument();
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null };
    render(<Link href="/" ref={ref}>Link</Link>);
    expect(ref.current).not.toBeNull();
  });

  it('aceita className customizada', () => {
    render(<Link href="/" className="custom-class" data-testid="link">Link</Link>);
    expect(screen.getByTestId('link')).toHaveClass('custom-class');
  });

  it('external com target manual não duplica atributos', () => {
    render(
      <Link href="https://x.com" external target="_self" data-testid="link">
        Link
      </Link>,
    );
    expect(screen.getByTestId('link')).toHaveAttribute('target', '_self');
  });
});
