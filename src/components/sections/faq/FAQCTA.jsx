import { PRIMARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function FAQCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Ainda com dúvidas?
        </h3>
        <p className="text-gray-600 mb-6">
          Nossa equipe está sempre disponível para esclarecer qualquer questão 
          sobre despigmentação a laser. Entre em contato conosco!
        </p>
        
        <a
          href="https://wa.me/5513999999999?text=Olá%20Adriana!%20Tenho%20algumas%20dúvidas%20sobre%20despigmentação%20a%20laser%20que%20não%20encontrei%20no%20FAQ."
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA WhatsApp FAQ
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_whatsapp_faq_click', {
                event_category: 'engagement',
                event_label: 'faq_section'
              });
            }
          }}
        >
          <span className="mr-2">💬</span>
          Fale comigo no WhatsApp
        </a>
      </div>
    </div>
  );
}
