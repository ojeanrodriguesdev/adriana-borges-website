import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import { CONTAINER_CLASSES, SECTION_PADDING, TWO_COLUMN_GRID } from '../../../constants/layout';

export default function AboutSection() {
  return (
    <section className="bg-white" id="sobre">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Sobre Adriana Borges
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a profissional por trás dos melhores resultados em despigmentação a laser da região
          </p>
        </div>

        {/* Layout Principal: Conteúdo + Imagem */}
        <div className={`${TWO_COLUMN_GRID} gap-12`}>
          {/* Conteúdo à Esquerda */}
          <AboutContent />
          
          {/* Imagem à Direita */}
          <AboutImage />
        </div>
      </div>
    </section>
  );
}
