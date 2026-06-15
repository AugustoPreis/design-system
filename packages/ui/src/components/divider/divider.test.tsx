import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divider } from './divider';

describe('Divider', () => {
  it('renders hr element', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('is horizontal by default', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toHaveClass('h-px', 'w-full');
  });

  it('applies vertical classes when orientation=vertical', () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.querySelector('hr')).toHaveClass('h-full', 'w-px');
  });

  it('is decorative by default (role=none)', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toHaveAttribute('role', 'none');
  });

  it('has role=separator when decorative=false', () => {
    render(<Divider decorative={false} />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('has aria-orientation=horizontal when decorative=false', () => {
    render(<Divider decorative={false} orientation="horizontal" />);
    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
  });

  it('has aria-orientation=vertical when decorative=false and vertical', () => {
    render(<Divider decorative={false} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'vertical',
    );
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Divider ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('accepts custom className', () => {
    const { container } = render(<Divider className="my-8" />);
    expect(container.querySelector('hr')).toHaveClass('my-8');
  });
});
