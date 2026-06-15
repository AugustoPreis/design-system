import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Image } from './image';

describe('Image', () => {
  it('renders img element with src and alt', () => {
    render(<Image src="/photo.jpg" alt="Description" />);
    const img = screen.getByRole('img', { name: 'Description' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/photo.jpg');
  });

  it('applies loading="lazy" by default', () => {
    render(<Image src="/photo.jpg" alt="Photo" data-testid="img" />);
    expect(screen.getByTestId('img')).toHaveAttribute('loading', 'lazy');
  });

  it('does not apply loading lazy when lazy=false', () => {
    render(
      <Image src="/photo.jpg" alt="Photo" lazy={false} data-testid="img" />,
    );
    expect(screen.getByTestId('img')).not.toHaveAttribute('loading');
  });

  it('explicit loading takes priority over lazy prop', () => {
    render(
      <Image
        src="/photo.jpg"
        alt="Photo"
        lazy={true}
        loading="eager"
        data-testid="img"
      />,
    );
    expect(screen.getByTestId('img')).toHaveAttribute('loading', 'eager');
  });

  it('applies rounded=full class', () => {
    render(
      <Image src="/photo.jpg" alt="Avatar" rounded="full" data-testid="img" />,
    );
    expect(screen.getByTestId('img')).toHaveClass('rounded-full');
  });

  it('applies rounded=md class', () => {
    render(
      <Image src="/photo.jpg" alt="Card" rounded="md" data-testid="img" />,
    );
    expect(screen.getByTestId('img')).toHaveClass('rounded-md');
  });

  it('applies object-fit=contain', () => {
    render(
      <Image
        src="/photo.jpg"
        alt="Photo"
        objectFit="contain"
        data-testid="img"
      />,
    );
    expect(screen.getByTestId('img')).toHaveClass('object-contain');
  });

  it('applies aspect-ratio 16/9', () => {
    render(
      <Image
        src="/photo.jpg"
        alt="Banner"
        aspectRatio="16/9"
        data-testid="img"
      />,
    );
    expect(screen.getByTestId('img')).toHaveClass('aspect-video');
  });

  it('applies aspect-ratio 1/1', () => {
    render(
      <Image
        src="/photo.jpg"
        alt="Square"
        aspectRatio="1/1"
        data-testid="img"
      />,
    );
    expect(screen.getByTestId('img')).toHaveClass('aspect-square');
  });

  it('renders child element when asChild=true', () => {
    render(
      <Image asChild>
        <picture>
          <img src="/photo.jpg" alt="Photo" />
        </picture>
      </Image>,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Image src="/photo.jpg" alt="Photo" ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('accepts custom className', () => {
    render(
      <Image
        src="/photo.jpg"
        alt="Photo"
        className="w-full"
        data-testid="img"
      />,
    );
    expect(screen.getByTestId('img')).toHaveClass('w-full');
  });
});
