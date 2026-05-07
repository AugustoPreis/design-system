import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast';

const meta: Meta = {
  title: 'Tier 3/Toast',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ToastDemo = ({
  variant,
}: {
  variant?: 'default' | 'destructive' | 'success';
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast open={open} onOpenChange={setOpen} variant={variant}>
        <div className="flex-1">
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>
            Your action was completed successfully.
          </ToastDescription>
        </div>
        <ToastAction altText="Undo action">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Destructive: Story = {
  render: () => <ToastDemo variant="destructive" />,
};

export const Success: Story = {
  render: () => <ToastDemo variant="success" />,
};
