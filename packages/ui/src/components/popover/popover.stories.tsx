import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger } from './popover';

const meta: Meta<typeof PopoverContent> = {
  title: 'Components/Popover',
  component: PopoverContent,
};

export default meta;
type Story = StoryObj<typeof PopoverContent>;

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm">Este é um popover simples com conteúdo informativo.</p>
      </PopoverContent>
    </PopoverRoot>
  ),
};

export const ComFormulario: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline">Editar perfil</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Perfil</h4>
            <p className="text-sm text-muted-foreground">Atualize suas informações.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" defaultValue="João Silva" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" defaultValue="joao@exemplo.com" className="col-span-2" />
            </div>
          </div>
          <PopoverClose asChild>
            <Button size="sm">Salvar</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
};
