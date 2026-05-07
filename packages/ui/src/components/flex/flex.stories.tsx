import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './flex';

const meta: Meta<typeof Flex> = {
  title: 'Tier 0/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'col', 'row-reverse', 'col-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: { direction: 'row', gap: 'sm' },
  render: (args) => (
    <Flex {...args}>
      <div className="bg-primary text-primary-foreground p-2 rounded">A</div>
      <div className="bg-secondary text-secondary-foreground p-2 rounded">
        B
      </div>
      <div className="bg-muted text-muted-foreground p-2 rounded">C</div>
    </Flex>
  ),
};

export const Column: Story = {
  args: { direction: 'col', gap: 'sm' },
  render: (args) => (
    <Flex {...args}>
      <div className="bg-primary text-primary-foreground p-2 rounded">A</div>
      <div className="bg-secondary text-secondary-foreground p-2 rounded">
        B
      </div>
      <div className="bg-muted text-muted-foreground p-2 rounded">C</div>
    </Flex>
  ),
};

export const Centered: Story = {
  args: { align: 'center', justify: 'center', gap: 'md' },
  render: (args) => (
    <Flex {...args} className="h-32 bg-muted rounded">
      <div className="bg-primary text-primary-foreground p-2 rounded">
        Centered
      </div>
    </Flex>
  ),
};
