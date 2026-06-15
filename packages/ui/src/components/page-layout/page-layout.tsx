import React, { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export type SectionProps = PageLayoutProps;
export type ArticleProps = PageLayoutProps;
export type AsideProps = PageLayoutProps;
export type HeaderProps = PageLayoutProps;
export type FooterProps = PageLayoutProps;
export type MainProps = PageLayoutProps;
export type NavProps = PageLayoutProps;

function createPageLayoutComponent(
  tag: keyof React.JSX.IntrinsicElements,
  displayName: string,
) {
  const Component = forwardRef<HTMLDivElement, PageLayoutProps>(
    ({ className, ...props }, ref) => {
      const Tag = tag as 'div';
      return <Tag ref={ref} className={cn(className)} {...props} />;
    },
  );
  Component.displayName = displayName;
  return Component;
}

const Section = createPageLayoutComponent('section', 'Section');
const Article = createPageLayoutComponent('article', 'Article');
const Aside = createPageLayoutComponent('aside', 'Aside');
const Header = createPageLayoutComponent('header', 'Header');
const Footer = createPageLayoutComponent('footer', 'Footer');
const Main = createPageLayoutComponent('main', 'Main');
const Nav = createPageLayoutComponent('nav', 'Nav');

export { Article, Aside, Footer, Header, Main, Nav, Section };
