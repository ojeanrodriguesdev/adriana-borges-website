'use client';

import { PRIMARY_BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES } from '../../../constants/layout';
import { WHATSAPP_LINKS, SOCIAL_LINKS, generateWhatsAppLink, generateUTMLink } from '../../../constants/links';
import { WhatsAppIcon, InstagramIcon } from '../../ui/Icon';

export default function ContactCTAs() {
  const handleWhatsAppClick = () => {
    // Tracking de evento para analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_cta_click', {
        event_category: 'contact',
        event_label: 'main_cta',
        utm_source: 'website',
        utm_medium: 'whatsapp_cta',
        utm_campaign: 'contact_section'
      });
    }
  };

  const handleInstagramClick = () => {
    // Tracking de evento para analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'instagram_cta_click', {
        event_category: 'social',
        event_label: 'instagram_profile',
        utm_source: 'website',
        utm_medium: 'instagram_cta',
        utm_campaign: 'contact_section'
      });
    }
  };

  return (
    <div className="text-center mb-16">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          Pronto para começar seu tratamento?
        </h3>
        <p className="text-gray-600 mb-8">
          Entre em contato agora mesmo e agende sua consulta de avaliação gratuita
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* CTA Principal - WhatsApp */}
          <a
            href={generateWhatsAppLink(WHATSAPP_LINKS.default.message, 'website', 'whatsapp_cta', 'contact_section')}
            onClick={handleWhatsAppClick}
            className={`${PRIMARY_BUTTON_CLASSES} bg-green-600 hover:bg-green-700`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Agendar no WhatsApp
          </a>
          
          {/* CTA Secundário - Instagram */}
          <a
            href={generateUTMLink(SOCIAL_LINKS.instagram.url, 'website', 'instagram_cta', 'contact_section')}
            onClick={handleInstagramClick}
            className={SECONDARY_BUTTON_CLASSES}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-5 h-5 mr-2" />
            Ver Instagram
          </a>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Resposta garantida em até 2 horas</p>
          <p>Consulta de avaliação gratuita</p>
        </div>
      </div>
    </div>
  );
}
