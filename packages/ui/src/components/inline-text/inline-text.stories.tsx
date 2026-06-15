import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote, Code, Kbd, Mark } from './inline-text';

const meta: Meta = {
  title: 'Components/InlineText',
};

export default meta;

export const CodigoInline: StoryObj = {
  render: () => (
    <p className="text-sm">
      Para instalar, execute <Code>npm install @ds/ui</Code> no terminal.
    </p>
  ),
};

export const TeclasDeTeclado: StoryObj = {
  render: () => (
    <p className="text-sm">
      Pressione <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> para copiar e <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> para
      colar.
    </p>
  ),
};

export const TexoDestacado: StoryObj = {
  render: () => (
    <p className="text-sm">
      Este é um parágrafo com <Mark>texto destacado</Mark> para chamar atenção do leitor.
    </p>
  ),
};

export const Citacao: StoryObj = {
  render: () => (
    <Blockquote>
      &ldquo;Design não é apenas aparência. Design é como funciona.&rdquo; — Steve Jobs
    </Blockquote>
  ),
};

export const Combinados: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">
        Use <Code>git commit -m &quot;mensagem&quot;</Code> para salvar suas mudanças.
      </p>
      <p className="text-sm">
        Pressione <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd> para desfazer a última ação.
      </p>
      <p className="text-sm">
        Preste atenção neste <Mark>ponto importante</Mark> antes de continuar.
      </p>
      <Blockquote>A simplicidade é a sofisticação máxima. — Leonardo da Vinci</Blockquote>
    </div>
  ),
};
