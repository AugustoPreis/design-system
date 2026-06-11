import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from './accordion';

function renderAccordion(type: 'single' | 'multiple' = 'single') {
  return render(
    <AccordionRoot type={type} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Pergunta 1</AccordionTrigger>
        <AccordionContent>Resposta 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pergunta 2</AccordionTrigger>
        <AccordionContent>Resposta 2</AccordionContent>
      </AccordionItem>
    </AccordionRoot>,
  );
}

describe('Accordion', () => {
  it('renderiza os triggers', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /Pergunta 1/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pergunta 2/ })).toBeInTheDocument();
  });

  it('conteúdo está fechado por padrão', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /Pergunta 1/ })).toHaveAttribute('aria-expanded', 'false');
  });

  it('abre item ao clicar no trigger', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByRole('button', { name: /Pergunta 1/ }));
    expect(screen.getByText('Resposta 1')).toBeVisible();
  });

  it('fecha item ao clicar novamente (collapsible)', async () => {
    const user = userEvent.setup();
    renderAccordion();
    const trigger = screen.getByRole('button', { name: /Pergunta 1/ });
    await user.click(trigger);
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('type=single fecha item anterior ao abrir novo', async () => {
    const user = userEvent.setup();
    renderAccordion('single');
    await user.click(screen.getByRole('button', { name: /Pergunta 1/ }));
    await user.click(screen.getByRole('button', { name: /Pergunta 2/ }));
    expect(screen.getByRole('button', { name: /Pergunta 1/ })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: /Pergunta 2/ })).toHaveAttribute('aria-expanded', 'true');
  });

  it('type=multiple permite dois itens abertos', async () => {
    const user = userEvent.setup();
    renderAccordion('multiple');
    await user.click(screen.getByRole('button', { name: /Pergunta 1/ }));
    await user.click(screen.getByRole('button', { name: /Pergunta 2/ }));
    expect(screen.getByText('Resposta 1')).toBeVisible();
    expect(screen.getByText('Resposta 2')).toBeVisible();
  });

  it('trigger tem aria-expanded=false quando fechado', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /Pergunta 1/ })).toHaveAttribute('aria-expanded', 'false');
  });

  it('trigger tem aria-expanded=true quando aberto', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByRole('button', { name: /Pergunta 1/ }));
    expect(screen.getByRole('button', { name: /Pergunta 1/ })).toHaveAttribute('aria-expanded', 'true');
  });
});
