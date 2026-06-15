import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { FormField } from '../form-field';
import { Input } from '../input';
import { Form } from './form';

const meta: Meta<typeof Form> = {
  title: 'Tier 2/Form',
  component: Form,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form
      className="flex flex-col gap-4 w-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormField label="Nome" htmlFor="nome">
        <Input id="nome" placeholder="Seu nome" />
      </FormField>
      <FormField label="Email" htmlFor="email">
        <Input id="email" type="email" placeholder="seu@email.com" />
      </FormField>
      <Button type="submit">Enviar</Button>
    </Form>
  ),
};

export const ComValidacao: Story = {
  render: () => (
    <Form
      className="flex flex-col gap-4 w-80"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <FormField
        label="Email"
        htmlFor="email-req"
        required
        error="Email inválido"
      >
        <Input id="email-req" type="email" error placeholder="seu@email.com" />
      </FormField>
      <Button type="submit">Enviar</Button>
    </Form>
  ),
};
