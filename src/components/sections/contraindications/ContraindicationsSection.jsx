import ContraindicationsList from './ContraindicationsList';
import ContraindicationsCTA from './ContraindicationsCTA';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function ContraindicationsSection() {
  return (
    <section className="bg-white" id="contraindicacoes">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Contraindicações
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verifique se você se enquadra em alguma das situações abaixo antes de agendar sua sessão
          </p>
        </div>

        {/* Lista de Contraindicações */}
        <ContraindicationsList />
        
        {/* CTA */}
        <ContraindicationsCTA />
      </div>
    </section>
  );
}
