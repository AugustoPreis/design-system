import type { StoryObj } from '@storybook/react';

import { List, ListItem, OrderedList } from './list';

export default {
  title: 'Tier 1/List',
  tags: ['autodocs'],
};

export const Unordered: StoryObj = {
  render: () => (
    <List gap="sm">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const Ordered: StoryObj = {
  render: () => (
    <OrderedList gap="sm">
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure the environment</ListItem>
      <ListItem>Run the project</ListItem>
    </OrderedList>
  ),
};

export const Unstyled: StoryObj = {
  render: () => (
    <List unstyled gap="md">
      <ListItem className="flex items-center gap-2">
        <span>✓</span> Item with custom icon
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <span>✓</span> Item with custom icon
      </ListItem>
    </List>
  ),
};
