'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
}

export default function OptimizedImage({ src, alt, className, fallbackSrc, ...props }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Fallback image source if the main source fails
  const imageSrc = error && fallbackSrc ? fallbackSrc : src;

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100/60 rounded-[inherit]">
      {/* CSS Keyframe Shimmer Style Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      ` }} />

      {/* Shimmering Skeleton Loader */}
      {!loaded && !error && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-shimmer" />
      )}

      {/* Actual Image */}
      <Image
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        {...props}
      />
    </div>
  );
}
