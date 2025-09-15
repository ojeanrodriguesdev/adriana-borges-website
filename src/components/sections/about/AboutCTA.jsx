import { PRIMARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function AboutCTA() {
  return (
    <div className="pt-6">
      <a
        href="#resultados"
        className={PRIMARY_BUTTON_CLASSES}
        onClick={() => {
          // Evento de tracking para CTA resultados
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'cta_ver_resultados_click', {
              event_category: 'engagement',
              event_label: 'about_section'
            });
          }
        }}
      >
        Ver Resultados
      </a>
    </div>
  );
}
