import type { StoryObj } from '@storybook/react';

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs';

export default {
  title: 'Tier 3/Tabs',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  render: () => (
    <TabsRoot defaultValue="conta" className="w-96">
      <TabsList>
        <TabsTrigger value="conta">Conta</TabsTrigger>
        <TabsTrigger value="senha">Senha</TabsTrigger>
        <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
      </TabsList>
      <TabsContent value="conta" className="p-4">
        Configurações da conta
      </TabsContent>
      <TabsContent value="senha" className="p-4">
        Alterar senha
      </TabsContent>
      <TabsContent value="notificacoes" className="p-4">
        Preferências de notificação
      </TabsContent>
    </TabsRoot>
  ),
};

export const ComAbaDesabilitada: StoryObj = {
  render: () => (
    <TabsRoot defaultValue="ativa" className="w-80">
      <TabsList>
        <TabsTrigger value="ativa">Ativa</TabsTrigger>
        <TabsTrigger value="desabilitada" disabled>Desabilitada</TabsTrigger>
      </TabsList>
      <TabsContent value="ativa" className="p-4">Conteúdo ativo</TabsContent>
      <TabsContent value="desabilitada" className="p-4">Inacessível</TabsContent>
    </TabsRoot>
  ),
};
