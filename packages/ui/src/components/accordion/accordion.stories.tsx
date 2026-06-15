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
  {
    question: 'How do I cancel?',
    answer: 'Go to settings and click on cancel plan.',
  },
  {
    question: 'Do you accept credit cards?',
    answer: 'Yes, we accept all major card brands.',
  },
  {
    question: 'Is there a trial period?',
    answer: 'Yes, 14 days free with no card required.',
  },
];

export const Single: StoryObj = {
  render: () => (
    <AccordionRoot type="single" collapsible className="w-96">
      {faq.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
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
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  ),
};
