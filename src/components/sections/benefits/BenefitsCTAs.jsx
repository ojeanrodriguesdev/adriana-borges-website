import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function BenefitsCTAs() {
  return (
    <div className="mt-16 text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#tecnologia"
          className={PRIMARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA tecnologia
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_tecnologia_click', {
                event_category: 'engagement',
                event_label: 'benefits_section'
              });
            }
          }}
        >
          Ver Tecnologia
        </a>
        <a
          href="#resultados"
          className={SECONDARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA resultados
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_resultados_click', {
                event_category: 'engagement',
                event_label: 'benefits_section'
              });
            }
          }}
        >
          Ver Resultados
        </a>
      </div>
    </div>
  );
}
