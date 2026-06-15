import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Tier 0/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    decorative: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span>Esquerda</span>
      <Divider orientation="vertical" />
      <span>Direita</span>
    </div>
  ),
};

export const EntreConteudo: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <p>Seção acima</p>
      <Divider />
      <p>Seção abaixo</p>
    </div>
  ),
};
