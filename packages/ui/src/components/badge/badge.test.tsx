import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Badge data-testid="badge">New</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-primary');
  });

  it('applies destructive variant', () => {
    render(
      <Badge variant="destructive" data-testid="badge">
        Error
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-destructive');
  });

  it('applies outline variant', () => {
    render(
      <Badge variant="outline" data-testid="badge">
        Outline
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('text-foreground');
  });

  it('accepts className', () => {
    render(
      <Badge className="custom" data-testid="badge">
        Badge
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Badge ref={ref}>Badge</Badge>);
    expect(ref.current).not.toBeNull();
  });
});
