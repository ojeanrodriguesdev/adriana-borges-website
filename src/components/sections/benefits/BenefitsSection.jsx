import BenefitsGrid from './BenefitsGrid';
import BenefitsCTAs from './BenefitsCTAs';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function BenefitsSection() {
  return (
    <section className="bg-white" id="beneficios">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Benefícios da Despigmentação a Laser
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de escolher a tecnologia mais avançada para remoção de pigmentos
          </p>
        </div>

        {/* Grid de Benefícios */}
        <BenefitsGrid />
        
        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            * Os resultados podem variar individualmente conforme o tipo de pele, cor do pigmento e adesão aos cuidados pós-tratamento.
          </p>
        </div>
        
        {/* CTAs */}
        <BenefitsCTAs />
      </div>
    </section>
  );
}
