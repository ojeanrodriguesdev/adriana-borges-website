export default function AboutImage() {
  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&auto=format&q=80" 
          alt="Adriana Borges - Especialista em Despigmentação a Laser, formada pela European Laser School com mais de 10 anos de experiência em micropigmentação e foco exclusivo em despigmentação desde 2016" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Overlay com informações */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <div className="text-white">
          <h3 className="text-lg font-medium mb-1">Adriana Borges</h3>
          <p className="text-sm opacity-90">Especialista em Despigmentação a Laser</p>
        </div>
      </div>
      
      {/* Badge de certificação */}
      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-600">🎓</span>
          <span className="text-xs font-medium text-gray-900">European Laser School</span>
        </div>
      </div>
    </div>
  );
}
