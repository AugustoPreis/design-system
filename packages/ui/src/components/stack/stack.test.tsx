import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Stack } from './stack';

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack>content</Stack>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('defaults to vertical flex', () => {
    render(<Stack data-testid="stack">content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('flex', 'flex-col');
  });

  it('applies horizontal direction', () => {
    render(
      <Stack direction="horizontal" data-testid="stack">
        content
      </Stack>,
    );
    expect(screen.getByTestId('stack')).toHaveClass('flex-row');
  });

  it('applies gap variant', () => {
    render(
      <Stack gap="lg" data-testid="stack">
        content
      </Stack>,
    );
    expect(screen.getByTestId('stack')).toHaveClass('gap-6');
  });

  it('accepts className', () => {
    render(
      <Stack className="custom" data-testid="stack">
        content
      </Stack>,
    );
    expect(screen.getByTestId('stack')).toHaveClass('custom');
  });

  it('composes multiple children', () => {
    render(
      <Stack data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>,
    );
    expect(screen.getByTestId('stack').children).toHaveLength(3);
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Stack ref={ref}>content</Stack>);
    expect(ref.current).not.toBeNull();
  });
});
