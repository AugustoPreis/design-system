import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { List, ListItem, OrderedList } from './list';

describe('List', () => {
  it('renders <ul> tag', () => {
    const { container } = render(
      <List>
        <ListItem>Item</ListItem>
      </List>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('renders items as <li>', () => {
    render(
      <List>
        <ListItem>A</ListItem>
        <ListItem>B</ListItem>
      </List>,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('applies list-disc by default (not unstyled)', () => {
    const { container } = render(
      <List>
        <ListItem>X</ListItem>
      </List>,
    );
    expect(container.querySelector('ul')).toHaveClass('list-disc');
  });

  it('applies list-none when unstyled=true', () => {
    const { container } = render(
      <List unstyled>
        <ListItem>X</ListItem>
      </List>,
    );
    expect(container.querySelector('ul')).toHaveClass('list-none');
    expect(container.querySelector('ul')).not.toHaveClass('list-disc');
  });

  it('applies gap=sm (space-y-2)', () => {
    const { container } = render(
      <List gap="sm">
        <ListItem>X</ListItem>
      </List>,
    );
    expect(container.querySelector('ul')).toHaveClass('space-y-2');
  });

  it('forwards ref in List', () => {
    const ref = { current: null };
    render(
      <List ref={ref}>
        <ListItem>X</ListItem>
      </List>,
    );
    expect(ref.current).not.toBeNull();
  });
});

describe('OrderedList', () => {
  it('renders <ol> tag', () => {
    const { container } = render(
      <OrderedList>
        <ListItem>A</ListItem>
      </OrderedList>,
    );
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  it('applies list-decimal by default', () => {
    const { container } = render(
      <OrderedList>
        <ListItem>A</ListItem>
      </OrderedList>,
    );
    expect(container.querySelector('ol')).toHaveClass('list-decimal');
  });

  it('applies list-none when unstyled=true', () => {
    const { container } = render(
      <OrderedList unstyled>
        <ListItem>A</ListItem>
      </OrderedList>,
    );
    expect(container.querySelector('ol')).toHaveClass('list-none');
  });

  it('forwards ref in OrderedList', () => {
    const ref = { current: null };
    render(
      <OrderedList ref={ref}>
        <ListItem>X</ListItem>
      </OrderedList>,
    );
    expect(ref.current).not.toBeNull();
  });
});

describe('ListItem', () => {
  it('renders <li> tag', () => {
    const { container } = render(
      <ul>
        <ListItem>Item</ListItem>
      </ul>,
    );
    expect(container.querySelector('li')).toBeInTheDocument();
  });

  it('forwards ref in ListItem', () => {
    const ref = { current: null };
    render(
      <ul>
        <ListItem ref={ref}>X</ListItem>
      </ul>,
    );
    expect(ref.current).not.toBeNull();
  });
});
