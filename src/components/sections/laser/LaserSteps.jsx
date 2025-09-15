
export default function LaserSteps() {
  const steps = [
    {
      number: "01",
      title: "Alvo do Pigmento",
      description: "O laser identifica e localiza especificamente as partículas de pigmento na pele, preservando o tecido saudável ao redor.",
      icon: "🎯"
    },
    {
      number: "02", 
      title: "Pulsos Ultracurtos",
      description: "Emissão de pulsos de luz de nanosegundos que penetram na pele sem gerar calor excessivo.",
      icon: "⚡"
    },
    {
      number: "03",
      title: "Fragmentação",
      description: "As partículas de pigmento são quebradas em micro-fragmentos através do efeito fotoacústico.",
      icon: "💥"
    },
    {
      number: "04",
      title: "Eliminação Natural",
      description: "O sistema linfático naturalmente elimina os fragmentos de pigmento ao longo das semanas seguintes.",
      icon: "♻️"
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-light text-gray-900 text-center mb-12">
        Como Funciona o Processo
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center group">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">{step.number}</div>
            <h4 className="text-lg font-medium text-gray-900 mb-3">{step.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
