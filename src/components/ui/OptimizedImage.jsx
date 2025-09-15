import Image from 'next/image';
import { useState } from 'react';

/**
 * Componente de imagem otimizada com aspect-ratio definido para prevenir CLS
 * e srcset automático para melhor performance
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  className = '',
  priority = false,
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'blur',
  blurDataURL,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Calcular aspect-ratio se não fornecido
  const calculatedAspectRatio = aspectRatio || (height && width ? `${width}/${height}` : '16/9');
  
  // Gerar blur placeholder se não fornecido
  const defaultBlurDataURL = blurDataURL || `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Carregando...
      </text>
    </svg>`
  ).toString('base64')}`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ aspectRatio: calculatedAspectRatio }}
      >
        <div className="text-center text-gray-500">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Erro ao carregar imagem</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: calculatedAspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Componente específico para imagens antes/depois
 */
export function BeforeAfterImage({ beforeSrc, afterSrc, alt, className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-0 ${className}`}>
      <OptimizedImage
        src={beforeSrc}
        alt={`Antes - ${alt}`}
        aspectRatio="3/4"
        className="rounded-l-lg"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <OptimizedImage
        src={afterSrc}
        alt={`Depois - ${alt}`}
        aspectRatio="3/4"
        className="rounded-r-lg"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
}

/**
 * Componente para imagens de perfil/profissional
 */
export function ProfileImage({ src, alt, className = '' }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="1/1"
      className={`rounded-full ${className}`}
      sizes="(max-width: 768px) 200px, 300px"
    />
  );
}

/**
 * Componente para imagens hero/banner
 */
export function HeroImage({ src, alt, className = '' }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="16/9"
      className={className}
      priority
      sizes="100vw"
    />
  );
}
