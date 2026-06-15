import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Blockquote, Code, Kbd, Mark } from './inline-text';

describe('Code', () => {
  it('renders code element with text', () => {
    render(<Code>npm install</Code>);
    expect(screen.getByText('npm install')).toBeInTheDocument();
  });

  it('uses the code tag', () => {
    const { container } = render(<Code>text</Code>);
    expect(container.querySelector('code')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<Code>text</Code>);
    expect(container.querySelector('code')).toHaveClass(
      'font-mono',
      'bg-muted',
    );
  });

  it('applies custom className', () => {
    const { container } = render(<Code className="text-red-500">text</Code>);
    expect(container.querySelector('code')).toHaveClass('text-red-500');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLElement | null };
    render(<Code ref={ref}>ref test</Code>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('CODE');
  });
});

describe('Kbd', () => {
  it('renders kbd element with text', () => {
    render(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
  });

  it('uses the kbd tag', () => {
    const { container } = render(<Kbd>Enter</Kbd>);
    expect(container.querySelector('kbd')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<Kbd>Shift</Kbd>);
    expect(container.querySelector('kbd')).toHaveClass('font-mono', 'bg-muted');
  });

  it('applies custom className', () => {
    const { container } = render(<Kbd className="border-primary">Esc</Kbd>);
    expect(container.querySelector('kbd')).toHaveClass('border-primary');
  });
});

describe('Mark', () => {
  it('renders mark element with text', () => {
    render(<Mark>highlight</Mark>);
    expect(screen.getByText('highlight')).toBeInTheDocument();
  });

  it('uses the mark tag', () => {
    const { container } = render(<Mark>text</Mark>);
    expect(container.querySelector('mark')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<Mark>text</Mark>);
    expect(container.querySelector('mark')).toHaveClass('bg-warning/40');
  });

  it('applies custom className', () => {
    const { container } = render(<Mark className="rounded-lg">text</Mark>);
    expect(container.querySelector('mark')).toHaveClass('rounded-lg');
  });
});

describe('Blockquote', () => {
  it('renders blockquote element with text', () => {
    render(<Blockquote>An important quote</Blockquote>);
    expect(screen.getByText('An important quote')).toBeInTheDocument();
  });

  it('uses the blockquote tag', () => {
    const { container } = render(<Blockquote>quote</Blockquote>);
    expect(container.querySelector('blockquote')).toBeInTheDocument();
  });

  it('applies default style classes', () => {
    const { container } = render(<Blockquote>quote</Blockquote>);
    expect(container.querySelector('blockquote')).toHaveClass(
      'border-l-2',
      'italic',
    );
  });

  it('applies custom className', () => {
    const { container } = render(
      <Blockquote className="text-lg">quote</Blockquote>,
    );
    expect(container.querySelector('blockquote')).toHaveClass('text-lg');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLQuoteElement | null };
    render(<Blockquote ref={ref}>ref test</Blockquote>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BLOCKQUOTE');
  });
});
