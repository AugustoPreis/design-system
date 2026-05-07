import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from './grid';

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid>content</Grid>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies grid class by default', () => {
    render(<Grid data-testid="grid">content</Grid>);
    expect(screen.getByTestId('grid')).toHaveClass('grid');
  });

  it('applies cols variant', () => {
    render(
      <Grid cols={3} data-testid="grid">
        content
      </Grid>,
    );
    expect(screen.getByTestId('grid')).toHaveClass('grid-cols-3');
  });

  it('applies gap variant', () => {
    render(
      <Grid gap="lg" data-testid="grid">
        content
      </Grid>,
    );
    expect(screen.getByTestId('grid')).toHaveClass('gap-6');
  });

  it('accepts className', () => {
    render(
      <Grid className="custom" data-testid="grid">
        content
      </Grid>,
    );
    expect(screen.getByTestId('grid')).toHaveClass('custom');
  });

  it('composes children', () => {
    render(
      <Grid cols={2} data-testid="grid">
        <div>Col 1</div>
        <div>Col 2</div>
      </Grid>,
    );
    expect(screen.getByTestId('grid').children).toHaveLength(2);
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Grid ref={ref}>content</Grid>);
    expect(ref.current).not.toBeNull();
  });
});
