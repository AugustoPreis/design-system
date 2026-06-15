import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Tier 1/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'muted', 'unstyled'] },
    external: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { href: '#', children: 'Default link' },
};

export const Muted: Story = {
  args: { href: '#', variant: 'muted', children: 'Muted link' },
};

export const Unstyled: Story = {
  args: { href: '#', variant: 'unstyled', children: 'Unstyled link' },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External link',
  },
};

export const AsChild: Story = {
  render: () => (
    <Link asChild>
      <button type="button">Button styled as link</button>
    </Link>
  ),
};
