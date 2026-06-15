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
        <AccordionTrigger>Question 1</AccordionTrigger>
        <AccordionContent>Answer 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question 2</AccordionTrigger>
        <AccordionContent>Answer 2</AccordionContent>
      </AccordionItem>
    </AccordionRoot>,
  );
}

describe('Accordion', () => {
  it('renders triggers', () => {
    renderAccordion();
    expect(
      screen.getByRole('button', { name: /Question 1/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Question 2/ }),
    ).toBeInTheDocument();
  });

  it('content is closed by default', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /Question 1/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('opens item when trigger is clicked', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByRole('button', { name: /Question 1/ }));
    expect(screen.getByText('Answer 1')).toBeVisible();
  });

  it('closes item when clicked again (collapsible)', async () => {
    const user = userEvent.setup();
    renderAccordion();
    const trigger = screen.getByRole('button', { name: /Question 1/ });
    await user.click(trigger);
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('type=single closes previous item when opening new one', async () => {
    const user = userEvent.setup();
    renderAccordion('single');
    await user.click(screen.getByRole('button', { name: /Question 1/ }));
    await user.click(screen.getByRole('button', { name: /Question 2/ }));
    expect(screen.getByRole('button', { name: /Question 1/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.getByRole('button', { name: /Question 2/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('type=multiple allows two items open at the same time', async () => {
    const user = userEvent.setup();
    renderAccordion('multiple');
    await user.click(screen.getByRole('button', { name: /Question 1/ }));
    await user.click(screen.getByRole('button', { name: /Question 2/ }));
    expect(screen.getByText('Answer 1')).toBeVisible();
    expect(screen.getByText('Answer 2')).toBeVisible();
  });

  it('trigger has aria-expanded=false when closed', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: /Question 1/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('trigger has aria-expanded=true when open', async () => {
    const user = userEvent.setup();
    renderAccordion();
    await user.click(screen.getByRole('button', { name: /Question 1/ }));
    expect(screen.getByRole('button', { name: /Question 1/ })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });
});
