import { PRIMARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function CareCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Ainda tem dúvidas sobre os cuidados?
        </h3>
        <p className="text-gray-600 mb-6">
          Nossa equipe está sempre disponível para esclarecer qualquer questão sobre o pós-tratamento.
        </p>
        
        <a
          href="https://wa.me/5513999999999?text=Olá%20Adriana!%20Tenho%20dúvidas%20sobre%20os%20cuidados%20pós-sessão%20de%20despigmentação."
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA WhatsApp cuidados
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_whatsapp_cuidados_click', {
                event_category: 'engagement',
                event_label: 'care_section'
              });
            }
          }}
        >
          <span className="mr-2">💬</span>
          Tirar Dúvidas no WhatsApp
        </a>
      </div>
    </div>
  );
}
