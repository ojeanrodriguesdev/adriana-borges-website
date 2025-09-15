'use client';

import { SPACE_Y, PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../../constants/layout';

export default function HeroContent() {
  return (
    <div className={SPACE_Y}>
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          Especialista em Despigmentação a Laser
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight">
          Despigmentação a laser com segurança, tecnologia e resultados que transformam sua pele.
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          Remoção de tatuagens e micropigmentação com laser Q-Switched Nd:YAG. 
          Atendimento em Santos e Praia Grande.
        </p>
      </div>
    
      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/5513999999999?text=Olá%20Adriana!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20despigmentação%20a%20laser."
          target="_blank"
          rel="noopener noreferrer"
          className={PRIMARY_BUTTON_CLASSES}
          aria-label="Abrir conversa no WhatsApp para agendar avaliação"
          onClick={() => {
            // Evento de tracking para CTA WhatsApp
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_whatsapp_click_top', {
                event_category: 'engagement',
                event_label: 'hero_section'
              });
            }
          }}
        >
          Agendar avaliação no WhatsApp
        </a>
        <a
          href="#como-funciona"
          className={SECONDARY_BUTTON_CLASSES}
          onClick={() => {
            // Evento de tracking para CTA secundário
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_sec_click_top', {
                event_category: 'engagement',
                event_label: 'hero_section'
              });
            }
          }}
        >
          Como funciona
        </a>
      </div>

    </div>
  );
}
