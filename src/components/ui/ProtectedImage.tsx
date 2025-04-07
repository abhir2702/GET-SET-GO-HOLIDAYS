import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'eager',
  onError
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
      
      // Calculate aspect ratio preserving dimensions
      let w = width || img.width;
      let h = height || img.height;
      
      if (width && !height) {
        h = (width / img.width) * img.height;
      } else if (height && !width) {
        w = (height / img.height) * img.width;
      }
      
      // Set higher resolution for sharper images
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      
      // Scale context to ensure proper resolution
      ctx.scale(dpr, dpr);
      
      // Use better image rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Draw image with proper dimensions
      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, w, h);
    };

    img.onerror = (e) => {
      setIsLoading(false);
      setHasError(true);
      if (onError) {
        onError(e as React.SyntheticEvent<HTMLImageElement, Event>);
      }
    };

    // Clean up URL to handle image paths correctly
    const imageUrl = src.startsWith('/') ? src.slice(1) : src;
    img.src = imageUrl;
    img.loading = loading;

    // Add protection event listeners
    const preventActions = (e: Event) => {
      e.preventDefault();
    };

    canvas.addEventListener('contextmenu', preventActions);
    canvas.addEventListener('dragstart', preventActions);
    canvas.addEventListener('selectstart', preventActions);
    canvas.addEventListener('copy', preventActions);

    return () => {
      canvas.removeEventListener('contextmenu', preventActions);
      canvas.removeEventListener('dragstart', preventActions);
      canvas.removeEventListener('selectstart', preventActions);
      canvas.removeEventListener('copy', preventActions);
    };
  }, [src, width, height, loading, onError]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-t-lg" />
      )}
      <canvas
        ref={canvasRef}
        className={cn(
          className,
          hasError ? 'bg-gray-100' : ''
        )}
        style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          display: isLoading ? 'none' : 'block'
        }}
        aria-label={alt}
      />
    </div>
  );
};

export default ProtectedImage;