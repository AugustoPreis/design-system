import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast';

const ToastDemo = ({
  variant,
  open = true,
  onOpenChange,
}: {
  variant?: 'default' | 'destructive' | 'success';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => (
  <ToastProvider>
    <Toast open={open} onOpenChange={onOpenChange} variant={variant}>
      <div>
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>Toast Description</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
    <ToastViewport />
  </ToastProvider>
);

describe('Toast', () => {
  it('renders toast title when open', () => {
    render(<ToastDemo />);
    expect(screen.getByText('Toast Title')).toBeInTheDocument();
  });

  it('renders toast description when open', () => {
    render(<ToastDemo />);
    expect(screen.getByText('Toast Description')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<ToastDemo open={false} />);
    expect(screen.queryByText('Toast Title')).not.toBeInTheDocument();
  });

  it('applies destructive variant', () => {
    render(<ToastDemo variant="destructive" />);
    const toastEl = screen.getByText('Toast Title').closest('[data-state]');
    expect(toastEl).toHaveClass('bg-destructive');
  });
});
