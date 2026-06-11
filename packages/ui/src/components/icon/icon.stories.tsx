import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Tier 1/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    color: {
      control: 'select',
      options: ['inherit', 'muted', 'primary', 'destructive', 'success', 'warning'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { name: 'Star', size: 'md', color: 'inherit' },
};

export const Tamanhos: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Icon key={s} name="Star" size={s} />
      ))}
    </div>
  ),
};

export const Cores: Story = {
  render: () => (
    <div className="flex gap-4">
      {(['inherit', 'muted', 'primary', 'destructive', 'success', 'warning'] as const).map((c) => (
        <Icon key={c} name="Heart" size="lg" color={c} />
      ))}
    </div>
  ),
};

export const Semantico: Story = {
  args: { name: 'Check', size: 'md', 'aria-label': 'Confirmado' },
};

export const IconesComuns: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['Check', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
        'Search', 'Settings', 'User', 'Home', 'Menu', 'Plus', 'Minus', 'Edit',
        'Trash2', 'Download', 'Upload', 'ExternalLink', 'Copy', 'Eye'] as const).map((name) => (
        <div key={name} className="flex flex-col items-center gap-1 text-xs">
          <Icon name={name} size="md" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
