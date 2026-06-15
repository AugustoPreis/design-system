import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('renderiza o fallback quando não há imagem', () => {
    render(
      <Avatar>
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('aplica variante de tamanho xs', () => {
    render(
      <Avatar size="xs" data-testid="avatar">
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-6', 'w-6');
  });

  it('aplica variante de tamanho sm', () => {
    render(
      <Avatar size="sm" data-testid="avatar">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-8', 'w-8');
  });

  it('aplica variante de tamanho md por padrão', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-10', 'w-10');
  });

  it('aplica variante de tamanho lg', () => {
    render(
      <Avatar size="lg" data-testid="avatar">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-12', 'w-12');
  });

  it('aplica variante de tamanho xl', () => {
    render(
      <Avatar size="xl" data-testid="avatar">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('h-16', 'w-16');
  });

  it('aplica className customizado ao Avatar', () => {
    render(
      <Avatar className="border-2" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('avatar')).toHaveClass('border-2');
  });

  it('exibe fallback quando AvatarImage não carrega em jsdom', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="Usuário" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    // jsdom não carrega imagens, Radix Avatar exibe o fallback
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('aplica className customizado ao AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="bg-primary text-white">AB</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText('AB')).toHaveClass('bg-primary', 'text-white');
  });
});
