import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './switch';

describe('Switch', () => {
  it('renders a switch', () => {
    render(<Switch aria-label="Enable notifications" />);
    expect(
      screen.getByRole('switch', { name: 'Enable notifications' }),
    ).toBeInTheDocument();
  });

  it('is off by default', () => {
    render(<Switch aria-label="Enable" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'data-state',
      'unchecked',
    );
  });

  it('calls onCheckedChange when clicked', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Enable" onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('is keyboard accessible via Space', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Enable" onCheckedChange={onCheckedChange} />);
    screen.getByRole('switch').focus();
    await user.keyboard(' ');
    expect(onCheckedChange).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is set', () => {
    render(<Switch aria-label="Enable" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('associates with label via id', () => {
    render(
      <>
        <label htmlFor="sw-notifications">Notifications</label>
        <Switch id="sw-notifications" />
      </>,
    );
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
  });
});
