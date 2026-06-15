import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Blockquote, Code, Kbd, Mark } from './inline-text';

describe('Code', () => {
  it('renderiza elemento code com o texto', () => {
    render(<Code>npm install</Code>);
    expect(screen.getByText('npm install')).toBeInTheDocument();
  });

  it('usa a tag code', () => {
    const { container } = render(<Code>texto</Code>);
    expect(container.querySelector('code')).toBeInTheDocument();
  });

  it('aplica classes padrão', () => {
    const { container } = render(<Code>texto</Code>);
    expect(container.querySelector('code')).toHaveClass('font-mono', 'bg-muted');
  });

  it('aplica className customizado', () => {
    const { container } = render(<Code className="text-red-500">texto</Code>);
    expect(container.querySelector('code')).toHaveClass('text-red-500');
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null as HTMLElement | null };
    render(<Code ref={ref}>ref test</Code>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('CODE');
  });
});

describe('Kbd', () => {
  it('renderiza elemento kbd com o texto', () => {
    render(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
  });

  it('usa a tag kbd', () => {
    const { container } = render(<Kbd>Enter</Kbd>);
    expect(container.querySelector('kbd')).toBeInTheDocument();
  });

  it('aplica classes padrão', () => {
    const { container } = render(<Kbd>Shift</Kbd>);
    expect(container.querySelector('kbd')).toHaveClass('font-mono', 'bg-muted');
  });

  it('aplica className customizado', () => {
    const { container } = render(<Kbd className="border-primary">Esc</Kbd>);
    expect(container.querySelector('kbd')).toHaveClass('border-primary');
  });
});

describe('Mark', () => {
  it('renderiza elemento mark com o texto', () => {
    render(<Mark>destaque</Mark>);
    expect(screen.getByText('destaque')).toBeInTheDocument();
  });

  it('usa a tag mark', () => {
    const { container } = render(<Mark>texto</Mark>);
    expect(container.querySelector('mark')).toBeInTheDocument();
  });

  it('aplica classes padrão', () => {
    const { container } = render(<Mark>texto</Mark>);
    expect(container.querySelector('mark')).toHaveClass('bg-warning/40');
  });

  it('aplica className customizado', () => {
    const { container } = render(<Mark className="rounded-lg">texto</Mark>);
    expect(container.querySelector('mark')).toHaveClass('rounded-lg');
  });
});

describe('Blockquote', () => {
  it('renderiza elemento blockquote com o texto', () => {
    render(<Blockquote>Uma citação importante</Blockquote>);
    expect(screen.getByText('Uma citação importante')).toBeInTheDocument();
  });

  it('usa a tag blockquote', () => {
    const { container } = render(<Blockquote>citação</Blockquote>);
    expect(container.querySelector('blockquote')).toBeInTheDocument();
  });

  it('aplica classes padrão de estilo', () => {
    const { container } = render(<Blockquote>citação</Blockquote>);
    expect(container.querySelector('blockquote')).toHaveClass('border-l-2', 'italic');
  });

  it('aplica className customizado', () => {
    const { container } = render(<Blockquote className="text-lg">citação</Blockquote>);
    expect(container.querySelector('blockquote')).toHaveClass('text-lg');
  });

  it('encaminha ref corretamente', () => {
    const ref = { current: null as HTMLQuoteElement | null };
    render(<Blockquote ref={ref}>ref test</Blockquote>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BLOCKQUOTE');
  });
});
