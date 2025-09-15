import TechnologyContent from './TechnologyContent';
import TechnologyImage from './TechnologyImage';
import { CONTAINER_CLASSES, SECTION_PADDING, TWO_COLUMN_GRID } from '../../../constants/layout';

export default function TechnologySection() {
  return (
    <section className="bg-gray-50" id="tecnologia">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Tecnologia Laser Ladybug
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a tecnologia mais avançada em despigmentação a laser disponível no mercado
          </p>
        </div>

        {/* Layout Principal: Conteúdo + Imagem */}
        <div className={`${TWO_COLUMN_GRID} gap-12`}>
          {/* Conteúdo à Esquerda */}
          <TechnologyContent />
          
          {/* Imagem à Direita */}
          <TechnologyImage />
        </div>
      </div>
    </section>
  );
}
