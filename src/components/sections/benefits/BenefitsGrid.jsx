export default function BenefitsGrid() {
  const benefits = [
    {
      icon: "🎯",
      title: "Precisão Cirúrgica",
      description: "Remove apenas o pigmento desejado, preservando a pele saudável ao redor com máxima precisão."
    },
    {
      icon: "⚡",
      title: "Processo Rápido",
      description: "Sessões de 15-45 minutos com resultados visíveis já nas primeiras aplicações do tratamento."
    },
    {
      icon: "🛡️",
      title: "Segurança Comprovada",
      description: "Tecnologia aprovada pela ANVISA com baixíssimo risco de efeitos colaterais ou complicações."
    },
    {
      icon: "💪",
      title: "Sem Cicatrizes",
      description: "Não causa cicatrizes permanentes, mantendo a textura natural e suavidade da pele."
    },
    {
      icon: "🔄",
      title: "Versatilidade Total",
      description: "Eficaz em tatuagens, micropigmentação, manchas e diversos tipos de pigmentação da pele."
    },
    {
      icon: "📈",
      title: "Resultados Duradouros",
      description: "Eliminação permanente do pigmento com manutenção mínima e resultados que perduram no tempo."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
            <span className="text-2xl">{benefit.icon}</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}
