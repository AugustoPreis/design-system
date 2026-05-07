import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Text } from './text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    render(<Text data-testid="text">Hello</Text>);
    expect(screen.getByTestId('text').tagName).toBe('P');
  });

  it('renders as span with as prop', () => {
    render(
      <Text as="span" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text').tagName).toBe('SPAN');
  });

  it('applies size variant', () => {
    render(
      <Text size="lg" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveClass('text-lg');
  });

  it('applies weight variant', () => {
    render(
      <Text weight="bold" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveClass('font-bold');
  });

  it('applies tone variant', () => {
    render(
      <Text tone="muted" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveClass('text-muted-foreground');
  });

  it('accepts color as alias for tone', () => {
    render(
      <Text color="muted" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveClass('text-muted-foreground');
  });

  it('accepts className', () => {
    render(
      <Text className="custom" data-testid="text">
        Hello
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Text ref={ref}>Hello</Text>);
    expect(ref.current).not.toBeNull();
  });
});
