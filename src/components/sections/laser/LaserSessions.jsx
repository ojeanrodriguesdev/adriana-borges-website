export default function LaserSessions() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
          Sobre as Sessões
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-900 font-medium">⏱️</span>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Duração</h4>
            <p className="text-sm text-gray-600">
              Cada sessão dura entre 15 a 45 minutos, dependendo do tamanho e complexidade da área a ser tratada.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-900 font-medium">📅</span>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Intervalo</h4>
            <p className="text-sm text-gray-600">
              Recomenda-se intervalo de 6 a 8 semanas entre as sessões para permitir a eliminação natural dos fragmentos.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-900 font-medium">📈</span>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Expectativa</h4>
            <p className="text-sm text-gray-600">
              Geralmente são necessárias 4 a 8 sessões para remoção completa, variando conforme o tipo e profundidade do pigmento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
