export default function TechnologyContent() {
  return (
    <div className="space-y-8">
      {/* Explicação Principal */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-6">
          Como Funciona a Tecnologia
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          O Laser Ladybug utiliza dois comprimentos de onda específicos que trabalham como "chaves" 
          que abrem apenas as "fechaduras" certas na sua pele. Cada comprimento de onda tem uma 
          função específica e é escolhido conforme o tipo de pigmento a ser removido.
        </p>
        <p className="text-gray-700 leading-relaxed">
          É como ter duas ferramentas especializadas: uma para pigmentos escuros (pretos, azuis) 
          e outra para tons avermelhados (vermelhos, laranjas). O laser identifica automaticamente 
          o tipo de pigmento e ajusta a energia necessária para removê-lo com precisão cirúrgica.
        </p>
      </div>

      {/* Mini-tabela de Comprimentos */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Comprimentos de Onda Especializados
        </h4>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">1064</span>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-1">1064 nm</h5>
              <p className="text-sm text-gray-600">
                Especializado em pigmentos escuros: pretos, azuis, verdes escuros e marrons profundos.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-red-600 font-bold text-sm">532</span>
            </div>
            <div>
              <h5 className="font-medium text-gray-900 mb-1">532 nm</h5>
              <p className="text-sm text-gray-600">
                Otimizado para tons avermelhados: vermelhos, laranjas, amarelos e marrons claros.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vantagens da Tecnologia */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h4 className="text-lg font-medium text-gray-900 mb-4">
          Vantagens do Laser Ladybug
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
            Sistema de resfriamento integrado para maior conforto
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
            Ajuste automático de energia conforme o tipo de pele
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
            Tecnologia Q-Switched para máxima eficácia
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
            Certificação ANVISA/INMETRO
          </li>
        </ul>
      </div>
    </div>
  );
}
