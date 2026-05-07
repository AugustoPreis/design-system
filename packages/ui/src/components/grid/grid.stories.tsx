import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './grid';

const meta: Meta<typeof Grid> = {
  title: 'Tier 0/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    cols: { control: 'select', options: [1, 2, 3, 4, 6, 12] },
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Cell = ({ label }: { label: string }) => (
  <div className="bg-muted text-muted-foreground p-4 rounded text-center">
    {label}
  </div>
);

export const TwoColumns: Story = {
  args: { cols: 2, gap: 'md' },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 4 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  args: { cols: 3, gap: 'md' },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};
