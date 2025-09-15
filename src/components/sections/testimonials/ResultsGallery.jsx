'use client';

import { useState } from 'react';
import OptimizedImage from '../../ui/OptimizedImage';
import { IMAGE_PATHS } from '../../../constants/links';

// Dados das fotos antes/depois organizados
const results = [
  {
    id: 1,
    before: IMAGE_PATHS.results['01'].before,
    after: IMAGE_PATHS.results['01'].after,
    description: 'Resultado após 3 sessões de despigmentação a laser',
    area: IMAGE_PATHS.results['01'].area
  },
  {
    id: 2,
    before: IMAGE_PATHS.results['02'].before,
    after: IMAGE_PATHS.results['02'].after,
    description: 'Melhora significativa após 4 sessões',
    area: IMAGE_PATHS.results['02'].area
  },
  {
    id: 3,
    before: IMAGE_PATHS.results['03'].before,
    after: IMAGE_PATHS.results['03'].after,
    description: 'Resultado após 2 sessões de tratamento',
    area: IMAGE_PATHS.results['03'].area
  },
  {
    id: 4,
    before: IMAGE_PATHS.results['04'].before,
    after: IMAGE_PATHS.results['04'].after,
    description: 'Eliminação completa do pigmento após 5 sessões',
    area: IMAGE_PATHS.results['04'].area
  }
];

function BeforeAfterCard({ result, onImageClick }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Header com área tratada */}
      <div className="p-4 border-b border-gray-100">
        <h4 className="font-medium text-gray-900 text-center">{result.area}</h4>
      </div>
      
      {/* Imagens antes/depois */}
      <div className="grid grid-cols-2">
        <div className="relative">
          <OptimizedImage
            src={result.before}
            alt={`Antes do tratamento - ${result.area}`}
            aspectRatio="3/4"
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
            sizes="(max-width: 768px) 50vw, 25vw"
            onClick={() => onImageClick(result, 'before')}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center">
            Antes
          </div>
        </div>
        <div className="relative">
          <OptimizedImage
            src={result.after}
            alt={`Depois do tratamento - ${result.area}`}
            aspectRatio="3/4"
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
            sizes="(max-width: 768px) 50vw, 25vw"
            onClick={() => onImageClick(result, 'after')}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center">
            Depois
          </div>
        </div>
      </div>
      
      {/* Descrição */}
      <div className="p-4">
        <p className="text-sm text-gray-600 text-center">{result.description}</p>
      </div>
    </div>
  );
}

function Lightbox({ isOpen, onClose, image, result, type }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        aria-label="Fechar galeria"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Conteúdo da lightbox */}
      <div className="max-w-4xl max-h-full flex flex-col items-center">
        <OptimizedImage
          src={image}
          alt={`${type === 'before' ? 'Antes' : 'Depois'} do tratamento - ${result.area}`}
          aspectRatio="3/4"
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
          sizes="80vw"
        />
        
        {/* Informações da imagem */}
        <div className="mt-4 text-center text-white">
          <h3 id="lightbox-title" className="text-lg font-medium mb-2">
            {result.area} - {type === 'before' ? 'Antes' : 'Depois'} do Tratamento
          </h3>
          <p className="text-sm text-gray-300">{result.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxResult, setLightboxResult] = useState(null);
  const [lightboxType, setLightboxType] = useState('');

  const handleImageClick = (result, type) => {
    setLightboxImage(type === 'before' ? result.before : result.after);
    setLightboxResult(result);
    setLightboxType(type);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    setLightboxResult(null);
    setLightboxType('');
  };

  return (
    <div className="mb-16">
      {/* Título da galeria */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          Galeria de Resultados
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Veja os resultados reais de nossos tratamentos de despigmentação a laser
        </p>
      </div>

      {/* Grid de resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result) => (
          <BeforeAfterCard
            key={result.id}
            result={result}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Disclaimer sobre as imagens */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500 max-w-3xl mx-auto">
          * As imagens apresentadas são de casos reais, mas os resultados podem variar conforme 
          características individuais da pele, tipo de pigmento e adesão aos cuidados pós-tratamento.
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        image={lightboxImage}
        result={lightboxResult}
        type={lightboxType}
      />
    </div>
  );
}
