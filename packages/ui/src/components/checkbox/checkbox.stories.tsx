import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Tier 2/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="default-cb" />
      <label htmlFor="default-cb" className="text-sm font-medium">
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="checked-cb" defaultChecked />
      <label htmlFor="checked-cb" className="text-sm font-medium">
        Already accepted
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled-cb" disabled />
      <label
        htmlFor="disabled-cb"
        className="text-sm font-medium text-muted-foreground"
      >
        Disabled option
      </label>
    </div>
  ),
};
