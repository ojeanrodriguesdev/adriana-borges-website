import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroTrustSection from './HeroTrustSection';
import { CONTAINER_CLASSES, SECTION_PADDING, TWO_COLUMN_GRID } from '../../../constants/layout';

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Layout principal: Conteúdo + Imagem */}
        <div className={`${TWO_COLUMN_GRID} min-h-full`}>
          {/* Conteúdo Principal */}
          <HeroContent />
          
          {/* Imagem Hero */}
          <HeroImage />
        </div>
        
        {/* Seção de Confiança e Benefícios embaixo */}
        <HeroTrustSection />
      </div>
    </section>
  );
}
