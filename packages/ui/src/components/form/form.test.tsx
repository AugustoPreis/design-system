import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Form } from './form';

describe('Form', () => {
  it('renders <form> tag', () => {
    const { container } = render(<Form />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('calls onSubmit when submitted', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <Form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </Form>,
    );
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('accepts noValidate', () => {
    const { container } = render(<Form noValidate />);
    expect(container.querySelector('form')).toHaveAttribute('novalidate');
  });

  it('accepts action and method', () => {
    const { container } = render(<Form action="/api/submit" method="post" />);
    const form = container.querySelector('form');
    expect(form).toHaveAttribute('action', '/api/submit');
    expect(form).toHaveAttribute('method', 'post');
  });

  it('accepts custom className', () => {
    const { container } = render(<Form className="flex flex-col gap-4" />);
    expect(container.querySelector('form')).toHaveClass(
      'flex',
      'flex-col',
      'gap-4',
    );
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Form ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('renders children', () => {
    render(
      <Form>
        <input type="text" placeholder="Name" />
      </Form>,
    );
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
