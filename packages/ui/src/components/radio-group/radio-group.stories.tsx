import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'Tier 2/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-a">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-a" id="r-a" />
        <label htmlFor="r-a" className="text-sm font-medium">
          Option A
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-b" id="r-b" />
        <label htmlFor="r-b" className="text-sm font-medium">
          Option B
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-c" id="r-c" />
        <label htmlFor="r-c" className="text-sm font-medium">
          Option C
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-a">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-a" id="rd-a" disabled />
        <label
          htmlFor="rd-a"
          className="text-sm font-medium text-muted-foreground"
        >
          Disabled A
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-b" id="rd-b" disabled />
        <label
          htmlFor="rd-b"
          className="text-sm font-medium text-muted-foreground"
        >
          Disabled B
        </label>
      </div>
    </RadioGroup>
  ),
};
