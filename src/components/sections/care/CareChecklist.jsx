'use client';

import { useState } from 'react';

export default function CareChecklist() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const careCategories = [
    {
      title: "Higiene e Limpeza",
      icon: "🧼",
      items: [
        "Lave a área tratada com sabonete neutro 2x ao dia",
        "Seque suavemente com toalha limpa, sem esfregar",
        "Mantenha a área sempre limpa e seca",
        "Use apenas produtos recomendados pela profissional"
      ]
    },
    {
      title: "Proteção Solar",
      icon: "☀️",
      items: [
        "Use protetor solar FPS 50+ todos os dias",
        "Evite exposição direta ao sol por 15 dias",
        "Use chapéu ou boné quando sair de casa",
        "Reaplique o protetor a cada 2 horas"
      ]
    },
    {
      title: "Produtos e Hidratação",
      icon: "🧴",
      items: [
        "Aplique o creme cicatrizante conforme orientado",
        "Use apenas produtos hipoalergênicos",
        "Mantenha a pele hidratada com produtos adequados",
        "Evite produtos com álcool ou fragrâncias"
      ]
    },
    {
      title: "Restrições e Atividades",
      icon: "⏰",
      items: [
        "Evite piscina e mar por 15 dias",
        "Não pratique exercícios intensos por 48h",
        "Evite sauna e banho quente por 1 semana",
        "Não coce ou mexa na área tratada"
      ]
    }
  ];

  const eyebrowNotes = [
    "Para sobrancelhas: evite dormir de lado por 3 dias",
    "Não use maquiagem na região por 7 dias",
    "Evite pentear as sobrancelhas por 5 dias"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cuidados Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {careCategories.map((category, categoryIndex) => (
          <div key={category.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xl">{category.icon}</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isChecked = checkedItems[key] || false;
                
                return (
                  <label key={item} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(categoryIndex, itemIndex)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className={`text-sm leading-relaxed transition-colors ${
                      isChecked ? 'text-gray-500 line-through' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Notas Específicas para Sobrancelhas */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-sm">👁️</span>
          </div>
          <h3 className="text-lg font-medium text-blue-900">Cuidados Especiais para Sobrancelhas</h3>
        </div>
        
        <div className="space-y-2">
          {eyebrowNotes.map((note) => (
            <div key={note} className="flex items-start gap-2">
              <span className="text-blue-600 text-sm mt-0.5">•</span>
              <span className="text-sm text-blue-800">{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Destaque para 15 dias */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-2xl">⚠️</span>
          <h3 className="text-lg font-medium text-yellow-900">Período Crítico: 15 Dias</h3>
        </div>
        <p className="text-sm text-yellow-800">
          Os primeiros 15 dias são fundamentais para o sucesso do tratamento. 
          Siga rigorosamente todas as orientações durante este período.
        </p>
      </div>
    </div>
  );
}
