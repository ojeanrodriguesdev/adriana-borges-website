import LaserIntro from './LaserIntro';
import LaserSteps from './LaserSteps';
import LaserSessions from './LaserSessions';
import LaserVideo from './LaserVideo';
import { CONTAINER_CLASSES, SECTION_PADDING } from '../../../constants/layout';

export default function LaserSection() {
  return (
    <section className="bg-gray-50" id="o-que-e">
      <div className={`${CONTAINER_CLASSES} ${SECTION_PADDING}`}>
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            O que é Despigmentação a Laser?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entenda como funciona a tecnologia mais avançada para remoção de pigmentos da pele
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-20">
          {/* Introdução */}
          <LaserIntro />
          
          {/* Passos Visuais */}
          <LaserSteps />
          
          {/* Sobre as Sessões */}
          <LaserSessions />
          
          {/* Vídeo Principal */}
          <LaserVideo />
        </div>
      </div>
    </section>
  );
}
