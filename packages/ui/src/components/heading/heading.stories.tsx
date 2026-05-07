import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Tier 1/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { children: 'Page Title', level: 'h2' },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
      <Heading level="h5">Heading 5</Heading>
      <Heading level="h6">Heading 6</Heading>
    </div>
  ),
};
