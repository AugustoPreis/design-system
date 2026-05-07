import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './box';

const meta: Meta<typeof Box> = {
  title: 'Tier 0/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box className="bg-muted p-4 rounded">
      <p>Box content</p>
    </Box>
  ),
};

export const Composed: Story = {
  render: () => (
    <Box className="space-y-2">
      <Box className="bg-primary text-primary-foreground p-2 rounded">
        First
      </Box>
      <Box className="bg-secondary text-secondary-foreground p-2 rounded">
        Second
      </Box>
    </Box>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" className="border p-4 rounded">
      <p>Rendered as section element</p>
    </Box>
  ),
};
