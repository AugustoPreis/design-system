import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Article, Aside, Footer, Header, Main, Nav, Section } from './page-layout';

function getTag(container: HTMLElement, tag: string) {
  return container.querySelector(tag);
}

describe('Page Layout Components', () => {
  describe('Section', () => {
    it('renderiza tag <section>', () => {
      const { container } = render(<Section>Conteúdo</Section>);
      expect(getTag(container, 'section')).toBeInTheDocument();
    });
    it('aceita className', () => {
      const { container } = render(<Section className="py-8">X</Section>);
      expect(getTag(container, 'section')).toHaveClass('py-8');
    });
    it('encaminha ref', () => {
      const ref = { current: null };
      render(<Section ref={ref}>X</Section>);
      expect(ref.current).not.toBeNull();
    });
  });

  describe('Article', () => {
    it('renderiza tag <article>', () => {
      const { container } = render(<Article>Conteúdo</Article>);
      expect(getTag(container, 'article')).toBeInTheDocument();
    });
  });

  describe('Aside', () => {
    it('renderiza tag <aside>', () => {
      const { container } = render(<Aside>Sidebar</Aside>);
      expect(getTag(container, 'aside')).toBeInTheDocument();
    });
  });

  describe('Header', () => {
    it('renderiza tag <header>', () => {
      const { container } = render(<Header>Logo</Header>);
      expect(getTag(container, 'header')).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('renderiza tag <footer>', () => {
      const { container } = render(<Footer>© 2025</Footer>);
      expect(getTag(container, 'footer')).toBeInTheDocument();
    });
  });

  describe('Main', () => {
    it('renderiza tag <main>', () => {
      const { container } = render(<Main>Conteúdo principal</Main>);
      expect(getTag(container, 'main')).toBeInTheDocument();
    });
  });

  describe('Nav', () => {
    it('renderiza tag <nav>', () => {
      const { container } = render(<Nav>Menu</Nav>);
      expect(getTag(container, 'nav')).toBeInTheDocument();
    });
    it('aceita aria-label', () => {
      const { container } = render(<Nav aria-label="Principal">Menu</Nav>);
      expect(getTag(container, 'nav')).toHaveAttribute('aria-label', 'Principal');
    });
  });

  it('cada componente renderiza apenas sua própria tag (não troca)', () => {
    const { container: c1 } = render(<Header>X</Header>);
    const { container: c2 } = render(<Footer>X</Footer>);
    expect(getTag(c1, 'footer')).toBeNull();
    expect(getTag(c2, 'header')).toBeNull();
  });
});
