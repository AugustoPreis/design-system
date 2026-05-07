import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './container';

const meta: Meta<typeof Container> = {
  title: 'Tier 0/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: { maxWidth: 'xl' },
  render: (args) => (
    <Container {...args} className="bg-muted py-8">
      <p>Container content — maxWidth: {args.maxWidth}</p>
    </Container>
  ),
};

export const Small: Story = {
  args: { maxWidth: 'sm' },
  render: (args) => (
    <Container {...args} className="bg-muted py-8">
      <p>Small container</p>
    </Container>
  ),
};
