import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../button';
import {
  PopoverClose,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from './popover';

function TestPopover({ defaultOpen }: { defaultOpen?: boolean }) {
  return (
    <PopoverRoot defaultOpen={defaultOpen}>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
        <PopoverClose asChild>
          <Button variant="outline" size="sm">
            Close
          </Button>
        </PopoverClose>
      </PopoverContent>
    </PopoverRoot>
  );
}

describe('Popover', () => {
  it('does not show content by default', () => {
    render(<TestPopover />);
    expect(screen.queryByText('Popover content')).toBeNull();
  });

  it('shows content when trigger is clicked', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('closes when PopoverClose is clicked', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() =>
      expect(screen.getByText('Popover content')).toBeInTheDocument(),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByText('Popover content')).toBeNull();
    });
  });

  it('closes when Escape is pressed', async () => {
    render(<TestPopover />);
    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    await waitFor(() =>
      expect(screen.getByText('Popover content')).toBeInTheDocument(),
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(screen.queryByText('Popover content')).toBeNull();
    });
  });

  it('renders open when defaultOpen=true', async () => {
    render(<TestPopover defaultOpen />);
    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('applies custom className to PopoverContent', async () => {
    render(
      <PopoverRoot defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent className="my-custom-class">
          <p>Content</p>
        </PopoverContent>
      </PopoverRoot>,
    );
    await waitFor(() => {
      const content = screen.getByText('Content').parentElement;
      expect(content).toHaveClass('my-custom-class');
    });
  });
});
