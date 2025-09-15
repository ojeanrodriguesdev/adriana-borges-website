'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    treatmentType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tracking de evento para analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'contact',
        event_label: 'contact_form',
        utm_source: 'website',
        utm_medium: 'contact_form',
        utm_campaign: 'contact_section'
      });
    }

    try {
      // Simular envio do formulário (substituir por integração real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Aqui você integraria com seu backend ou serviço de e-mail
      console.log('Form data:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        treatmentType: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mb-16">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <div className="text-green-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-green-800 mb-2">
            Mensagem enviada com sucesso!
          </h3>
          <p className="text-green-700">
            Entraremos em contato em breve. Obrigado pelo seu interesse!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Ou envie uma mensagem
          </h3>
          <p className="text-gray-600">
            Preencha o formulário abaixo e entraremos em contato
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent min-h-[44px]"
                placeholder="Seu nome completo"
                aria-describedby="name-error"
                aria-invalid={formData.name && formData.name.length < 2}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent min-h-[44px]"
                placeholder="seu@email.com"
                aria-describedby="email-error"
                aria-invalid={formData.email && !formData.email.includes('@')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent min-h-[44px]"
                placeholder="(11) 99999-9999"
                aria-describedby="phone-error"
              />
            </div>

            <div>
              <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de tratamento
              </label>
              <select
                id="treatmentType"
                name="treatmentType"
                value={formData.treatmentType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent min-h-[44px]"
                aria-describedby="treatment-error"
              >
                <option value="">Selecione uma opção</option>
                <option value="tattoo">Remoção de Tatuagem</option>
                <option value="micropigmentation">Remoção de Micropigmentação</option>
                <option value="pigmentation">Despigmentação de Manchas</option>
                <option value="consultation">Consulta de Avaliação</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent min-h-[44px]"
              placeholder="Conte-nos sobre sua necessidade ou dúvida..."
              aria-describedby="message-error"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[120px]"
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Ao enviar este formulário, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </div>
  );
}
