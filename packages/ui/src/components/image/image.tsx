import { forwardRef, type ImgHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const roundedMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;

const objectFitMap = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
} as const;

const aspectRatioMap = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '3/2': 'aspect-[3/2]',
  '2/1': 'aspect-[2/1]',
  auto: '',
} as const;

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  asChild?: boolean;
  rounded?: keyof typeof roundedMap;
  objectFit?: keyof typeof objectFitMap;
  aspectRatio?: keyof typeof aspectRatioMap;
  lazy?: boolean;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      asChild = false,
      rounded = 'none',
      objectFit = 'cover',
      aspectRatio = 'auto',
      lazy = true,
      loading,
      alt = '',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'img';
    return (
      <Comp
        ref={ref}
        alt={alt}
        loading={loading ?? (lazy ? 'lazy' : undefined)}
        className={cn(
          'max-w-full',
          roundedMap[rounded],
          objectFitMap[objectFit],
          aspectRatioMap[aspectRatio],
          className,
        )}
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';

export { Image };
