import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
  title: 'Tier 0/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Item = ({ label }: { label: string }) => (
  <div className="bg-muted text-muted-foreground p-3 rounded">{label}</div>
);

export const Vertical: Story = {
  args: { direction: 'vertical', gap: 'md' },
  render: (args) => (
    <Stack {...args}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: { direction: 'horizontal', gap: 'md' },
  render: (args) => (
    <Stack {...args}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
};
