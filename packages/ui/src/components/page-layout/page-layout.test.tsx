import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  Article,
  Aside,
  Footer,
  Header,
  Main,
  Nav,
  Section,
} from './page-layout';

function getTag(container: HTMLElement, tag: string) {
  return container.querySelector(tag);
}

describe('Page Layout Components', () => {
  describe('Section', () => {
    it('renders <section> tag', () => {
      const { container } = render(<Section>Content</Section>);
      expect(getTag(container, 'section')).toBeInTheDocument();
    });
    it('accepts className', () => {
      const { container } = render(<Section className="py-8">X</Section>);
      expect(getTag(container, 'section')).toHaveClass('py-8');
    });
    it('forwards ref', () => {
      const ref = { current: null };
      render(<Section ref={ref}>X</Section>);
      expect(ref.current).not.toBeNull();
    });
  });

  describe('Article', () => {
    it('renders <article> tag', () => {
      const { container } = render(<Article>Content</Article>);
      expect(getTag(container, 'article')).toBeInTheDocument();
    });
  });

  describe('Aside', () => {
    it('renders <aside> tag', () => {
      const { container } = render(<Aside>Sidebar</Aside>);
      expect(getTag(container, 'aside')).toBeInTheDocument();
    });
  });

  describe('Header', () => {
    it('renders <header> tag', () => {
      const { container } = render(<Header>Logo</Header>);
      expect(getTag(container, 'header')).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('renders <footer> tag', () => {
      const { container } = render(<Footer>© 2025</Footer>);
      expect(getTag(container, 'footer')).toBeInTheDocument();
    });
  });

  describe('Main', () => {
    it('renders <main> tag', () => {
      const { container } = render(<Main>Main content</Main>);
      expect(getTag(container, 'main')).toBeInTheDocument();
    });
  });

  describe('Nav', () => {
    it('renders <nav> tag', () => {
      const { container } = render(<Nav>Menu</Nav>);
      expect(getTag(container, 'nav')).toBeInTheDocument();
    });
    it('accepts aria-label', () => {
      const { container } = render(<Nav aria-label="Main">Menu</Nav>);
      expect(getTag(container, 'nav')).toHaveAttribute('aria-label', 'Main');
    });
  });

  it('each component renders only its own tag (no swapping)', () => {
    const { container: c1 } = render(<Header>X</Header>);
    const { container: c2 } = render(<Footer>X</Footer>);
    expect(getTag(c1, 'footer')).toBeNull();
    expect(getTag(c2, 'header')).toBeNull();
  });
});
