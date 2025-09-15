/**
 * Componente para links internos otimizados para SEO
 */

export default function InternalLinks() {
  const internalLinks = [
    {
      from: "hero",
      to: "tecnologia",
      text: "Conheça nossa tecnologia laser",
      anchor: "tecnologia"
    },
    {
      from: "beneficios",
      to: "depoimentos",
      text: "Veja os resultados reais",
      anchor: "depoimentos"
    },
    {
      from: "sobre",
      to: "contato",
      text: "Agende sua consulta",
      anchor: "contato"
    },
    {
      from: "depoimentos",
      to: "contraindicacoes",
      text: "Verifique as contraindicações",
      anchor: "contraindicacoes"
    },
    {
      from: "contraindicacoes",
      to: "faq",
      text: "Tire suas dúvidas",
      anchor: "faq"
    }
  ];

  return (
    <div className="hidden">
      {/* Links internos para SEO - não visíveis na interface */}
      {internalLinks.map((link, index) => (
        <a
          key={index}
          href={`#${link.anchor}`}
          aria-label={link.text}
          className="sr-only"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

/**
 * Hook para geração automática de links internos contextuais
 */
export function useInternalLinks(currentSection) {
  const linkMap = {
    hero: [
      { to: "tecnologia", text: "Tecnologia Laser", description: "Conheça o laser Q-Switched Nd:YAG" },
      { to: "beneficios", text: "Benefícios", description: "Vantagens do tratamento" },
      { to: "depoimentos", text: "Resultados", description: "Veja casos reais" }
    ],
    tecnologia: [
      { to: "beneficios", text: "Benefícios", description: "Vantagens da tecnologia" },
      { to: "sobre", text: "Sobre Adriana", description: "Conheça a profissional" },
      { to: "contato", text: "Agendar", description: "Marque sua consulta" }
    ],
    beneficios: [
      { to: "depoimentos", text: "Depoimentos", description: "Resultados reais" },
      { to: "tecnologia", text: "Tecnologia", description: "Como funciona" },
      { to: "contato", text: "Contato", description: "Fale conosco" }
    ],
    sobre: [
      { to: "contato", text: "Contato", description: "Agende sua consulta" },
      { to: "depoimentos", text: "Depoimentos", description: "Veja os resultados" },
      { to: "faq", text: "FAQ", description: "Tire suas dúvidas" }
    ],
    depoimentos: [
      { to: "contato", text: "Agendar", description: "Marque sua consulta" },
      { to: "contraindicacoes", text: "Contraindicações", description: "Verifique se pode fazer" },
      { to: "faq", text: "Dúvidas", description: "Perguntas frequentes" }
    ],
    contato: [
      { to: "depoimentos", text: "Depoimentos", description: "Veja os resultados" },
      { to: "faq", text: "FAQ", description: "Tire suas dúvidas" },
      { to: "tecnologia", text: "Tecnologia", description: "Conheça o laser" }
    ]
  };

  return linkMap[currentSection] || [];
}

/**
 * Componente de navegação contextual
 */
export function ContextualNavigation({ currentSection }) {
  const links = useInternalLinks(currentSection);

  if (links.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Continue explorando
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.to}`}
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <h4 className="font-medium text-gray-900 mb-1">
              {link.text}
            </h4>
            <p className="text-sm text-gray-600">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
