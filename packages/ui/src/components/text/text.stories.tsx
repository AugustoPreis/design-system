import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Tier 1/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'destructive', 'success'],
    },
    align: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
};

export const Muted: Story = {
  args: {
    children: 'Muted text for secondary information.',
    color: 'muted',
    size: 'sm',
  },
};

export const Bold: Story = {
  args: { children: 'Bold important text.', weight: 'bold' },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Text size="xs">Extra Small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium (default)</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra Large</Text>
    </div>
  ),
};
