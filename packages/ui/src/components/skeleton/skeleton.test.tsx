import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders with status role', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has aria-busy attribute', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
  });

  it('applies animate-pulse class', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toHaveClass('animate-pulse');
  });

  it('accepts className for sizing', () => {
    render(<Skeleton className="h-4 w-32" />);
    expect(screen.getByRole('status')).toHaveClass('h-4', 'w-32');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Skeleton ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
