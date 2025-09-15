'use client';

export default function LaserVideo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
        Veja Como Funciona
      </h3>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Despigmentação a Laser - Como Funciona o Procedimento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        <div className="p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Despigmentação a Laser - Procedimento Completo
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            Assista ao procedimento completo de despigmentação a laser, desde a preparação até os cuidados pós-tratamento.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/watch?v=sobrancelhas-video"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">📹</span>
              Vídeo sobre Sobrancelhas
            </a>
            <a
              href="https://www.youtube.com/watch?v=cuidados-video"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">🛡️</span>
              Cuidados Pós-Tratamento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
