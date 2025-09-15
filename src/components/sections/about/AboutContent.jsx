import AboutCTA from './AboutCTA';

export default function AboutContent() {
  return (
    <div className="space-y-8">
      {/* Bio Principal */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Adriana Borges é uma especialista dedicada e apaixonada pela despigmentação a laser, 
          com mais de 10 anos de experiência em micropigmentação e foco exclusivo em despigmentação 
          desde 2016. Formada pela renomada European Laser School, Adriana combina conhecimento 
          técnico avançado com um atendimento humanizado, oferecendo resultados excepcionais 
          e segurança máxima para seus pacientes.
        </p>
      </div>

      {/* Chips de Autoridade */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Qualificações e Especializações</h3>
        <div className="flex flex-wrap gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
            <span className="text-blue-700 text-sm font-medium">European Laser School</span>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <span className="text-green-700 text-sm font-medium">10 anos em Micropigmentação</span>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
            <span className="text-purple-700 text-sm font-medium">Desde 2016 em Despigmentação</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Trajetória Profissional</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-sm font-medium">2016</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Primeiro Contato com Dr. André</h4>
              <p className="text-sm text-gray-600">
                Conheceu as técnicas avançadas de despigmentação a laser com o renomado Dr. André, 
                iniciando sua especialização na área.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-sm font-medium">→</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Foco Exclusivo em Despigmentação</h4>
              <p className="text-sm text-gray-600">
                Desde 2016, dedica-se exclusivamente à despigmentação a laser, acumulando experiência 
                e refinando suas técnicas para oferecer os melhores resultados.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-600 text-sm font-medium">Hoje</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Atendimento em Santos e Praia Grande</h4>
              <p className="text-sm text-gray-600">
                Atende pacientes em Santos e Praia Grande, oferecendo a tecnologia mais avançada 
                em despigmentação a laser da região.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <AboutCTA />
    </div>
  );
}
