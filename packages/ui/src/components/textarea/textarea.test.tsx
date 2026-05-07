import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea aria-label="Message" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('accepts typed value', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" />);
    await user.type(screen.getByRole('textbox'), 'hello world');
    expect(screen.getByRole('textbox')).toHaveValue('hello world');
  });

  it('calls onChange on input', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea aria-label="Message" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is set', () => {
    render(<Textarea aria-label="Message" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('sets aria-invalid when error is true', () => {
    render(<Textarea aria-label="Message" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('associates with label via id', () => {
    render(
      <>
        <label htmlFor="msg">Message</label>
        <Textarea id="msg" />
      </>,
    );
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Textarea ref={ref} aria-label="Message" />);
    expect(ref.current).not.toBeNull();
  });
});
