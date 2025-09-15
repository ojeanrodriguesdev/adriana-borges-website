import { PRIMARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function ContraindicationsCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-medium text-gray-900 mb-4">
          Pronto para agendar sua avaliação?
        </h3>
        <p className="text-gray-600 mb-6">
          Durante a avaliação, verificaremos todas as contraindicações e criaremos 
          um plano de tratamento personalizado para você.
        </p>
        
        <a
          href="https://wa.me/5513999999999?text=Olá%20Adriana!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20despigmentação%20a%20laser.%20Já%20verifiquei%20as%20contraindicações."
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA WhatsApp avaliação
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_whatsapp_avaliacao_click', {
                event_category: 'engagement',
                event_label: 'contraindications_section'
              });
            }
          }}
        >
          <span className="mr-2">📅</span>
          Agendar Avaliação (WhatsApp)
        </a>
      </div>
    </div>
  );
}
