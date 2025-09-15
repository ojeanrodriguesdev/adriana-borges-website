'use client';

import { CONTACT_INFO, WHATSAPP_LINKS, generateWhatsAppLink, BUSINESS_HOURS } from '../../../constants/links';
import { WhatsAppIcon, PhoneIcon, EmailIcon } from '../../ui/Icon';

const contactInfo = [
  {
    icon: <WhatsAppIcon className="w-6 h-6" />,
    title: "WhatsApp",
    description: "Resposta rápida e agendamento direto",
    action: "Conversar no WhatsApp",
    href: generateWhatsAppLink(WHATSAPP_LINKS.default.message, 'website', 'whatsapp', 'contact_section'),
    utmSource: 'website',
    utmMedium: 'whatsapp',
    utmCampaign: 'contact_section'
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: "Telefone",
    description: "Atendimento direto e personalizado",
    action: "Ligar Agora",
    href: `tel:${CONTACT_INFO.phone}`,
    utmSource: 'website',
    utmMedium: 'phone',
    utmCampaign: 'contact_section'
  },
  {
    icon: <EmailIcon className="w-6 h-6" />,
    title: "E-mail",
    description: "Para dúvidas detalhadas e orçamentos",
    action: "Enviar E-mail",
    href: `mailto:${CONTACT_INFO.email}`,
    utmSource: 'website',
    utmMedium: 'email',
    utmCampaign: 'contact_section'
  }
];

function ContactCard({ info }) {
  const handleClick = () => {
    // Tracking de evento para analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_click', {
        event_category: 'contact',
        event_label: info.title.toLowerCase(),
        utm_source: info.utmSource,
        utm_medium: info.utmMedium,
        utm_campaign: info.utmCampaign
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200">
      <div className="text-gray-600 mb-4 flex justify-center">
        {info.icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{info.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{info.description}</p>
      <a
        href={info.href}
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
        target={info.href.startsWith('http') ? '_blank' : '_self'}
        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {info.action}
      </a>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, index) => (
          <ContactCard key={index} info={info} />
        ))}
      </div>
      
      {/* Horários de Atendimento */}
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Horários de Atendimento</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium">{BUSINESS_HOURS.weekdays.label}</p>
              <p>{BUSINESS_HOURS.weekdays.start} às {BUSINESS_HOURS.weekdays.end}</p>
            </div>
            <div>
              <p className="font-medium">{BUSINESS_HOURS.saturday.label}</p>
              <p>{BUSINESS_HOURS.saturday.start} às {BUSINESS_HOURS.saturday.end}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
