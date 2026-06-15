import type { StoryObj } from '@storybook/react';

import { Article, Aside, Footer, Header, Main, Nav, Section } from './page-layout';

export default {
  title: 'Tier 0/Page Layout',
  tags: ['autodocs'],
};

export const EstruturaDePagina: StoryObj = {
  render: () => (
    <div className="flex flex-col min-h-[400px] border rounded-lg overflow-hidden text-sm">
      <Header className="bg-primary text-primary-foreground p-4">Header</Header>
      <div className="flex flex-1">
        <Nav className="bg-muted w-32 p-4">Nav</Nav>
        <Main className="flex-1 p-4">
          <Section className="mb-4 p-4 border rounded">Section</Section>
          <Article className="p-4 border rounded">Article</Article>
        </Main>
        <Aside className="bg-muted w-32 p-4">Aside</Aside>
      </div>
      <Footer className="bg-muted p-4 text-center">Footer</Footer>
    </div>
  ),
};

export const SectionIsolada: StoryObj = {
  render: () => <Section className="p-8 bg-muted rounded-lg">Conteúdo da section</Section>,
};

export const NavComLista: StoryObj = {
  render: () => (
    <Nav aria-label="Navegação principal" className="flex gap-4 p-4 bg-background border-b">
      <span>Home</span>
      <span>Sobre</span>
      <span>Contato</span>
    </Nav>
  ),
};
