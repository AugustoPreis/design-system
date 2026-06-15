import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './link';

describe('Link', () => {
  it('renders child text', () => {
    render(<Link href="/test">Click here</Link>);
    expect(
      screen.getByRole('link', { name: 'Click here' }),
    ).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
  });

  it('adds target and rel when external=true', () => {
    render(
      <Link href="https://external.com" external>
        External
      </Link>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add target/rel when external=false', () => {
    render(<Link href="/internal">Internal</Link>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('applies default variant class', () => {
    render(
      <Link href="/" data-testid="link">
        Home
      </Link>,
    );
    expect(screen.getByTestId('link')).toHaveClass('text-primary');
  });

  it('applies muted variant class', () => {
    render(
      <Link href="/" variant="muted" data-testid="link">
        Home
      </Link>,
    );
    expect(screen.getByTestId('link')).toHaveClass('text-muted-foreground');
  });

  it('renders as child element when asChild=true', () => {
    render(
      <Link asChild>
        <button type="button">Button as link</button>
      </Link>,
    );
    expect(
      screen.getByRole('button', { name: 'Button as link' }),
    ).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(
      <Link href="/" ref={ref}>
        Link
      </Link>,
    );
    expect(ref.current).not.toBeNull();
  });

  it('accepts custom className', () => {
    render(
      <Link href="/" className="custom-class" data-testid="link">
        Link
      </Link>,
    );
    expect(screen.getByTestId('link')).toHaveClass('custom-class');
  });

  it('external with manual target does not duplicate attributes', () => {
    render(
      <Link href="https://x.com" external target="_self" data-testid="link">
        Link
      </Link>,
    );
    expect(screen.getByTestId('link')).toHaveAttribute('target', '_self');
  });
});
