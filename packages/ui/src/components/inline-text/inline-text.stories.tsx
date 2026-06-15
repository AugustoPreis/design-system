import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote, Code, Kbd, Mark } from './inline-text';

const meta: Meta = {
  title: 'Tier 1/InlineText',
};

export default meta;

export const InlineCode: StoryObj = {
  render: () => (
    <p className="text-sm">
      To install, run <Code>npm install @ds/ui</Code> in the terminal.
    </p>
  ),
};

export const KeyboardKeys: StoryObj = {
  render: () => (
    <p className="text-sm">
      Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy and <Kbd>Ctrl</Kbd> +{' '}
      <Kbd>V</Kbd> to paste.
    </p>
  ),
};

export const HighlightedText: StoryObj = {
  render: () => (
    <p className="text-sm">
      This is a paragraph with <Mark>highlighted text</Mark> to draw the
      reader&apos;s attention.
    </p>
  ),
};

export const Quote: StoryObj = {
  render: () => (
    <Blockquote>
      &ldquo;Design is not just what it looks like and feels like. Design is how
      it works.&rdquo; — Steve Jobs
    </Blockquote>
  ),
};

export const Combined: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">
        Use <Code>git commit -m &quot;message&quot;</Code> to save your changes.
      </p>
      <p className="text-sm">
        Press <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd> to undo the last action.
      </p>
      <p className="text-sm">
        Pay attention to this <Mark>important point</Mark> before continuing.
      </p>
      <Blockquote>
        Simplicity is the ultimate sophistication. — Leonardo da Vinci
      </Blockquote>
    </div>
  ),
};
