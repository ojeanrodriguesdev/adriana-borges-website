import CareChecklist from './CareChecklist';
import CareCTA from './CareCTA';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function CareSection() {
  return (
    <section className="bg-gray-50" id="cuidados">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Cuidados Pós-Sessão
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Siga estas orientações para garantir os melhores resultados e uma recuperação segura
          </p>
        </div>

        {/* Checklist de Cuidados */}
        <CareChecklist />
        
        {/* CTA */}
        <CareCTA />
      </div>
    </section>
  );
}
