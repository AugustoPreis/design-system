import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from '../input';
import { FormField } from './form-field';

describe('FormField', () => {
  it('renders label', () => {
    render(
      <FormField label="Name" htmlFor="name">
        <Input id="name" />
      </FormField>,
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('associates label with control via htmlFor', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <Input id="email" type="email" />
      </FormField>,
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders hint text', () => {
    render(
      <FormField label="Name" htmlFor="name" hint="Enter your full name">
        <Input id="name" />
      </FormField>,
    );
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('renders error message with alert role', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Invalid email address">
        <Input id="email" />
      </FormField>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Invalid email address',
    );
  });

  it('does not render hint when error is present', () => {
    render(
      <FormField
        label="Email"
        htmlFor="email"
        hint="We'll never share your email"
        error="Invalid email"
      >
        <Input id="email" />
      </FormField>,
    );
    expect(
      screen.queryByText("We'll never share your email"),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });

  it('renders required indicator when required is true', () => {
    render(
      <FormField label="Name" htmlFor="name" required>
        <Input id="name" />
      </FormField>,
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('applies error style to label when error is present', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Required">
        <Input id="email" />
      </FormField>,
    );
    expect(screen.getByText('Email')).toHaveClass('text-destructive');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(
      <FormField ref={ref} label="Name" htmlFor="name">
        <Input id="name" />
      </FormField>,
    );
    expect(ref.current).not.toBeNull();
  });
});
