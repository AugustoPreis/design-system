import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Tier 2/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="demo-input" className="text-sm font-medium">
        Email
      </label>
      <Input id="demo-input" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="space-y-2">
      <label
        htmlFor="error-input"
        className="text-sm font-medium text-destructive"
      >
        Email
      </label>
      <Input id="error-input" error placeholder="Invalid email" />
      <p className="text-xs text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled input', value: '' },
};
