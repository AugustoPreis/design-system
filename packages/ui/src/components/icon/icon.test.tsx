import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from './icon';

describe('Icon', () => {
  it('renders icon by name', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies aria-hidden by default (no aria-label)', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('applies role=img and aria-label when aria-label is provided', () => {
    render(<Icon name="Check" aria-label="Confirmed" />);
    expect(screen.getByRole('img', { name: 'Confirmed' })).toBeInTheDocument();
  });

  it('does not apply aria-hidden when aria-label is present', () => {
    render(<Icon name="Check" aria-label="OK" />);
    const svg = screen.getByRole('img');
    expect(svg).not.toHaveAttribute('aria-hidden', 'true');
  });

  it('applies xs size (12px)', () => {
    const { container } = render(<Icon name="Check" size="xs" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '12');
  });

  it('applies md size (20px) by default', () => {
    const { container } = render(<Icon name="Check" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '20');
  });

  it('applies xl size (32px)', () => {
    const { container } = render(<Icon name="Check" size="xl" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '32');
  });

  it('accepts custom className', () => {
    const { container } = render(<Icon name="Check" className="custom" />);
    expect(container.querySelector('svg')).toHaveClass('custom');
  });

  it('returns null for invalid icon name', () => {
    // @ts-expect-error - testing invalid name intentionally
    const { container } = render(<Icon name="DoesNotExist" />);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('renders X icon', () => {
    const { container } = render(<Icon name="X" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders ChevronDown icon', () => {
    const { container } = render(<Icon name="ChevronDown" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
