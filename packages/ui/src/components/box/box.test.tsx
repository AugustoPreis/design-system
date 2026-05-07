import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from './box';

describe('Box', () => {
  it('renders children', () => {
    render(<Box>content</Box>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('accepts className', () => {
    render(<Box className="custom-class">content</Box>);
    expect(screen.getByText('content')).toHaveClass('custom-class');
  });

  it('renders as different element with as prop', () => {
    render(
      <Box as="section" data-testid="box">
        content
      </Box>,
    );
    expect(screen.getByTestId('box').tagName).toBe('SECTION');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Box ref={ref}>content</Box>);
    expect(ref.current).not.toBeNull();
  });

  it('composes children', () => {
    render(
      <Box data-testid="parent">
        <Box data-testid="child">inner</Box>
      </Box>,
    );
    expect(screen.getByTestId('parent')).toContainElement(
      screen.getByTestId('child'),
    );
  });
});
