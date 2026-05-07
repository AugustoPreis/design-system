import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Tier 2/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="sw-default" />
      <label htmlFor="sw-default" className="text-sm font-medium">
        Enable notifications
      </label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="sw-checked" defaultChecked />
      <label htmlFor="sw-checked" className="text-sm font-medium">
        Already enabled
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="sw-disabled" disabled />
      <label
        htmlFor="sw-disabled"
        className="text-sm font-medium text-muted-foreground"
      >
        Disabled
      </label>
    </div>
  ),
};
