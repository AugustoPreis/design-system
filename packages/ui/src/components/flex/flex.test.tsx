import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Flex } from './flex';

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>content</Flex>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies flex class by default', () => {
    render(<Flex data-testid="flex">content</Flex>);
    expect(screen.getByTestId('flex')).toHaveClass('flex');
  });

  it('accepts className', () => {
    render(
      <Flex className="custom" data-testid="flex">
        content
      </Flex>,
    );
    expect(screen.getByTestId('flex')).toHaveClass('custom');
  });

  it('applies direction variant', () => {
    render(
      <Flex direction="col" data-testid="flex">
        content
      </Flex>,
    );
    expect(screen.getByTestId('flex')).toHaveClass('flex-col');
  });

  it('applies gap variant', () => {
    render(
      <Flex gap="md" data-testid="flex">
        content
      </Flex>,
    );
    expect(screen.getByTestId('flex')).toHaveClass('gap-4');
  });

  it('composes children', () => {
    render(
      <Flex data-testid="parent" gap="sm">
        <div data-testid="child1">a</div>
        <div data-testid="child2">b</div>
      </Flex>,
    );
    expect(screen.getByTestId('parent')).toContainElement(
      screen.getByTestId('child1'),
    );
    expect(screen.getByTestId('parent')).toContainElement(
      screen.getByTestId('child2'),
    );
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Flex ref={ref}>content</Flex>);
    expect(ref.current).not.toBeNull();
  });
});
