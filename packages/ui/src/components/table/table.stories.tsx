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

const rows = [
  { name: 'Ana', email: 'ana@email.com', status: 'Active' },
  { name: 'Bruno', email: 'bruno@email.com', status: 'Inactive' },
  { name: 'Carla', email: 'carla@email.com', status: 'Active' },
];

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableCaption>System user list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.email}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
