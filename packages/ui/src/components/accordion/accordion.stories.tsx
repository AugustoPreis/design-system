import type { StoryObj } from '@storybook/react';

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from './accordion';

export default {
  title: 'Tier 3/Accordion',
  tags: ['autodocs'],
};

const faq = [
  { q: 'Como faço para cancelar?', r: 'Acesse configurações e clique em cancelar plano.' },
  { q: 'Aceita cartão de crédito?', r: 'Sim, aceitamos todos os cartões das bandeiras principais.' },
  { q: 'Tem período de teste?', r: 'Sim, 14 dias grátis sem necessidade de cartão.' },
];

export const Single: StoryObj = {
  render: () => (
    <AccordionRoot type="single" collapsible className="w-96">
      {faq.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.r}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ),
};

export const Multiple: StoryObj = {
  render: () => (
    <AccordionRoot type="multiple" className="w-96">
      {faq.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.r}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ),
};
