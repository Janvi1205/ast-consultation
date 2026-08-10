import React from 'react';

/**
 * OptimizedImage Component
 * - Prevents Layout Shift (CLS) with explicit width/height or aspect ratio container
 * - Supports responsive srcSet / sizes
 * - Supports modern WebP formats
 * - Features lazy loading by default, with eager loading overrides for critical content
 */
export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  srcSet,
  sizes,
  aspectRatio,
  style = {},
  ...props
}) {
  const isEager = loading === 'eager';

  const imageElement = (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchpriority={isEager ? 'high' : fetchPriority}
      decoding={isEager ? 'sync' : 'async'}
      className={`w-full h-full object-cover ${className}`}
      style={style}
      {...props}
    />
  );

  if (aspectRatio) {
    return (
      <div 
        style={{ aspectRatio }} 
        className="w-full overflow-hidden relative"
      >
        {imageElement}
      </div>
    );
  }

  return imageElement;
}
