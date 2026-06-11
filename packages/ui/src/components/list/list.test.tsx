import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { List, ListItem, OrderedList } from './list';

describe('List', () => {
  it('renderiza tag <ul>', () => {
    const { container } = render(<List><ListItem>Item</ListItem></List>);
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('renderiza itens como <li>', () => {
    render(
      <List>
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
      </List>,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('aplica list-disc por padrão (não unstyled)', () => {
    const { container } = render(<List><ListItem>X</ListItem></List>);
    expect(container.querySelector('ul')).toHaveClass('list-disc');
  });

  it('aplica list-none quando unstyled=true', () => {
    const { container } = render(<List unstyled><ListItem>X</ListItem></List>);
    expect(container.querySelector('ul')).toHaveClass('list-none');
    expect(container.querySelector('ul')).not.toHaveClass('list-disc');
  });

  it('aplica gap=sm (space-y-2)', () => {
    const { container } = render(
      <List gap="sm"><ListItem>X</ListItem></List>,
    );
    expect(container.querySelector('ul')).toHaveClass('space-y-2');
  });

  it('encaminha ref em List', () => {
    const ref = { current: null };
    render(<List ref={ref}><ListItem>X</ListItem></List>);
    expect(ref.current).not.toBeNull();
  });
});

describe('OrderedList', () => {
  it('renderiza tag <ol>', () => {
    const { container } = render(<OrderedList><ListItem>A</ListItem></OrderedList>);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  it('aplica list-decimal por padrão', () => {
    const { container } = render(<OrderedList><ListItem>A</ListItem></OrderedList>);
    expect(container.querySelector('ol')).toHaveClass('list-decimal');
  });

  it('aplica list-none quando unstyled=true', () => {
    const { container } = render(<OrderedList unstyled><ListItem>A</ListItem></OrderedList>);
    expect(container.querySelector('ol')).toHaveClass('list-none');
  });

  it('encaminha ref em OrderedList', () => {
    const ref = { current: null };
    render(<OrderedList ref={ref}><ListItem>X</ListItem></OrderedList>);
    expect(ref.current).not.toBeNull();
  });
});

describe('ListItem', () => {
  it('renderiza tag <li>', () => {
    const { container } = render(<ul><ListItem>Item</ListItem></ul>);
    expect(container.querySelector('li')).toBeInTheDocument();
  });

  it('encaminha ref em ListItem', () => {
    const ref = { current: null };
    render(<ul><ListItem ref={ref}>X</ListItem></ul>);
    expect(ref.current).not.toBeNull();
  });
});
