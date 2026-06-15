import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('renders fallback when there is no image', () => {
    render(
      <Avatar>
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('applies xs size variant', () => {
    render(
      <Avatar size="xs" data-testid="avatar">
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-6', 'w-6');
  });

  it('applies sm size variant', () => {
    render(
      <Avatar size="sm" data-testid="avatar">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-8', 'w-8');
  });

  it('applies md size variant by default', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-10', 'w-10');
  });

  it('applies lg size variant', () => {
    render(
      <Avatar size="lg" data-testid="avatar">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-12', 'w-12');
  });

  it('applies xl size variant', () => {
    render(
      <Avatar size="xl" data-testid="avatar">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-16', 'w-16');
  });

  it('applies custom className to Avatar', () => {
    render(
      <Avatar className="border-2" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('border-2');
  });

  it('shows fallback when AvatarImage fails to load in jsdom', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    // jsdom does not load images, Radix Avatar shows the fallback
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('applies custom className to AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="bg-primary text-white">AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText('AB')).toHaveClass('bg-primary', 'text-white');
  });
});
