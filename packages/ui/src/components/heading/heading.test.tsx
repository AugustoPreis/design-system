import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Heading } from './heading';

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading data-testid="heading">Title</Heading>);
    expect(screen.getByTestId('heading').tagName).toBe('H2');
  });

  it('renders as h1 with level prop', () => {
    render(
      <Heading level="h1" data-testid="heading">
        Title
      </Heading>,
    );
    expect(screen.getByTestId('heading').tagName).toBe('H1');
  });

  it('renders as custom element with as prop', () => {
    render(
      <Heading as="h3" data-testid="heading">
        Title
      </Heading>,
    );
    expect(screen.getByTestId('heading').tagName).toBe('H3');
  });

  it('applies bold and tracking classes', () => {
    render(<Heading data-testid="heading">Title</Heading>);
    expect(screen.getByTestId('heading')).toHaveClass(
      'font-bold',
      'tracking-tight',
    );
  });

  it('accepts className', () => {
    render(
      <Heading className="custom" data-testid="heading">
        Title
      </Heading>,
    );
    expect(screen.getByTestId('heading')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Heading ref={ref}>Title</Heading>);
    expect(ref.current).not.toBeNull();
  });
});
