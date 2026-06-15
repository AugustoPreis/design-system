import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './label';

describe('Label', () => {
  it('renders child text', () => {
    render(<Label>Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associates input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>,
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows asterisk when required=true', () => {
    const { container } = render(<Label required>Name</Label>);
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent(
      '*',
    );
  });

  it('does not show asterisk when required=false (default)', () => {
    const { container } = render(<Label>Name</Label>);
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it('asterisk has aria-hidden to not announce to screen reader', () => {
    const { container } = render(<Label required>Name</Label>);
    const asterisk = container.querySelector('span');
    expect(asterisk).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies text-sm font-medium class by default', () => {
    render(<Label data-testid="label">Text</Label>);
    expect(screen.getByTestId('label')).toHaveClass('text-sm', 'font-medium');
  });

  it('accepts custom className', () => {
    render(
      <Label className="text-lg" data-testid="label">
        Text
      </Label>,
    );
    expect(screen.getByTestId('label')).toHaveClass('text-lg');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Label ref={ref}>Text</Label>);
    expect(ref.current).not.toBeNull();
  });
});
