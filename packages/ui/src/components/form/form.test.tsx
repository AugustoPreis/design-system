import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Form } from './form';

describe('Form', () => {
  it('renderiza tag <form>', () => {
    const { container } = render(<Form />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('chama onSubmit ao submeter', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <Form onSubmit={onSubmit}>
        <button type="submit">Enviar</button>
      </Form>,
    );
    await user.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('aceita noValidate', () => {
    const { container } = render(<Form noValidate />);
    expect(container.querySelector('form')).toHaveAttribute('novalidate');
  });

  it('aceita action e method', () => {
    const { container } = render(<Form action="/api/submit" method="post" />);
    const form = container.querySelector('form');
    expect(form).toHaveAttribute('action', '/api/submit');
    expect(form).toHaveAttribute('method', 'post');
  });

  it('aceita className customizada', () => {
    const { container } = render(<Form className="flex flex-col gap-4" />);
    expect(container.querySelector('form')).toHaveClass('flex', 'flex-col', 'gap-4');
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null };
    render(<Form ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('renderiza children', () => {
    render(
      <Form>
        <input type="text" placeholder="Nome" />
      </Form>,
    );
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
  });
});
