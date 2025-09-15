import TestimonialsGrid from './TestimonialsGrid';
import ResultsGallery from './ResultsGallery';
import TestimonialsCTA from './TestimonialsCTA';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50" id="depoimentos">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Depoimentos e Resultados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem e os resultados reais da despigmentação a laser
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <TestimonialsGrid />
        
        {/* Galeria de Resultados */}
        <ResultsGallery />
        
        {/* Aviso sobre Variação Individual */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-medium text-yellow-800">Importante</h3>
            </div>
            <p className="text-sm text-yellow-700">
              Os resultados apresentados são baseados em casos reais, mas podem variar individualmente conforme o tipo de pele, 
              cor do pigmento, adesão aos cuidados pós-tratamento e outros fatores específicos de cada pessoa. 
              Consulte sempre um profissional qualificado para uma avaliação personalizada.
            </p>
          </div>
        </div>
        
        {/* CTAs */}
        <TestimonialsCTA />
      </div>
    </section>
  );
}
