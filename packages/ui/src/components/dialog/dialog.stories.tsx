import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { FormField } from '../form-field';
import { Input } from '../input';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const meta: Meta = {
  title: 'Tier 3/Dialog',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete account</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const WithForm: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <FormField label="Name" htmlFor="dialog-name">
            <Input id="dialog-name" placeholder="John Doe" />
          </FormField>
          <FormField label="Email" htmlFor="dialog-email">
            <Input
              id="dialog-email"
              type="email"
              placeholder="john@example.com"
            />
          </FormField>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};
