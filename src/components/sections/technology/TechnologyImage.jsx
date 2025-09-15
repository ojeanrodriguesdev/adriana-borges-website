export default function TechnologyImage() {
  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format&q=80" 
          alt="Laser Ladybug - Equipamento de despigmentação a laser Q-Switched Nd:YAG com sistema de resfriamento integrado e tecnologia de precisão para remoção de pigmentos" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          <strong>Laser Ladybug Q-Switched Nd:YAG</strong>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Equipamento certificado pela ANVISA com tecnologia de ponta para despigmentação
        </p>
      </div>
      
      {/* Badge de Certificação */}
      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xs text-green-600">✓</span>
          <span className="text-xs font-medium text-gray-900">ANVISA</span>
        </div>
      </div>
    </div>
  );
}
