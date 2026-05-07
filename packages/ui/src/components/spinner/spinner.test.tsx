import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Spinner } from './spinner';

describe('Spinner', () => {
  it('renders with default label', () => {
    render(<Spinner />);
    expect(
      screen.getByRole('status', { name: 'Loading...' }),
    ).toBeInTheDocument();
  });

  it('renders with custom label', () => {
    render(<Spinner label="Saving..." />);
    expect(
      screen.getByRole('status', { name: 'Saving...' }),
    ).toBeInTheDocument();
  });

  it('applies size variant', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('h-8', 'w-8');
  });

  it('applies animate-spin class', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveClass('animate-spin');
  });

  it('accepts className', () => {
    render(<Spinner className="text-primary" />);
    expect(screen.getByRole('status')).toHaveClass('text-primary');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Spinner ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
