import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import {
  PopoverClose,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from './popover';

const meta: Meta<typeof PopoverContent> = {
  title: 'Components/Popover',
  component: PopoverContent,
};

export default meta;
type Story = StoryObj<typeof PopoverContent>;

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">
          This is a simple popover with informative content.
        </p>
      </PopoverContent>
    </PopoverRoot>
  ),
};

export const WithForm: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile</h4>
            <p className="text-sm text-muted-foreground">
              Update your information.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue="John Smith"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                defaultValue="john@example.com"
                className="col-span-2"
              />
            </div>
          </div>
          <PopoverClose asChild>
            <Button size="sm">Save</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
};
