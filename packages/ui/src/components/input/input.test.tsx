import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="Name" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts and displays typed value', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Name" />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });

  it('calls onChange on input', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input aria-label="Name" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is set', () => {
    render(<Input aria-label="Name" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('sets aria-invalid when error is true', () => {
    render(<Input aria-label="Name" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error styles when error is true', () => {
    render(<Input aria-label="Name" error />);
    expect(screen.getByRole('textbox')).toHaveClass('border-destructive');
  });

  it('associates with label via id', () => {
    render(
      <>
        <label htmlFor="name-input">Name</label>
        <Input id="name-input" />
      </>,
    );
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Input ref={ref} aria-label="Name" />);
    expect(ref.current).not.toBeNull();
  });
});
