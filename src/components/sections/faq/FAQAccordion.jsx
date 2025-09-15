'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  const faqItems = [
    {
      question: "A despigmentação a laser é dolorosa?",
      answer: "A sensação varia de pessoa para pessoa, mas a maioria descreve como um desconforto leve, similar a um elástico batendo na pele. O equipamento possui sistema de resfriamento que ajuda a minimizar o desconforto. Para áreas mais sensíveis, podemos usar anestésico tópico. A dor é momentânea e muito menor que a dor de uma tatuagem, por exemplo."
    },
    {
      question: "Quantas sessões são necessárias para remover completamente uma tatuagem?",
      answer: "O número de sessões varia conforme o tamanho, cor, profundidade e idade da tatuagem. Geralmente são necessárias entre 4 a 8 sessões, com intervalo de 6 a 8 semanas entre elas. Tatuagens pretas e azuis respondem melhor ao tratamento. Tatuagens coloridas, especialmente vermelhas e amarelas, podem precisar de mais sessões. Cada caso é único e será avaliado individualmente."
    },
    {
      question: "Posso fazer despigmentação no verão?",
      answer: "Sim, mas com cuidados especiais. É fundamental usar protetor solar FPS 50+ todos os dias e evitar exposição direta ao sol por 15 dias após cada sessão. Recomendamos o tratamento durante o inverno ou em períodos de menor exposição solar para facilitar os cuidados pós-tratamento. O importante é seguir rigorosamente as orientações de proteção solar."
    },
    {
      question: "Quanto tempo leva para ver os resultados?",
      answer: "Os primeiros resultados podem ser visíveis já na primeira sessão, especialmente em tatuagens mais antigas e escuras. O processo de eliminação é gradual e contínuo, com melhora progressiva a cada sessão. O resultado final é visível após 3 a 6 meses da última sessão, quando o processo de eliminação natural pelo corpo se completa. A paciência é fundamental para o sucesso do tratamento."
    },
    {
      question: "A despigmentação pode causar cicatrizes?",
      answer: "Quando realizada por profissional qualificado e com equipamento adequado, o risco de cicatrizes é muito baixo. O laser Q-Switched é especificamente desenvolvido para não danificar a pele ao redor. Seguir corretamente os cuidados pós-tratamento é fundamental para evitar complicações. Em casos raros de pele muito sensível, podem ocorrer alterações de textura, mas cicatrizes permanentes são incomuns."
    },
    {
      question: "Posso fazer exercícios após a sessão?",
      answer: "Recomendamos evitar exercícios intensos por 48 horas após cada sessão, especialmente atividades que causem muito suor. Exercícios leves podem ser retomados gradualmente. O suor excessivo pode irritar a área tratada e comprometer a cicatrização. Após 48 horas, você pode retomar suas atividades normais, sempre respeitando os cuidados de proteção solar e higiene."
    },
    {
      question: "Qual a diferença entre despigmentação e remoção de tatuagem?",
      answer: "São termos que se referem ao mesmo procedimento. A despigmentação a laser é o nome técnico correto, pois o laser não 'remove' a tatuagem, mas sim fragmenta as partículas de pigmento para que o corpo as elimine naturalmente. O termo 'remoção de tatuagem' é mais popular, mas ambos se referem ao mesmo tratamento com laser Q-Switched para eliminar pigmentos da pele."
    },
    {
      question: "Posso fazer despigmentação em micropigmentação de sobrancelhas?",
      answer: "Sim, a despigmentação é muito eficaz para micropigmentação de sobrancelhas. Geralmente são necessárias 2 a 4 sessões, dependendo da cor e profundidade do pigmento. O procedimento é seguro na região dos olhos quando realizado por profissional experiente. Cuidados especiais incluem evitar dormir de lado por alguns dias e não usar maquiagem na região por uma semana após cada sessão."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openItems[index] || false;
          
          return (
            <div key={item.question} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset min-h-[44px]"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                aria-label={`${item.question}. ${isOpen ? 'Fechar' : 'Abrir'} resposta.`}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
