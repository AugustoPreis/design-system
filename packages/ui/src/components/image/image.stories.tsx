import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './image';

const meta: Meta<typeof Image> = {
  title: 'Tier 1/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    aspectRatio: {
      control: 'select',
      options: ['1/1', '4/3', '16/9', '3/2', '2/1', 'auto'],
    },
    lazy: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Image>;

const PLACEHOLDER = 'https://placehold.co/600x400';

export const Default: Story = {
  args: { src: PLACEHOLDER, alt: 'Example image', className: 'w-64' },
};

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      {(['none', 'sm', 'md', 'lg', 'xl', 'full'] as const).map((r) => (
        <Image
          key={r}
          src={PLACEHOLDER}
          alt={r}
          rounded={r}
          className="w-24 h-24"
        />
      ))}
    </div>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      {(['1/1', '4/3', '16/9'] as const).map((ratio) => (
        <Image key={ratio} src={PLACEHOLDER} alt={ratio} aspectRatio={ratio} />
      ))}
    </div>
  ),
};

export const Avatar: Story = {
  args: {
    src: PLACEHOLDER,
    alt: 'Profile picture',
    rounded: 'full',
    className: 'w-16 h-16',
    objectFit: 'cover',
  },
};
