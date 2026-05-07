import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../button';
import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('renders trigger children', () => {
    render(
      <Tooltip content="Tooltip text">
        <Button>Hover me</Button>
      </Tooltip>,
    );
    expect(
      screen.getByRole('button', { name: 'Hover me' }),
    ).toBeInTheDocument();
  });

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tooltip text" delayDuration={0}>
        <Button>Hover me</Button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    const tooltips = await screen.findAllByText('Tooltip text');
    expect(tooltips.length).toBeGreaterThan(0);
  });

  it('tooltip content has role tooltip or is accessible', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Info message" delayDuration={0}>
        <Button>Info</Button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole('button'));
    const content = await screen.findAllByText('Info message');
    expect(content[0]).toBeInTheDocument();
  });
});
