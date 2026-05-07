import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

const DrawerDemo = ({ defaultOpen = false }: { defaultOpen?: boolean }) => (
  <DrawerRoot defaultOpen={defaultOpen}>
    <DrawerTrigger asChild>
      <button>Open Drawer</button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerTitle>Drawer Title</DrawerTitle>
      <DrawerDescription>Drawer description text.</DrawerDescription>
      <DrawerClose asChild>
        <button>Close</button>
      </DrawerClose>
    </DrawerContent>
  </DrawerRoot>
);

describe('Drawer', () => {
  it('renders trigger button', () => {
    render(<DrawerDemo />);
    expect(
      screen.getByRole('button', { name: 'Open Drawer' }),
    ).toBeInTheDocument();
  });

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DrawerDemo />);
    await user.click(screen.getByRole('button', { name: 'Open Drawer' }));
    expect(await screen.findByText('Drawer Title')).toBeInTheDocument();
  });

  it('renders title and description when open', async () => {
    render(<DrawerDemo defaultOpen />);
    expect(await screen.findByText('Drawer Title')).toBeInTheDocument();
    expect(screen.getByText('Drawer description text.')).toBeInTheDocument();
  });

  it('close button is present when open', async () => {
    render(<DrawerDemo defaultOpen />);
    await screen.findByText('Drawer Title');
    // Vaul uses pointer capture for drag-to-close which jsdom cannot fully simulate;
    // verify the close control is accessible and present.
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });
});
