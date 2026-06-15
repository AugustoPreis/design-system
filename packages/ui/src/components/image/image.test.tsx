import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Image } from './image';

describe('Image', () => {
  it('renderiza elemento img com src e alt', () => {
    render(<Image src="/foto.jpg" alt="Descrição" />);
    const img = screen.getByRole('img', { name: 'Descrição' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/foto.jpg');
  });

  it('aplica loading="lazy" por padrão', () => {
    render(<Image src="/foto.jpg" alt="Foto" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveAttribute('loading', 'lazy');
  });

  it('não aplica loading lazy quando lazy=false', () => {
    render(<Image src="/foto.jpg" alt="Foto" lazy={false} data-testid="img" />);
    expect(screen.getByTestId('img')).not.toHaveAttribute('loading');
  });

  it('loading explícito tem prioridade sobre lazy prop', () => {
    render(<Image src="/foto.jpg" alt="Foto" lazy={true} loading="eager" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveAttribute('loading', 'eager');
  });

  it('aplica classe de arredondamento rounded=full', () => {
    render(<Image src="/foto.jpg" alt="Avatar" rounded="full" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('rounded-full');
  });

  it('aplica classe de arredondamento rounded=md', () => {
    render(<Image src="/foto.jpg" alt="Card" rounded="md" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('rounded-md');
  });

  it('aplica object-fit=contain', () => {
    render(<Image src="/foto.jpg" alt="Foto" objectFit="contain" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('object-contain');
  });

  it('aplica aspect-ratio 16/9', () => {
    render(<Image src="/foto.jpg" alt="Banner" aspectRatio="16/9" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('aspect-video');
  });

  it('aplica aspect-ratio 1/1', () => {
    render(<Image src="/foto.jpg" alt="Quadrado" aspectRatio="1/1" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('aspect-square');
  });

  it('renderiza elemento filho quando asChild=true', () => {
    render(
      <Image asChild>
        <picture>
          <img src="/foto.jpg" alt="Foto" />
        </picture>
      </Image>,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null };
    render(<Image src="/foto.jpg" alt="Foto" ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('aceita className customizada', () => {
    render(<Image src="/foto.jpg" alt="Foto" className="w-full" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveClass('w-full');
  });
});
