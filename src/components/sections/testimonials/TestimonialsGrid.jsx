'use client';

import { useState } from 'react';

// Dados dos depoimentos (simulando extração do Google)
const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    text: "Excelente atendimento! A Adriana é muito profissional e os resultados foram além das minhas expectativas. Recomendo!",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    text: "Tratamento eficaz e sem dor. A clínica é limpa e o atendimento é de primeira qualidade.",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    text: "Finalmente consegui remover aquelas manchas que me incomodavam há anos. Muito satisfeita com o resultado!",
    date: "2024-01-08"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    rating: 5,
    text: "Profissional competente e ambiente acolhedor. O tratamento foi rápido e eficiente.",
    date: "2024-01-05"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    rating: 5,
    text: "Adriana é uma excelente profissional! Meu problema de pigmentação foi resolvido com sucesso.",
    date: "2024-01-03"
  },
  {
    id: 6,
    name: "Roberto Alves",
    rating: 5,
    text: "Atendimento excepcional e resultados comprovados. Vale muito a pena o investimento!",
    date: "2024-01-01"
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header com nome e rating */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Texto do depoimento */}
      <p className="text-gray-700 text-sm leading-relaxed">
        "{testimonial.text}"
      </p>
      
      {/* Badge do Google */}
      <div className="mt-4 flex items-center">
        <svg className="w-4 h-4 text-blue-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-xs text-gray-500">Google</span>
      </div>
    </div>
  );
}

export default function TestimonialsGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      
      {/* Botão para mostrar mais */}
      {!showAll && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Ver mais depoimentos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
