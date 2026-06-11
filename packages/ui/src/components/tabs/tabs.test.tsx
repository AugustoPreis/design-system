import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs';

function renderTabs() {
  return render(
    <TabsRoot defaultValue="aba1">
      <TabsList>
        <TabsTrigger value="aba1">Aba 1</TabsTrigger>
        <TabsTrigger value="aba2">Aba 2</TabsTrigger>
      </TabsList>
      <TabsContent value="aba1">Conteúdo da Aba 1</TabsContent>
      <TabsContent value="aba2">Conteúdo da Aba 2</TabsContent>
    </TabsRoot>,
  );
}

describe('Tabs', () => {
  it('renderiza as abas', () => {
    renderTabs();
    expect(screen.getByRole('tab', { name: 'Aba 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Aba 2' })).toBeInTheDocument();
  });

  it('mostra conteúdo da aba ativa por padrão', () => {
    renderTabs();
    expect(screen.getByText('Conteúdo da Aba 1')).toBeVisible();
  });

  it('aba ativa tem aria-selected=true', () => {
    renderTabs();
    expect(screen.getByRole('tab', { name: 'Aba 1' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Aba 2' })).toHaveAttribute('aria-selected', 'false');
  });

  it('troca de aba ao clicar', async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByRole('tab', { name: 'Aba 2' }));
    expect(screen.getByText('Conteúdo da Aba 2')).toBeVisible();
  });

  it('aba desabilitada não é clicável', async () => {
    const user = userEvent.setup();
    render(
      <TabsRoot defaultValue="aba1">
        <TabsList>
          <TabsTrigger value="aba1">Aba 1</TabsTrigger>
          <TabsTrigger value="aba2" disabled>Aba 2</TabsTrigger>
        </TabsList>
        <TabsContent value="aba1">Conteúdo 1</TabsContent>
        <TabsContent value="aba2">Conteúdo 2</TabsContent>
      </TabsRoot>,
    );
    await user.click(screen.getByRole('tab', { name: 'Aba 2' }));
    const conteudo2 = screen.queryByText('Conteúdo 2');
    expect(conteudo2 === null || !conteudo2.checkVisibility()).toBe(true);
  });

  it('TabsList tem role=tablist', () => {
    renderTabs();
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('conteúdo tem role=tabpanel', () => {
    renderTabs();
    expect(screen.getAllByRole('tabpanel').length).toBeGreaterThanOrEqual(1);
  });

  it('aceita className em TabsList', () => {
    render(
      <TabsRoot defaultValue="a">
        <TabsList className="custom-list">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">X</TabsContent>
      </TabsRoot>,
    );
    expect(screen.getByRole('tablist')).toHaveClass('custom-list');
  });
});
