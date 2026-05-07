import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../input';
import { Textarea } from '../textarea';
import { FormField } from './form-field';

const meta: Meta<typeof FormField> = {
  title: 'Tier 2/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField label="Email address" htmlFor="email-field">
      <Input id="email-field" type="email" placeholder="you@example.com" />
    </FormField>
  ),
};

export const WithHint: Story = {
  render: () => (
    <FormField
      label="Password"
      htmlFor="pw-field"
      hint="Must be at least 8 characters"
    >
      <Input id="pw-field" type="password" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField
      label="Email address"
      htmlFor="email-error-field"
      error="Please enter a valid email address"
    >
      <Input
        id="email-error-field"
        type="email"
        error
        value="not-valid"
        onChange={() => {}}
      />
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField label="Full name" htmlFor="fullname-field" required>
      <Input id="fullname-field" placeholder="John Doe" />
    </FormField>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <FormField
      label="Description"
      htmlFor="desc-field"
      hint="Max 500 characters"
    >
      <Textarea id="desc-field" placeholder="Describe your project..." />
    </FormField>
  ),
};
