export default function ContraindicationsList() {
  const contraindications = [
    {
      category: "Medicamentos",
      items: [
        "Uso de Roacutan (isotretinoína) nos últimos 6 meses",
        "Uso de antibióticos fotossensibilizantes",
        "Uso de medicamentos anticoagulantes",
        "Tratamento com quimioterapia ou radioterapia"
      ]
    },
    {
      category: "Procedimentos Estéticos",
      items: [
        "Aplicação de botox nos últimos 21 dias",
        "Preenchimentos na área a ser tratada nos últimos 30 dias",
        "Peelings químicos profundos nos últimos 30 dias",
        "Tratamentos com laser ablativos nos últimos 60 dias"
      ]
    },
    {
      category: "Condições de Saúde",
      items: [
        "Gravidez e amamentação",
        "Diabetes descompensada",
        "Doenças autoimunes ativas",
        "Histórico de cicatrizes queloides"
      ]
    },
    {
      category: "Exposição Solar",
      items: [
        "Bronzeamento artificial nos últimos 30 dias",
        "Exposição solar intensa nos últimos 15 dias",
        "Queimaduras solares recentes na área",
        "Uso de bronzeadores ou aceleradores de bronzeamento"
      ]
    },
    {
      category: "Pele e Tatuagens",
      items: [
        "Pele muito bronzeada na área a ser tratada",
        "Tatuagens com tinta branca ou amarela",
        "Tatuagens muito recentes (menos de 3 meses)",
        "Pele com irritações, cortes ou feridas abertas"
      ]
    },
    {
      category: "Outras Situações",
      items: [
        "Epilepsia não controlada",
        "Uso de marcapasso",
        "Alergia conhecida à luz",
        "Tratamento com fotossensibilizantes sistêmicos"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Aviso Importante */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 text-sm">⚠️</span>
          </div>
          <h3 className="text-lg font-medium text-red-900">Aviso Importante</h3>
        </div>
        <p className="text-sm text-red-800 mb-4">
          É fundamental informar todas as condições médicas, medicamentos em uso e procedimentos 
          estéticos recentes durante a avaliação. A segurança do tratamento depende da transparência 
          completa do seu histórico.
        </p>
        <p className="text-xs text-red-700 italic">
          Em caso de dúvidas, consulte sempre um profissional médico antes de agendar sua sessão.
        </p>
      </div>

      {/* Lista de Contraindicações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {contraindications.map((category) => (
          <div key={category.category} className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              {category.category}
            </h3>
            
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-red-500 text-sm mt-1">•</span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item.includes('21 dias') && (
                      <em className="text-gray-500"> (prazo mínimo de 21 dias)</em>
                    )}
                    {item.includes('30 dias') && (
                      <em className="text-gray-500"> (prazo mínimo de 30 dias)</em>
                    )}
                    {item.includes('60 dias') && (
                      <em className="text-gray-500"> (prazo mínimo de 60 dias)</em>
                    )}
                    {item.includes('6 meses') && (
                      <em className="text-gray-500"> (prazo mínimo de 6 meses)</em>
                    )}
                    {item.includes('3 meses') && (
                      <em className="text-gray-500"> (prazo mínimo de 3 meses)</em>
                    )}
                    {item.includes('15 dias') && (
                      <em className="text-gray-500"> (prazo mínimo de 15 dias)</em>
                    )}
                    {!item.includes('21 dias') && !item.includes('30 dias') && !item.includes('60 dias') && !item.includes('6 meses') && !item.includes('3 meses') && !item.includes('15 dias') && item}
                    {item.includes('21 dias') && item.replace(' (prazo mínimo de 21 dias)', '')}
                    {item.includes('30 dias') && item.replace(' (prazo mínimo de 30 dias)', '')}
                    {item.includes('60 dias') && item.replace(' (prazo mínimo de 60 dias)', '')}
                    {item.includes('6 meses') && item.replace(' (prazo mínimo de 6 meses)', '')}
                    {item.includes('3 meses') && item.replace(' (prazo mínimo de 3 meses)', '')}
                    {item.includes('15 dias') && item.replace(' (prazo mínimo de 15 dias)', '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Link para FAQ/Contato */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          Ainda tem dúvidas sobre contraindicações?
        </p>
        <a 
          href="#contato" 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          Consulte nossa seção de FAQ ou entre em contato
        </a>
      </div>
    </div>
  );
}
