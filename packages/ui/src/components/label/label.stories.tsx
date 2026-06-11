import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Tier 2/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: 'Nome completo', htmlFor: 'nome' },
};

export const Required: Story = {
  args: { children: 'Email', htmlFor: 'email', required: true },
};

export const AssociadoAInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label htmlFor="campo" required>
        Email
      </Label>
      <input id="campo" type="email" className="border rounded px-2 py-1" />
    </div>
  ),
};
