import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divider } from './divider';

describe('Divider', () => {
  it('renderiza elemento hr', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('é horizontal por padrão', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toHaveClass('h-px', 'w-full');
  });

  it('aplica classes verticais quando orientation=vertical', () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.querySelector('hr')).toHaveClass('h-full', 'w-px');
  });

  it('é decorativo por padrão (role=none)', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toHaveAttribute('role', 'none');
  });

  it('tem role=separator quando decorative=false', () => {
    render(<Divider decorative={false} />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('tem aria-orientation=horizontal quando decorative=false', () => {
    render(<Divider decorative={false} orientation="horizontal" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('tem aria-orientation=vertical quando decorative=false e vertical', () => {
    render(<Divider decorative={false} orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null };
    render(<Divider ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('aceita className customizada', () => {
    const { container } = render(<Divider className="my-8" />);
    expect(container.querySelector('hr')).toHaveClass('my-8');
  });
});
