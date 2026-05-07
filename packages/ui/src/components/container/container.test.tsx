import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from './container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>content</Container>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies centering classes by default', () => {
    render(<Container data-testid="container">content</Container>);
    const el = screen.getByTestId('container');
    expect(el).toHaveClass('mx-auto', 'w-full');
  });

  it('applies max-width variant', () => {
    render(
      <Container maxWidth="lg" data-testid="container">
        content
      </Container>,
    );
    expect(screen.getByTestId('container')).toHaveClass('max-w-screen-lg');
  });

  it('accepts className', () => {
    render(
      <Container className="custom" data-testid="container">
        content
      </Container>,
    );
    expect(screen.getByTestId('container')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Container ref={ref}>content</Container>);
    expect(ref.current).not.toBeNull();
  });
});
