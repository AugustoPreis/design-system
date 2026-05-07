import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Tier 2/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: 'Enter your message...' },
};

export const Error: Story = {
  args: { error: true, placeholder: 'Invalid content' },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled textarea' },
};
