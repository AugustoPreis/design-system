import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from './select';

const SelectClosed = ({
  onValueChange,
  defaultValue,
  disabled,
}: {
  onValueChange?: (v: string) => void;
  defaultValue?: string;
  disabled?: boolean;
}) => (
  <SelectRoot onValueChange={onValueChange} defaultValue={defaultValue}>
    <SelectTrigger disabled={disabled} aria-label="Select fruit">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectContent>
  </SelectRoot>
);

const SelectOpen = ({
  onValueChange,
}: {
  onValueChange?: (v: string) => void;
}) => (
  <SelectRoot open onValueChange={onValueChange}>
    <SelectTrigger aria-label="Select fruit">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectContent>
  </SelectRoot>
);

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    render(<SelectClosed />);
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });

  it('renders a combobox trigger', () => {
    render(<SelectClosed />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    render(<SelectClosed disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('shows default value when provided', () => {
    render(<SelectClosed defaultValue="orange" />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Orange');
  });

  it('renders listbox and options when open', () => {
    render(<SelectOpen />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Orange' })).toBeInTheDocument();
  });

  it('calls onValueChange when option is clicked', () => {
    const onValueChange = vi.fn((value: string) => value);
    render(<SelectOpen onValueChange={onValueChange} />);
    fireEvent.click(screen.getByRole('option', { name: 'Banana' }));
    expect(onValueChange).toHaveBeenCalledWith('banana');
  });
});
