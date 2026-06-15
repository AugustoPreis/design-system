import { icons, type LucideProps } from 'lucide-react';

import { cn } from '@/lib/utils';

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

const colorMap = {
  inherit: 'currentColor',
  muted: 'var(--color-muted-foreground)',
  primary: 'var(--color-primary)',
  destructive: 'var(--color-destructive)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
} as const;

export type IconName = keyof typeof icons;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  size?: keyof typeof sizeMap;
  color?: keyof typeof colorMap;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

function Icon({
  name,
  size = 'md',
  color = 'inherit',
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`[Icon] Icon "${name}" not found in lucide-react`);
    return null;
  }

  const isDecorative = !ariaLabel;

  return (
    <LucideIcon
      size={sizeMap[size]}
      color={colorMap[color]}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? (isDecorative ? true : undefined)}
      role={ariaLabel ? 'img' : undefined}
      className={cn('shrink-0', className)}
      {...props}
    />
  );
}

Icon.displayName = 'Icon';

export { Icon };
