'use client';

import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const FALLBACK_IMAGE_URL =
  'https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: string;
  originWidth?: number;
  originHeight?: number;
  focalPointX?: number;
  focalPointY?: number;
};

/**
 * Drop-in replacement for the Wix Image component.
 * Renders a plain <img> tag — all images are served directly from wixstatic.com CDN.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      className,
      style,
      fittingType,
      originWidth,
      originHeight,
      focalPointX,
      focalPointY,
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src);

    useEffect(() => {
      setImgSrc(src);
    }, [src]);

    if (!src) {
      return <div data-empty-image ref={ref as any} className={className} style={style} />;
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={imgSrc}
        alt={alt ?? ''}
        className={cn(className)}
        style={style}
        onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';
