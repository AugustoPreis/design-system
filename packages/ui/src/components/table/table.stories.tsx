import type { StoryObj } from '@storybook/react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

export default {
  title: 'Tier 1/Table',
  tags: ['autodocs'],
};

const dados = [
  { nome: 'Ana', email: 'ana@email.com', status: 'Ativo' },
  { nome: 'Bruno', email: 'bruno@email.com', status: 'Inativo' },
  { nome: 'Carla', email: 'carla@email.com', status: 'Ativo' },
];

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableCaption>Lista de usuários do sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dados.map((d) => (
          <TableRow key={d.email}>
            <TableCell>{d.nome}</TableCell>
            <TableCell>{d.email}</TableCell>
            <TableCell>{d.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
