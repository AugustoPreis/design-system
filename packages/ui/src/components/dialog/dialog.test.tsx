import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const DialogDemo = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <DialogRoot defaultOpen={defaultOpen}>
    <DialogTrigger asChild>
      <button>Open Dialog</button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text.</DialogDescription>
      <DialogClose asChild>
        <button>Cancel</button>
      </DialogClose>
    </DialogContent>
  </DialogRoot>
);

describe('Dialog', () => {
  it('renders trigger button', () => {
    render(<DialogDemo />);
    expect(
      screen.getByRole('button', { name: 'Open Dialog' }),
    ).toBeInTheDocument();
  });

  it('is closed by default', () => {
    render(<DialogDemo />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('renders title when open', async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    expect(await screen.findByText('Dialog Title')).toBeInTheDocument();
  });

  it('closes when Cancel button is clicked', async () => {
    const user = userEvent.setup();
    render(<DialogDemo defaultOpen />);
    await screen.findByRole('dialog');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    render(<DialogDemo defaultOpen />);
    await screen.findByRole('dialog');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('traps focus when open', async () => {
    const user = userEvent.setup();
    render(<DialogDemo />);
    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    const closeButton = screen.getByRole('button', { name: 'Cancel' });
    expect(document.activeElement).toBeTruthy();
    expect(dialog).toContainElement(closeButton);
  });
});
