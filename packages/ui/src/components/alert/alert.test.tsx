import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Alert, AlertDescription, AlertTitle } from './alert';

describe('Alert', () => {
  it('renders with role alert', () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Error occurred</AlertTitle>
        <AlertDescription>Please try again later.</AlertDescription>
      </Alert>,
    );
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
    expect(screen.getByText('Please try again later.')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Alert data-testid="alert">Message</Alert>);
    expect(screen.getByTestId('alert')).toHaveClass('bg-background');
  });

  it('applies destructive variant', () => {
    render(
      <Alert variant="destructive" data-testid="alert">
        Error
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('border-destructive/50');
  });

  it('applies success variant', () => {
    render(
      <Alert variant="success" data-testid="alert">
        Success
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('border-success/50');
  });

  it('applies warning variant', () => {
    render(
      <Alert variant="warning" data-testid="alert">
        Warning
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('border-warning/50');
  });

  it('accepts className', () => {
    render(
      <Alert className="custom" data-testid="alert">
        Message
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Alert ref={ref}>Message</Alert>);
    expect(ref.current).not.toBeNull();
  });
});
