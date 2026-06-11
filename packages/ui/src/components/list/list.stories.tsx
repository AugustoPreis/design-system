import type { StoryObj } from '@storybook/react';

import { List, ListItem, OrderedList } from './list';

export default {
  title: 'Tier 1/List',
  tags: ['autodocs'],
};

export const NaoOrdenada: StoryObj = {
  render: () => (
    <List gap="sm">
      <ListItem>Primeiro item</ListItem>
      <ListItem>Segundo item</ListItem>
      <ListItem>Terceiro item</ListItem>
    </List>
  ),
};

export const Ordenada: StoryObj = {
  render: () => (
    <OrderedList gap="sm">
      <ListItem>Instalar dependências</ListItem>
      <ListItem>Configurar o ambiente</ListItem>
      <ListItem>Executar o projeto</ListItem>
    </OrderedList>
  ),
};

export const SemEstilo: StoryObj = {
  render: () => (
    <List unstyled gap="md">
      <ListItem className="flex items-center gap-2">
        <span>✓</span> Item com ícone customizado
      </ListItem>
      <ListItem className="flex items-center gap-2">
        <span>✓</span> Item com ícone customizado
      </ListItem>
    </List>
  ),
};
